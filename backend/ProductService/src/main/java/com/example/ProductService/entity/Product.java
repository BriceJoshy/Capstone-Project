package com.example.ProductService.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    private String productName;

    @Enumerated(EnumType.STRING)
    private Size productSize;

    private double productPrice;

    private String productCategory;

    @Column(length = 1000)
    private String productDescription;

    @Column(length = 1000)
    private String productDetails;

    @Column(length = 1000)
    private String productCare;

    @ElementCollection
    @CollectionTable(name = "product_images", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "image_url")
    private List<String> productImageUrl;

    private int productQuantity;

    // Constructors
    public Product() {
    }

    public Product(String productName, Size productSize, double productPrice,
                   String productCategory, String productDescription, String productDetails,
                   String productCare, List<String> productImageUrl, int productQuantity) {
        this.productName = productName;
        this.productSize = productSize;
        this.productPrice = productPrice;
        this.productCategory = productCategory;
        this.productDescription = productDescription;
        this.productDetails = productDetails;
        this.productCare = productCare;
        this.productImageUrl = productImageUrl;
        this.productQuantity = productQuantity;
    }

    // Getters and Setters

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Size getProductSize() {
        return productSize;
    }

    public void setProductSize(Size productSize) {
        this.productSize = productSize;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductDetails() {
        return productDetails;
    }

    public void setProductDetails(String productDetails) {
        this.productDetails = productDetails;
    }

    public String getProductCare() {
        return productCare;
    }

    public void setProductCare(String productCare) {
        this.productCare = productCare;
    }

    public List<String> getProductImageUrl() {
        return productImageUrl;
    }

    public void setProductImageUrl(List<String> productImageUrl) {
        this.productImageUrl = productImageUrl;
    }

    public int getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(int productQuantity) {
        this.productQuantity = productQuantity;
    }
}

