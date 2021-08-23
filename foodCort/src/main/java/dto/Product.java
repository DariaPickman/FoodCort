package dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder

public class Product {
	
	private int idproduct;
	private String name;
	private double price;
	private String pictureUrl;
	private String category;
	
}
