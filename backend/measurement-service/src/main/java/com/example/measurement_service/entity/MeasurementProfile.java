package com.example.measurement_service.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MeasurementProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String profileName;
    private String userName; // Taken from the user service

    private Type type; // e.g., SHIRT, PANT


    private double chest;
    private double waist;
    private double hip;
    private double inseam;
}
