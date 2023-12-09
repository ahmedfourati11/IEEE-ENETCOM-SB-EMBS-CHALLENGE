package com.example.IEEEEMBS.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class MedicalMeasure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long cardiacFrequency;
    private Long oxygenSaturation;
    @ManyToOne(fetch = FetchType.EAGER)
    private Patient patient;
    private Long state;
    private LocalDateTime date;
}
