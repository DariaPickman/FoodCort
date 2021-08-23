import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.css']
})
export class CloseButtonComponent implements OnInit {
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickClose() {
    this.close.emit();
  }
}
