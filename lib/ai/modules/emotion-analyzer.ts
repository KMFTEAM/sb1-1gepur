import natural from 'natural';
import nlp from 'compromise';
import { EmotionalState } from '../types';

export class EmotionAnalyzer {
  private tokenizer: natural.WordTokenizer;
  private classifier: natural.BayesClassifier;

  constructor(emotionalPatterns: Record<string, { keywords: string[] }>) {
    this.tokenizer = new natural.WordTokenizer();
    this.classifier = new natural.BayesClassifier();

    // Initialize classifier with patterns
    Object.entries(emotionalPatterns).forEach(([emotion, data]) => {
      data.keywords.forEach(keyword => {
        this.classifier.addDocument(keyword, emotion);
      });
    });
    this.classifier.train();
  }

  public analyze(text: string): EmotionalState {
    const tokens = this.tokenizer.tokenize(text.toLowerCase());
    const doc = nlp(text);
    
    const emotionScores = tokens.map(token => ({
      emotion: this.classifier.classify(token),
      confidence: this.classifier.getClassifications(token)[0]?.value || 0
    }));
    
    const primaryEmotion = emotionScores.reduce((prev, current) => 
      current.confidence > prev.confidence ? current : prev,
      { emotion: 'neutral', confidence: 0 }
    );

    return {
      primary: primaryEmotion.emotion,
      intensity: primaryEmotion.confidence,
      thoughts: doc.match('(pienso|creo|siento) que?').out('array')
    };
  }
}