package com.example.IEEEEMBS.controller;


import com.example.IEEEEMBS.dao.DoctorDao;
import com.example.IEEEEMBS.dao.PatientDao;
import com.example.IEEEEMBS.dto.SignInDto;
import com.example.IEEEEMBS.entity.Doctor;
import com.example.IEEEEMBS.entity.Patient;
import com.example.IEEEEMBS.execption.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/doctor/")
public class DoctorController {

    @Autowired
    DoctorDao doctorDao;

    @Autowired
    PatientDao patientDao;

    @PostMapping("sign-in")
    public Doctor signInByEmail( @RequestBody SignInDto doctor){
        Optional<Doctor> auth = doctorDao.findFirstByEmail(doctor.getEmail());
        if(auth.isPresent()){
            Doctor user =auth.get();
            if(user.getPassword().equals(doctor.getPassword())){
                return  user;
            }
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }

    }

    @PostMapping("add/patient")
    public Patient addpatient(@RequestBody Patient patient){
        return patientDao.save(patient);
    }
}
