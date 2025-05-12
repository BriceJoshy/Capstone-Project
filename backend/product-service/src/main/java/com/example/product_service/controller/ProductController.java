package com.example.product_service.controller;

import com.example.product_service.entity.Product;
import com.example.product_service.service.ProductService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/products"})
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping
    public List<Product> createProducts(@RequestBody List<Product> products) {
        return this.productService.saveProducts(products);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return this.productService.getAllProducts();
    }

    @GetMapping({"/{id}"})
    public Optional<Product> getProductById(@PathVariable Long id) {
        return this.productService.getProductById(id);
    }

    @PutMapping({"/{id}"})
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return this.productService.updateProduct(id, product);
    }

    @DeleteMapping({"/{id}"})
    public void deleteProduct(@PathVariable Long id) {
        this.productService.deleteProduct(id);
    }
}