package application.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter @Setter
@EqualsAndHashCode(of= {"idcategory"})
@ToString(exclude = {"products"})

@Entity
@Table(name="categories")
public class CategoryEntity {
	
	@Id
	@Column(length=45)
	private String idcategory;
	private String categoryName;
	
	
	@OneToMany(mappedBy="category", fetch = FetchType.LAZY, cascade=CascadeType.ALL)
	private Set<ProductEntity> products = new HashSet<>();
	
	public CategoryEntity(String idcategory, String categoryName) {
		this.idcategory = idcategory;
		this.categoryName = categoryName;
	}
}
