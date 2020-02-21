import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from 'src/app/shared/models/event.model';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input()
  event: EventModel;
  
  faClock = faClock;

  constructor() { }

  ngOnInit() {
  }

}
