import {InMemoryDbService} from 'angular-in-memory-web-api';
import {SeverityLevel} from '../modles/event';
import * as faker from 'faker';
import {Report} from '../../reporting-history/reporting-history.component';

export class InMemHeroService implements InMemoryDbService {
  createDb() {

    const events = [
      {id: 1, name: 'Windstorm'},
      {id: 2, name: 'Bombasto'},
      {id: 3, name: 'Magneta'},
      {id: 4, name: 'Tornado'}
    ];

    const reports = this.createReports(10);

    return {events, reports};
  }

  private createReports(i: number) {
    const reports: Report [] = [];
    while (i > 0) {
      reports.push({
        date: faker.date.past(),
        id: faker.random.uuid(),
        eventType: ['fire'],
        carNumber: faker.random.number(),
        severityLevel: SeverityLevel.easy,
        name: faker.name.findName()
      });
      i--;
    }
    return reports;
  }
}
