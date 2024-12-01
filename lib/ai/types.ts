export interface TherapyResponse {
  content: string;
  type: 'greeting' | 'question' | 'reflection' | 'suggestion' | 'support';
  sentiment: 'positive' | 'neutral' | 'negative';
  techniques?: string[];
}

export interface EmotionalState {
  primary: string;
  intensity: number;
  triggers?: string[];
  thoughts?: string[];
}

export interface TherapyContext {
  currentEmotion?: EmotionalState;
  previousResponses: TherapyResponse[];
  sessionDuration: number;
  topicsDiscussed: Set<string>;
}