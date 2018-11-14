import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {
  // Inputs
  @Input() items = [];

  // Outputs
  @Output() cardClick = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  onCardClick(item) {
    this.cardClick.emit(item);
  }

}
