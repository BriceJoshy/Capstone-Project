package com.example.product_service.entity;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(
        name = "products"
)
public class Product {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long productId;
    private String productName;
    @Enumerated(EnumType.STRING)
    private Size productSize;
    private double productPrice;
    private String productCategory;
    @Column(
            length = 1000
    )
    private String productDescription;
    @Column(
            length = 1000
    )
    private String productDetails;
    @Column(
            length = 1000
    )
    private String productCare;
    @ElementCollection
    @CollectionTable(
            name = "product_images",
            joinColumns = {@JoinColumn(
                    name = "product_id"
            )}
    )
    @Column(
            name = "image_url"
    )
    private List<String> productImageUrl;
    private int productQuantity;
    @Column(
            name = "tailoring_completion_time"
    )
    private LocalDateTime tailoringCompletionTime;

    public Product() {
    }

    public Product(String productName, Size productSize, double productPrice, String productCategory, String productDescription, String productDetails, String productCare, List<String> productImageUrl, int productQuantity, LocalDateTime tailoringCompletionTime) {
        this.productName = productName;
        this.productSize = productSize;
        this.productPrice = productPrice;
        this.productCategory = productCategory;
        this.productDescription = productDescription;
        this.productDetails = productDetails;
        this.productCare = productCare;
        this.productImageUrl = productImageUrl;
        this.productQuantity = productQuantity;
        this.tailoringCompletionTime = tailoringCompletionTime;
    }

    public Long getProductId() {
        return this.productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return this.productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Size getProductSize() {
        return this.productSize;
    }

    public void setProductSize(Size productSize) {
        this.productSize = productSize;
    }

    public double getProductPrice() {
        return this.productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductCategory() {
        return this.productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public String getProductDescription() {
        return this.productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductDetails() {
        return this.productDetails;
    }

    public void setProductDetails(String productDetails) {
        this.productDetails = productDetails;
    }

    public String getProductCare() {
        return this.productCare;
    }

    public void setProductCare(String productCare) {
        this.productCare = productCare;
    }

    public List<String> getProductImageUrl() {
        return this.productImageUrl;
    }

    public void setProductImageUrl(List<String> productImageUrl) {
        this.productImageUrl = productImageUrl;
    }

    public int getProductQuantity() {
        return this.productQuantity;
    }

    public void setProductQuantity(int productQuantity) {
        this.productQuantity = productQuantity;
    }

    public LocalDateTime getTailoringCompletionTime() {
        return this.tailoringCompletionTime;
    }

    public void setTailoringCompletionTime(LocalDateTime tailoringCompletionTime) {
        this.tailoringCompletionTime = tailoringCompletionTime;
    }
}