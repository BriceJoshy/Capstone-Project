package com.example.order_service.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName; // From JWT
    private Long productId; // From Product Service
    private Long measurementProfileId; // From Measurement Service

    private String status; // Enum preferred: RECEIVED, STITCHING, COMPLETED, DELIVERED

    private LocalDateTime orderDate;
    private LocalDateTime expectedDeliveryDate;

    private String notes; // Optional style instructions
}
