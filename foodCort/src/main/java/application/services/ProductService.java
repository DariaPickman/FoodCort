package application.services;

import java.util.List;

import dto.Category;
import dto.Product;


public interface ProductService {
	enum SortBy{
		NAME, PRICE
	}
	
	interface ProductShort {
		int getId();
		String getName();
		double getPrice();
	}
	

	
	boolean addCategory(String category, String categoryName);
	Product addProduct(Product product); 
	List<Product> findAllProducts();
	Product findProductByName(String name);
	List<Product> findByCategory(String category);
	Product findProductById(int id);
	List<Category> findAllCategories();

	
}
