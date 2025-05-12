package com.example.measurement_service.service;

import com.example.measurement_service.dto.MeasurementRequest;
import com.example.measurement_service.entity.MeasurementProfile;
import com.example.measurement_service.repository.MeasurementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MeasurementService {

    private final MeasurementRepository repo;

    public MeasurementProfile createMeasurement(MeasurementRequest request) {
        MeasurementProfile profile = MeasurementProfile.builder()
                .profileName(request.getProfileName())
                .userName(request.getUserName())
                .type(request.getType())
                .chest(request.getChest())
                .waist(request.getWaist())
                .hip(request.getHip())
                .inseam(request.getInseam())
                .build();
        return repo.save(profile);
    }

    public List<MeasurementProfile> getUserMeasurements(String userName) {
        return repo.findByUserName(userName);
    }
}
