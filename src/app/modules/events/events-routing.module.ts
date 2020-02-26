import { Routes, RouterModule } from "@angular/router";
import { EventsComponent } from './events.component';
import { NgModule } from '@angular/core';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
    {
        path: 'events',
        component: EventsComponent,
      
    },
    {
        path: 'events/event/:id',
        component: EventDetailComponent,
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }