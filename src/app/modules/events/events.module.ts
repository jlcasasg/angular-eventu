import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventCardComponent } from './event-card/event-card.component';
import { SharedModule } from './../../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  declarations: [EventsComponent, EventListComponent, EventCardComponent, EventDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule,
  ],

})
export class EventsModule { }
