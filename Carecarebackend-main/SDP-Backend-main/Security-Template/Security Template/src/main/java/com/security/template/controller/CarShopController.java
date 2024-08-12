package com.security.template.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.security.template.model.CarShop;
import com.security.template.service.CarShopService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/carshop")
public class CarShopController{
    @Autowired
    private CarShopService sservice;

    @GetMapping("/allshops")
    public List<CarShop> getCarShops() {
        return sservice.getCarShops();
    }

    @PostMapping("/add")
    public CarShop addShops(@RequestBody CarShop shop) {
        return sservice.addShops(shop);
    }

    @DeleteMapping("/delete/{sid}")
    public String deleteShop(@PathVariable Long sid) {
        return sservice.deleteShop(sid);
    }

    @GetMapping("/find/{sid}")
    public Optional<CarShop> getShopBySid(@PathVariable Long sid) {
        return sservice.getShopBySid(sid);
    }

    @PutMapping("/update/{sid}")
    public CarShop updateSub(@PathVariable Long sid, @RequestBody CarShop shopDetails) {
        return sservice.updateShop(sid, shopDetails);
    }
}
