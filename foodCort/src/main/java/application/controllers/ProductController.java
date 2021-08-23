package application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import application.services.ProductService;
import application.services.ProductService.SortBy;
import dto.Category;
import dto.Product;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")//http://localhost:4200
public class ProductController {
	
	@Autowired ProductService service;
	
	@PostMapping("/add_category")
	public boolean addCategory(String category, String categoryName) {
		return service.addCategory(category, categoryName);
	}
	
	@PostMapping("/add")
	public Product addProduct(@RequestBody Product product) {
		return service.addProduct(product);
	}
	
	@GetMapping("/get_all")
	public List<Product> getAllProducts(){
		return service.findAllProducts();
	}
	@GetMapping("/get_all_categories")
	public List<Category> getAllCategories(){
		return service.findAllCategories();
	}

	@GetMapping("/get_by_name")
	public Product getProductByName(String name){
		Product p =  service.findProductByName(name);
		if (p == null)
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Product not found by name " + name);
		return p;
	}
	@GetMapping("/get_by_id")
	public Product getProductById(int id){
		Product p =  service.findProductById(id);
		if (p == null)
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Product not found by id " + id);
		return p;
	}

	@GetMapping("/get_by_category")
	List<Product> findByCategory(String category){
		return service.findByCategory(category);
	}
	
}
