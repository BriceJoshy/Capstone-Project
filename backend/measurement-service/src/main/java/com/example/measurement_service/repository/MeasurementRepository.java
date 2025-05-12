package com.example.measurement_service.repository;

import com.example.measurement_service.entity.MeasurementProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MeasurementRepository extends JpaRepository<MeasurementProfile, Long> {
    List<MeasurementProfile> findByUserName(String userName);
}
