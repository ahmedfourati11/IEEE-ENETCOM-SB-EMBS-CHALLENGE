package com.example.IEEEEMBS.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity()
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String email;
    private String password;
    private Long phoneNumber;
}
