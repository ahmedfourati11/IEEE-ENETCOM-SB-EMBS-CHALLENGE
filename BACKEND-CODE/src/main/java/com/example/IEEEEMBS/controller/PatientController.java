package com.example.IEEEEMBS.controller;

import com.example.IEEEEMBS.dao.MedicalMeasureDao;
import com.example.IEEEEMBS.dao.PatientDao;
import com.example.IEEEEMBS.dto.MedicalMeasureDto;
import com.example.IEEEEMBS.dto.SignInDto;
import com.example.IEEEEMBS.entity.Doctor;
import com.example.IEEEEMBS.entity.MedicalMeasure;
import com.example.IEEEEMBS.entity.Patient;
import com.example.IEEEEMBS.execption.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/patient/")
public class PatientController {
    @Autowired
    PatientDao patientDao;
    @Autowired
    MedicalMeasureDao medicalMeasureDao;

    @PostMapping
    public Patient signInByCode(@RequestBody SignInDto patient){
        Optional<Patient> auth = patientDao.findFirstByCin(patient.getCode());
        if(auth.isPresent()){
            return auth.get();
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
    }

    @PostMapping("sign-up")
    public Patient signOn(@RequestBody Patient dto){
        return patientDao.save(dto);
    }



    @PostMapping("measure")
    public MedicalMeasure sendMeasureInfo(@RequestBody MedicalMeasureDto dto){
        dto.setDate(LocalDateTime.now());
        Patient patient =patientDao.findById(dto.getPatientId()).get();
        MedicalMeasure result =new MedicalMeasure(
                null,
                dto.getCardiacFrequency(),
                dto.getOxygenSaturation(),
                patient,
                dto.getState(),
                dto.getDate());
        return  medicalMeasureDao.save(result);

    }

    @GetMapping("history/{patientId}")
    public List<MedicalMeasure> getUserHistory(@PathVariable Long patientId){
        return medicalMeasureDao.findByPatientIdOrderByDateDesc(patientId);
    }



    @GetMapping("remove/measure/{id}")
    public void sendMeasureInfo(@PathVariable Long id){
        medicalMeasureDao.deleteById(id);
     }



    @GetMapping("history/code/{patientId}")
    public List<MedicalMeasure> getUserHistoryByCin(@PathVariable Long patientId){
        return medicalMeasureDao.findByPatientCinOrderByDateDesc(patientId);
    }


    @GetMapping("profile/{patientId}")
    public Patient getUserInfo(@PathVariable Long patientId){
        return patientDao.findById(patientId).get();
    }



    @GetMapping("all/{pageNumber}/size/{pageSize}")
    public List<MedicalMeasure> getAllHistory(
            @PathVariable int pageNumber,
            @PathVariable int pageSize
    ){
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return medicalMeasureDao.findAllByOrderByDateDesc(pageable);
    }
}
