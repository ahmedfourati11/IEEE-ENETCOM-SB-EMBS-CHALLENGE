package com.example.IEEEEMBS.dao;


import com.example.IEEEEMBS.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DoctorDao extends JpaRepository<Doctor,Long> {
     Optional<Doctor> findFirstByEmail(String email);
}
