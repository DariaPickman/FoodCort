export class Meal {
  idproduct : number;
  name : string;
  picture : string;
  price : number;
  category_idcategory: string

  constructor(name, price, imgUrl, category){
    this.idproduct = 100;
    this.name = name;
    this.picture = imgUrl;
    this.price = price;
    this.category_idcategory = category;
  }

}
