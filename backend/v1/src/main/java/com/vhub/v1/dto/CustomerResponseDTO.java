package com.vhub.v1.dto;

import lombok.Data;

@Data
public class CustomerResponseDTO {
    private int id;
    private String password;
    private String email;
}
