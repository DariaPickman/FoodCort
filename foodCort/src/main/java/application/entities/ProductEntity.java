package application.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter @Setter
@EqualsAndHashCode(of= {"idproduct"})
@ToString

@Entity
@Table(name="products",
       uniqueConstraints=@UniqueConstraint(columnNames={"name"}))

public class ProductEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idproduct;
	private String name;
	private double price;
	private String picture;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private CategoryEntity category;
	
	public ProductEntity(String name, double price, String imageUrl, CategoryEntity category) {
		this.name = name;
		this.price = price;	
		this.picture = imageUrl;
		this.category = category;
	}
	
}
