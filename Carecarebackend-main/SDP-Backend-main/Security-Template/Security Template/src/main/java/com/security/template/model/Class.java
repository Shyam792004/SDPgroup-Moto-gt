package com.security.template.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.security.template.service.UserDeserializer;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;
    private String service;
    private String cost;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonDeserialize(using = UserDeserializer.class)
    private User user;

   
}