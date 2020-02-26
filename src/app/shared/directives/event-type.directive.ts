import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appEventType]'
})
export class EventTypeDirective implements AfterViewInit {
  @Input('appEventType') eventType: string;

  colorTypes = {
    social: '#005792',
    cultural: '#295f4e',
    academic: '#6db193',
    other: '#005792'
  }
  constructor(public el: ElementRef) {
  }

  ngAfterViewInit() {
    if (['Social', 'Academic', 'Cultural'].indexOf(this.eventType) < 0) this.eventType = 'other';
    this.el.nativeElement.style.backgroundColor = this.colorTypes[this.eventType.toLowerCase()];
  }
}
