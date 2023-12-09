package com.example.IEEEEMBS.dao;

import com.example.IEEEEMBS.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientDao extends JpaRepository<Patient,Long> {

     Optional<Patient> findFirstByCin(Long cin);
}
