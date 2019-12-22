export interface Event {
  id: number;
  date: Date;
  location: string;
  eventType: string [];
  severityLevel: SeverityLevel;
  conclusions: string;
}


export enum SeverityLevel {
  veryEasy,
  easy,
  medium,
  hard,
  veryHard
}

