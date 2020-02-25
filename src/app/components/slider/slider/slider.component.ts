import { Component, OnInit, Input, ViewChild, ElementRef, AfterContentChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ left: '{{width}}' }),
        animate('{{speed}}', style({ left: 0, right: 0 }))
      ]),
      transition('* => void', [
        animate('{{speed}}', style({ left: '-{{width}}', right: '{{width}}' }))
      ], { params: { width: '500px', speed: '600ms' } })
    ])
  ]
})
export class SliderComponent implements AfterViewInit {

  @Input() slider: Array<any>;
  @Input() canShowControls: boolean = true;


  currentSlide: number;
  imageWidth: string;
  speed: string;

  constructor(private cdr: ChangeDetectorRef) {
    this.currentSlide = 0;
    this.imageWidth = '300px';
    this.speed = '600ms';
  }

  ngAfterViewInit() {
    const image = ((document.getElementsByClassName('slide')[0] as HTMLImageElement));
    this.imageWidth = (image.width) + 'px';
    this.speed = (image.width) + 'ms';
  }

  prev() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous >= 0 ? previous : this.slider.length - 1;
  }

  next() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slider.length ? 0 : next;
  }
}
