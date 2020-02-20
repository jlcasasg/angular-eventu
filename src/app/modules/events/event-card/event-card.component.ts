import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input()
  event: EventModel;
  
  constructor() { }

  ngOnInit() {
  }

}
