package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.template.model.CarShop;

public interface CarShopRepo extends JpaRepository <CarShop, Long> {

}
