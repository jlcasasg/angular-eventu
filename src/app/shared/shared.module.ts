import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserChipComponent } from './components/user-chip/user-chip.component';
import { EventTypeDirective } from './directives/event-type.directive';
import { DisplayDatePipe } from './pipes/display-date.pipe';
import { RaitingComponent } from './components/raiting/raiting.component';


@NgModule({
    declarations: [
        UserChipComponent,
        EventTypeDirective,
        DisplayDatePipe,
        RaitingComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        FontAwesomeModule,
        CommonModule,
        UserChipComponent,
        EventTypeDirective,
        DisplayDatePipe,
        RaitingComponent,
    ]
})
export class SharedModule { }
