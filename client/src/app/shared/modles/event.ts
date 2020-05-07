export interface Event {
  id: number;
  date: Date;
  location: string;
  eventType: string [];
  severityLevel: SeverityLevel;
  conclusions: string;
}


export enum SeverityLevel {
    VeryLow = 1,
    Low = 2,
    Medium = 3,
    Hard = 4,
    VeryHard = 5
}

