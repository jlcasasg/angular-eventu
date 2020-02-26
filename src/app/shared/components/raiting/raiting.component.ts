import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss']
})
export class RaitingComponent implements OnInit {
  starIcon = faStar;

  @Input() value: number = 0;
  @Input() canVote: boolean = false;

  @Output() sendVote: EventEmitter<number> = new EventEmitter();

  stars = [5, 4, 3, 2, 1];

  constructor() { }

  ngOnInit() {
  }

  vote(value) {
    this.value = value;
    this.sendVote.emit(value);
  }

}
