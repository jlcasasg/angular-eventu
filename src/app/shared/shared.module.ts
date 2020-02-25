import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserChipComponent } from './components/user-chip/user-chip.component';


@NgModule({
    declarations: [
        UserChipComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        FontAwesomeModule,
        CommonModule,
        UserChipComponent
    ]
})
export class SharedModule { }
