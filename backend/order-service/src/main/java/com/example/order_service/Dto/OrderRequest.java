package com.example.order_service.Dto;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.Generated;

public class OrderRequest {
    private @NotBlank(
            message = "Username is required"
    ) String userName;
    private @NotNull(
            message = "Product ID is required"
    ) Long productId;
    private @NotNull(
            message = "Measurement profile ID is required"
    ) Long measurementProfileId;
    private @NotBlank(
            message = "Order status is required"
    ) String status;
    private @FutureOrPresent(
            message = "Order date cannot be in the past"
    ) LocalDateTime orderDate;
    private @FutureOrPresent(
            message = "Expected delivery date must be in the future or present"
    ) LocalDateTime expectedDeliveryDate;
    private String notes;
}