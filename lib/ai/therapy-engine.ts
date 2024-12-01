import { EmotionAnalyzer } from './modules/emotion-analyzer';
import { SafetyChecker } from './modules/safety-checker';
import { ResponseGenerator } from './modules/response-generator';
import { ContextManager } from './modules/context-manager';
import { emotionalPatterns, emergencyResponses } from './therapy-knowledge';
import type { TherapyResponse, TherapyContext } from './types';

export class TherapyEngine {
  private emotionAnalyzer: EmotionAnalyzer;
  private safetyChecker: SafetyChecker;
  private responseGenerator: ResponseGenerator;
  private contextManager: ContextManager;

  constructor() {
    this.emotionAnalyzer = new EmotionAnalyzer(emotionalPatterns);
    this.safetyChecker = new SafetyChecker();
    this.responseGenerator = new ResponseGenerator();
    this.contextManager = new ContextManager();
  }

  public generateResponse(userInput: string): TherapyResponse {
    // Safety check first
    if (this.safetyChecker.checkForEmergency(userInput)) {
      const emergencyResponse = {
        content: emergencyResponses.crisis,
        type: 'support' as const,
        sentiment: 'negative' as const
      };
      this.contextManager.updateContext(emergencyResponse);
      return emergencyResponse;
    }

    // Analyze emotional state
    const emotionalState = this.emotionAnalyzer.analyze(userInput);

    // Generate appropriate response
    const response = this.responseGenerator.generateResponse(
      emotionalState.primary,
      this.contextManager.getContext()
    );

    // Update context
    this.contextManager.updateContext(response, emotionalState);

    return response;
  }

  public getContext(): TherapyContext {
    return this.contextManager.getContext();
  }
}