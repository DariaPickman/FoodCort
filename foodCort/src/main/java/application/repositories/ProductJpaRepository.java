package application.repositories;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import application.entities.ProductEntity;
import application.services.ProductService;

public interface ProductJpaRepository extends JpaRepository<ProductEntity, Integer>{
	
	List<ProductEntity> findByName(String name);
	List<ProductEntity> findById(int id);
	
	List<ProductEntity> findByCategoryIdcategory(String category);
	
	
	
	
}
