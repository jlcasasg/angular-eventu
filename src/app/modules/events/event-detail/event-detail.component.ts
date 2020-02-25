import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { EventModel } from 'src/app/shared/models/event.model';
import { events } from 'src/app/core/event.mock';
import { Observable, of } from 'rxjs';
import { EventService } from '../event.service';



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  calendarIcon = faCalendarAlt;

  event$: Observable<EventModel>;
  event;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.event$ = this.eventService.getEventById(+id)
    this.event$.subscribe(event => this.event = event);

  }

}
