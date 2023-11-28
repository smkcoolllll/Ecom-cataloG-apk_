package com.EcomcataLog_.EcomcataLog_.DTO;

import lombok.Data;

@Data
public class ProductDTO {
    private Long id;
    private String name;
    private double price;
    private Long categoryId; 
    private String productDesc;
}
