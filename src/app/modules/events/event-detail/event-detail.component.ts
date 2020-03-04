import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { EventModel } from 'src/app/shared/models/event.model';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer: ElementRef;

  calendarIcon = faCalendarAlt;

  event$: Observable<EventModel>;
  event;
  map: google.maps.Map;
  coordinates = new google.maps.LatLng(40.72306, -73.25987);
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.event$ = this.eventService.getEventById(+id)
    this.event$.subscribe(event => {
      this.event = event;
      this.coordinates = new google.maps.LatLng(this.event.localization.lat, this.event.localization.lng);
    });
  }

  ngAfterViewInit() {
    let mapOptions: google.maps.MapOptions = {
      zoom: 8,
      center: this.event.localization
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    this.addMarker();
  }


  addMarker() {
    let marker = new google.maps.Marker({
      position: this.event.localization,
      map: this.map
    });

    marker.setMap(this.map);
  }

}
