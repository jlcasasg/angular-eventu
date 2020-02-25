import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    SliderComponent
  ],
  exports: [
    SliderComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
})
export class SliderModule { }
