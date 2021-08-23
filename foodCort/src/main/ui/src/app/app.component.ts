import {Component, OnInit, SimpleChanges} from '@angular/core';
import {MealsService} from "./Services/meals.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  localImgStore = "http://localhost:4200/assets/";
  billValue = 0;
  mealsList = [];
  menuList = [];
  menuCategory = "salads";
  login: false;
  isLogging = false;
  category: string;


  constructor(private mealsService: MealsService) {
  }

  ngOnInit() {
    this.mealsService.getMenu().subscribe((res:any) => this.menuList = res)
    this.mealsService.getMeals(this.menuCategory).subscribe((res:any) => this.mealsList = res)
  }


  chooseMenuItem(item) {
    this.menuCategory = item.idCategory;
    this.mealsService.getMeals(this.menuCategory).subscribe((res:any) => this.mealsList = res)
    console.log(this.menuCategory)
  }

  logIn() {
    this.isLogging = true;
  }
  closeLogin() {
    this.isLogging = false;
  }
}
