package com.example.ProductService.service;

import com.example.ProductService.entity.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> saveProducts(List<Product> products);

    List<Product> getAllProducts();

    Optional<Product> getProductById(Long id);

    Product updateProduct(Long id, Product product);

    void deleteProduct(Long id);



}
