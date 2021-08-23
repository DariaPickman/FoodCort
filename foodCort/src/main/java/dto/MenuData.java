package dto;

public class MenuData {

	public static final Category[] categories = {			
			new Category("salads", "Salads and starters"),
			new Category("meals", "Hot meals"),
			new Category("soups",  "Soups"),
		    new Category("desserts", "Desserts")
	};

	public static Product[] products = {
	        new Product(13, "Cesar", 12.30, "img/Salads/cesar.jpg", "salads"),
	        new Product(14, "Olivier", 16.80, "img/Salads/olivier.jpg", "salads"),
	        new Product(15, "Green salad", 8.50, "img/Salads/green.jpg", "salads"),
	        new Product(16, "Herring under coat", 14.25, "img/Salads/herring.jpg", "salads"),

	        new Product(1, "Solianka", 32.50, "img/Soups/solianka.jpg", "soups"),
	        new Product(2, "Borzhch", 28.30, "img/Soups/borzhch.jpg", "soups"),
	        new Product(3, "Shchee", 22.00, "img/Soups/shchee.jpg", "soups"),
	        new Product(4, "Rassolnik", 25.70, "img/Soups/rassolnik.jpg", "soups"),

	        new Product(5, "Shashlyk", 48.50, "img/Meals/shashlyk.jpg", "meals"),
	        new Product(6, "Pelmeni", 39.00, "img/Meals/pelmeni.jpg", "meals"),
	        new Product(7, "Buckwheat kasha", 21.30, "img/Meals/kasha.jpg", "meals"),
	        new Product(8, "Pasta fleet style", 30.00, "img/Meals/pasta.jpg", "meals"),

	        new Product(9, "Ice cream", 15.00, "img/Desserts/icecream.jpg", "desserts"),
	        new Product(10, "Fruit salad", 18.50, "img/Desserts/salad.jpg", "desserts"),
	        new Product(11, "Coffee", 9.50, "img/Desserts/coffee.jpg", "desserts"),
	        new Product(12, "Sigar", 50.00, "img/Desserts/sigar.jpg", "desserts")
	};
	
}
