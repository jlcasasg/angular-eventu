import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventCardComponent } from './event-card/event-card.component';



@NgModule({
  declarations: [EventsComponent, EventListComponent, EventCardComponent],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }
