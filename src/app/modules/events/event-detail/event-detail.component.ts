import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { EventModel } from 'src/app/shared/models/event.model';
import { events } from 'src/app/core/event.mock';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  calendarIcon = faCalendarAlt;

  event: EventModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    //TODO MAKE EVERYTHING AN OBSERVABLE
    this.event = events.filter(event => event.id === +id)[0];
  }

}
