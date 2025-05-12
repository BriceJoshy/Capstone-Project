package com.example.product_service.service;

import com.example.product_service.entity.Product;
import java.util.List;
import java.util.Optional;

import com.example.product_service.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImple implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> saveProducts(List<Product> products) {
        return this.productRepository.saveAll(products);
    }

    public List<Product> getAllProducts() {
        return this.productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return this.productRepository.findById(id);
    }

    public Product updateProduct(Long id, Product product) {
        Optional<Product> existing = this.productRepository.findById(id);
        if (existing.isPresent()) {
            product.setProductId(id);
            return (Product)this.productRepository.save(product);
        } else {
            throw new RuntimeException("Product not found with id " + id);
        }
    }

    public void deleteProduct(Long id) {
        this.productRepository.deleteById(id);
    }
}