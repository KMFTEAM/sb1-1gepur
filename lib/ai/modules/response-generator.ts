import { TherapyResponse } from '../types';
import { therapeuticPhrases, emotionalPatterns } from '../therapy-knowledge';

export class ResponseGenerator {
  private patterns: typeof emotionalPatterns;
  private phrases: typeof therapeuticPhrases;

  constructor(patterns = emotionalPatterns, phrases = therapeuticPhrases) {
    this.patterns = patterns;
    this.phrases = phrases;
  }

  public generateResponse(emotion: string, context: any): TherapyResponse {
    const pattern = this.patterns[emotion as keyof typeof emotionalPatterns];
    
    if (pattern) {
      const response = this.selectRandomResponse(pattern.responses);
      return {
        content: response,
        type: 'reflection',
        sentiment: 'neutral',
        techniques: pattern.techniques
      };
    }

    return {
      content: this.selectRandomResponse(this.phrases.support),
      type: 'support',
      sentiment: 'neutral'
    };
  }

  private selectRandomResponse(responses: string[]): string {
    return responses[Math.floor(Math.random() * responses.length)];
  }
}