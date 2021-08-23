package application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import application.entities.CategoryEntity;

public interface CategoryJpaRepository extends JpaRepository<CategoryEntity, String>{

}
