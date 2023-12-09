package com.example.IEEEEMBS.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDateTime;


@Data
public class MedicalMeasureDto {
        private Long id;
        private Long cardiacFrequency;
        private Long oxygenSaturation;
        private Long patientId;
        private Long state;
        private LocalDateTime date;
}
