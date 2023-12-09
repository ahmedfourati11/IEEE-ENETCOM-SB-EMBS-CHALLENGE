package com.example.IEEEEMBS.dao;


import com.example.IEEEEMBS.entity.MedicalMeasure;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalMeasureDao extends JpaRepository<MedicalMeasure,Long> {

    List<MedicalMeasure> findByPatientId(Long patientId);

    List<MedicalMeasure>  findAllByOrderByDateDesc(Pageable pageable);

    List<MedicalMeasure> findByPatientIdOrderByDateDesc(Long patientId);

    List<MedicalMeasure> findByPatientCinOrderByDateDesc(Long patientId);
}
