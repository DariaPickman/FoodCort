package application;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import application.services.ProductService;
import dto.Product;

import static dto.MenuData.*;

@SpringBootApplication
public class FoodCortApp {
	
	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(FoodCortApp.class, args);
		//fill DB with initial data		
		//initModel(ctx.getBean(ProductService.class));
	}
	
	private static void initModel(ProductService ps) {
		
		for(int i = 0; i<categories.length; i++) {
			System.out.println((categories[i].getIdCategory() + "  " + categories[i].getCategoryName()));
			ps.addCategory(categories[i].getIdCategory(), categories[i].getCategoryName());
		}
		
		
		  for(int i = 0; i<products.length; i++) {
		  
		  ps.addProduct(Product.builder() .name(products[i].getName())
		  .price(products[i].getPrice()) .pictureUrl(products[i].getPictureUrl())
		  .category(products[i].getCategory()) .build()); }

	}
}
