package com.example.measurement_service.controller;

import com.example.measurement_service.dto.MeasurementRequest;
import com.example.measurement_service.entity.MeasurementProfile;
import com.example.measurement_service.service.MeasurementService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/measurements")
@RequiredArgsConstructor
public class MeasurementController {

    private final MeasurementService service;

    @PostMapping
    public MeasurementProfile create(@RequestBody MeasurementRequest request) {
        return service.createMeasurement(request);
    }

    @GetMapping("/{userId}")
    public List<MeasurementProfile> getByUser(@PathVariable String userId) {
        return service.getUserMeasurements(userId);
    }
}
