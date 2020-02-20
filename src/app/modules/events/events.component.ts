import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/shared/models/event.model';
import { events } from 'src/app/core/event.mock';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Array<EventModel>

  constructor() {
    this.events = events;
  }

  ngOnInit() {
  }

}
