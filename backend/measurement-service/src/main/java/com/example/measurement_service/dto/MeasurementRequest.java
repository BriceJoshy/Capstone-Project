package com.example.measurement_service.dto;

import com.example.measurement_service.entity.Type;
import jakarta.validation.constraints.*;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MeasurementRequest {

    @NotBlank(message = "Profile name is required")
    private String profileName;

    @NotBlank(message = "User Name is required")
    private String userName;

    @NotBlank(message = "Type is required")
    private Type type;

    @PositiveOrZero(message = "Chest must be zero or positive")
    private double chest;

    @PositiveOrZero(message = "Waist must be zero or positive")
    private double waist;

    @PositiveOrZero(message = "Hip must be zero or positive")
    private double hip;

    @PositiveOrZero(message = "Inseam must be zero or positive")
    private double inseam;
}
