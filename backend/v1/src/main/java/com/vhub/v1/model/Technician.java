package com.vhub.v1.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Technician {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int tech_id;

    String name,address,phone,gender,expert,email,password;
    public Technician(int tech_id, String name, String address, String phone, String gender, String expert,
            String email, String password, int age, int experience, Date joindate) {
        this.tech_id = tech_id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.gender = gender;
        this.expert = expert;
        this.email = email;
        this.password = password;
        this.age = age;
        this.experience = experience;
        this.joindate = joindate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getJoindate() {
        return joindate;
    }

    public void setJoindate(Date joindate) {
        this.joindate = joindate;
    }

    int age,experience;
    Date joindate;

    public Technician(int tech_id, String name, String address, String phone, String gender, String expert, int age,
            int experience, Date joindate) {
        this.tech_id = tech_id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.gender = gender;
        this.expert = expert;
        this.age = age;
        this.experience = experience;
        this.joindate = joindate;
    }

    public int getTech_id() {
        return tech_id;
    }

    public void setTech_id(int tech_id) {
        this.tech_id = tech_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getExpert() {
        return expert;
    }

    public void setExpert(String expert) {
        this.expert = expert;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    

    Technician()
    {}



}
