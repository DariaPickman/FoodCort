import {Component, OnInit} from '@angular/core';
import {MealsService} from "../../Services/meals.service";
import {Meal} from "../../Classes/meal";

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  mealName: string;
  mealPrice: number;
  mealCategory: string;
  mealPicture: "./";


  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
  }

  addMeal() {
    this.mealsService.sendProduct({
      idproduct: 100,
      name: this.mealName,
      price: this.mealPrice,
      pictureUrl: this.mealPicture,
      category: this.mealCategory
    })
  }
}
