package application.services;


import application.entities.CategoryEntity;
import application.entities.ProductEntity;
import dto.Category;
import dto.Product;

public class MapperUtils {
	
	public static Product product2dto(ProductEntity p) {
		return new Product(p.getIdproduct(), p.getName(), p.getPrice(), p.getPicture(), 
				p.getCategory().getCategoryName());
	}
	public static Category category2dto(CategoryEntity cat) {
		return new Category(cat.getIdcategory(), cat.getCategoryName());
	}

}
