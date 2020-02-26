import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/shared/models/event.model';
import { Observable } from 'rxjs';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events$: Observable<Array<EventModel>>;

  constructor(
    private eventService: EventService,
  ) {

  }

  ngOnInit() {
    this.events$ = this.eventService.getEvents();
  }

}
