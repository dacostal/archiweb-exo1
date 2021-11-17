import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements OnInit {
  red: string = "red";
  green: string = "green";
  blue: string = "blue";
  yellow: string = "yellow";

  @Output() sendBackgroundToSquare = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setBackground(color: string) {
    this.sendBackgroundToSquare.emit(color);
  }
}
