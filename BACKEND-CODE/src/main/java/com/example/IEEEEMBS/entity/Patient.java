package com.example.IEEEEMBS.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.util.List;

@Data
@Entity
public class Patient {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Long cin;
    private Long phoneNumber;
    private String gender;
    private LocalDateTime date;
    private Long age;
    @JsonIgnore
    @OneToMany(mappedBy = "patient",cascade = CascadeType.ALL)
    private List<MedicalMeasure> medicalMeasures;

    @Transient
    public Long getAge() {
        if (date == null) {
            return null; // or throw an exception, depending on your requirements
        }
        LocalDate birthdate = date.toLocalDate();
        LocalDate currentDate = LocalDate.now();
        return (long) Period.between(birthdate, currentDate).getYears();
    }


}
