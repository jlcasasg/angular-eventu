import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventCardComponent } from './event-card/event-card.component';
import { SharedModule } from './../../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventService } from './event.service';
import { SliderModule } from 'src/app/components/slider/slider.module';

@NgModule({
  declarations: [
    EventsComponent,
    EventListComponent,
    EventCardComponent,
    EventDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule,
    SliderModule,
  ],
  providers: [
    EventService,
  ]
})
export class EventsModule { }
