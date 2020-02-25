import { Component, OnInit, Input } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ left: 500 }),
        animate('600ms', style({ left: 0 }))
      ]),
      transition('* => void', [
        animate('600ms', style({ left: 500, right: 0 }))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {

  @Input() slider: Array<any>;
  @Input() canShowControls: boolean = true;

  currentSlide: number;

  constructor() {
    this.currentSlide = 0;
  }

  ngOnInit() {
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
