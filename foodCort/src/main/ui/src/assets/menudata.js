import {Product} from "./product.js";

export let menuData = {
    salads: [
        new Product(13, "Cesar", 12.30, "Salads/cesar.jpg"),
        new Product(14, "Olivier", 16.80, "Salads/olivier.jpg"),
        new Product(15, "Green salad", 8.50, "Salads/green.jpg"),
        new Product(16, "Herring under coat", 14.25, "Salads/herring.jpg")
    ],

    soups: [
        new Product(1, "Solianka", 32.50, "Soups/solianka.jpg"),
        new Product(2, "Borzhch", 28.30, "Soups/borzhch.jpg"),
        new Product(3, "Shchee", 22.00, "Soups/shchee.jpg"),
        new Product(4, "Rassolnik", 25.70, "Soups/rassolnik.jpg")
    ],

    meals: [
        new Product(5, "Shashlyk", 48.50, "Meals/shashlyk.jpg"),
        new Product(6, "Pelmeni", 39.00, "Meals/pelmeni.jpg"),
        new Product(7, "Buckwheat kasha", 21.30, "Meals/kasha.jpg"),
        new Product(8, "Pasta fleet style", 30.00, "Meals/pasta.jpg")
    ],

    desserts: [
        new Product(9, "Ice cream", 15.00, "Desserts/icecream.jpg"),
        new Product(10, "Fruit salad", 18.50, "Desserts/salad.jpg"),
        new Product(11, "Coffee", 9.50, "Desserts/coffee.jpg"),
        new Product(12, "Sigar", 50.00, "Desserts/sigar.jpg"),
    ]
};

export let origCategoriesNames = {
    salads: "Salads and starters",
    soups:  "Soups",
    meals: "Hot meals",
    desserts: "Desserts"
};

