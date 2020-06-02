export interface Event {
  id: number;
  location: string;
  eventType: {id:number; name:string};
  severityLevel: any;
  images: string [];

  numOfInjured: number;
  numOfDead: number;
  numOfPolice: number;
  numOfAmbulances: number;
  numOfFirefighters: number;
  numOfEnvironment: number;
  numOfZakaCars: number;
  endDate: Date;
  startDate: Date;
  nameInCharge: string;
  note: string;
}


export enum SeverityLevel {
    VeryLow = 1,
    Low = 2,
    Medium = 3,
    Hard = 4,
    VeryHard = 5
}

