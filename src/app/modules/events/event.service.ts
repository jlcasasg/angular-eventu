import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventModel } from 'src/app/shared/models/event.model';
import { events } from 'src/app/core/event.mock';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEventById(id: number): Observable<EventModel> {
    return of(events.filter(event => event.id === id)[0]);
  }


  getEvents(): Observable<Array<EventModel>> {
    return of(events);
  }
}
