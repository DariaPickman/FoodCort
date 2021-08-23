import { Component, OnInit } from '@angular/core';
import {MealsService} from "../../Services/meals.service";
import {Category} from "../../Classes/category";

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css']
})
export class AddMenuItemComponent implements OnInit {

  idcategory: string;
  categoryName: string;



  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
  }

  addMenuItem() {
    this.mealsService.sendCategory(new Category(this.idcategory, this.categoryName))
  }

}
