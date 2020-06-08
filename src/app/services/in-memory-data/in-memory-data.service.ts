import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {EventModel} from '../../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const events = [
      {
        id: 12,
        name: 'Sport',
        address: 'Ukr',
        date: '12/12/2020',
      }, {
        id: 13,
        name: 'School',
        address: 'Ukr',
        date: '12/12/2020',
      }, {
        id: 14,
        name: 'Event',
        address: 'Ukr',
        date: '12/12/2020',
      }
    ];
    return {events};
  }

  genId(events: EventModel[]): number {
    return events.length > 0 ? Math.max(...events.map(event => event.id)) + 1 : 11;
  }
}
