import {EventType} from './event-type';
import {SeverityLevel} from './severity-level.enum';

export interface Event {
    id: number;
    location: { longitude: number, latitude: number, googlePlacesData: any };
    eventType: EventType;
    severityLevel: SeverityLevel;
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

