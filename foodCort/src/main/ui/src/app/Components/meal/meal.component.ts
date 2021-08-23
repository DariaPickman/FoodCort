import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() mealName: string;
  @Input() mealPrice: number;
  @Input() mealUrl: string;
  mealValue: number;




  constructor() { }

  ngOnInit(): void {
    this.mealValue = 0;
  }
  handlePlus() {
    this.mealValue++;
  }
  handleMinus(){
    if (this.mealValue) this.mealValue--;
  }

}
