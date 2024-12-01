export class SafetyChecker {
  private emergencyKeywords: string[];

  constructor(emergencyKeywords: string[] = []) {
    this.emergencyKeywords = [
      'suicidio',
      'matarme',
      'morir',
      'hacerme daño',
      ...emergencyKeywords
    ];
  }

  public checkForEmergency(text: string): boolean {
    return this.emergencyKeywords.some(keyword => 
      text.toLowerCase().includes(keyword)
    );
  }

  public getSeverityLevel(text: string): 'high' | 'medium' | 'low' {
    const matches = this.emergencyKeywords.filter(keyword => 
      text.toLowerCase().includes(keyword)
    ).length;

    if (matches >= 2) return 'high';
    if (matches === 1) return 'medium';
    return 'low';
  }
}