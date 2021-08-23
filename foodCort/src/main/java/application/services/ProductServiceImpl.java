package application.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import application.entities.CategoryEntity;
import application.entities.ProductEntity;
import application.repositories.CategoryJpaRepository;
import application.repositories.ProductJpaRepository;
import dto.Category;
import dto.Product;

@Service
@Transactional

public class ProductServiceImpl implements ProductService{
	
	@Autowired ProductJpaRepository productRepo;
	@Autowired CategoryJpaRepository categoryRepo;

	@Override
	public boolean addCategory(String category, String categoryName) {
		if (categoryRepo.existsById(category)) { return false;}
		categoryRepo.save(new CategoryEntity(category, categoryName));
		return true;
	}
	
	private CategoryEntity ensureCategory(String category) {
		CategoryEntity categoryFound = categoryRepo.findById(category).orElse(null);
		return categoryFound == null ? categoryRepo.save(new CategoryEntity(category, "")) : categoryFound;
	}

	@Override
	public Product addProduct(Product product) {
		CategoryEntity categoryEntity = ensureCategory(product.getCategory());
		ProductEntity productEntity = productRepo.save(new ProductEntity(product.getName(), product.getPrice(), product.getPictureUrl(), categoryEntity));
		return MapperUtils.product2dto(productEntity);
	}
	
	@Override
	public List<Category> findAllCategories() {
		return categoryRepo.findAll().stream().map(MapperUtils::category2dto).collect(Collectors.toList());
	}
	@Override
	public List<Product> findAllProducts() {
		return productRepo.findAll().stream().map(MapperUtils::product2dto).collect(Collectors.toList());
	}

	@Override
	public Product findProductByName(String name) {
		List<ProductEntity> list = productRepo.findByName(name);
		return (list.isEmpty()) ? null : MapperUtils.product2dto(list.get(0));
	}



	@Override
	public Product findProductById(int id) {
		List<ProductEntity> list = productRepo.findById(id);
		System.out.println(list.get(0).getPicture());
		return (list.isEmpty()) ? null : MapperUtils.product2dto(list.get(0));
	}

	@Override
	public List<Product> findByCategory(String category) {
		List<ProductEntity> list = productRepo.findByCategoryIdcategory(category);
		return list.stream().map(MapperUtils::product2dto).collect(Collectors.toList());
	}


}
