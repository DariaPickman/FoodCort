import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {


  @Input() currentValue;
  @Output() minus = new EventEmitter();
  @Output() plus = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  clickMinus() {
    this.minus.emit();
  }

  clickPlus() {
  this.plus.emit();
  }
}
