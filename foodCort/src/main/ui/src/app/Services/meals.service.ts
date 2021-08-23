import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MealsService {



  constructor(private Http: HttpClient) { }

  sendProduct(product){
    console.log(product)
    this.Http.post("http://localhost:8080/product/add", product, {responseType:'text'})
      .subscribe((res) => console.log(res));
  }
  sendCategory(category){
    console.log(category)
    this.Http.post("http://localhost:8080/product/add_category?category=" + category.idcategory +
      "&categoryName=" + category.category_name, {responseType:'text'})
      .subscribe((res) => console.log(res));
  }

  getMeals(menuCategory) {
    return this.Http.get("http://localhost:8080/product/get_by_category?category=" + menuCategory);
  }

  getMenu() {
    return this.Http.get("http://localhost:8080/product/get_all_categories");
  }

}


