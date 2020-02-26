import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { EventModel } from 'src/app/shared/models/event.model';
import { Observable} from 'rxjs';
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
    private eventService: EventService,
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.event$ = this.eventService.getEventById(+id)
    this.event$.subscribe(event => this.event = event);
  }

}
