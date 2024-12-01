import { TherapyContext, TherapyResponse, EmotionalState } from '../types';

export class ContextManager {
  private context: TherapyContext;

  constructor() {
    this.context = {
      previousResponses: [],
      sessionDuration: 0,
      topicsDiscussed: new Set()
    };
  }

  public updateContext(response: TherapyResponse, emotion?: EmotionalState) {
    this.context.previousResponses.push(response);
    if (emotion) {
      this.context.currentEmotion = emotion;
    }
    this.context.sessionDuration += 1;
  }

  public addTopic(topic: string) {
    this.context.topicsDiscussed.add(topic);
  }

  public getContext(): TherapyContext {
    return this.context;
  }

  public getRecentResponses(count: number = 5): TherapyResponse[] {
    return this.context.previousResponses.slice(-count);
  }
}