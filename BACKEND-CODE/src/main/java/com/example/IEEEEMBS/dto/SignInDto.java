package com.example.IEEEEMBS.dto;

import lombok.Data;

@Data
public class SignInDto {

    private String email;
    private String password;
    private Long code;
}
