import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  class: string = "square";

  @Output() sendBackgroundToApp = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setBackground(color: string) {
    this.sendBackgroundToApp.emit(color);
  }
}
