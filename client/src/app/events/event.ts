export interface Event {
  date: Date;
  location: string;
  eventTypa: string [];
  severityLevel: SeverityLevel;
  conclution: string;
}


export enum SeverityLevel {
  veryEasy,
  easy,
  medium,
  hard,
  veryHard
}

