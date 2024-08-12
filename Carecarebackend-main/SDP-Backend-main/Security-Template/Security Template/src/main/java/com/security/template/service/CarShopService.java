
package com.security.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.CarShop;
import com.security.template.repo.CarShopRepo;

import java.util.List;
import java.util.Optional;

@Service

public class CarShopService {
    @Autowired
    private CarShopRepo srepo;

    public List<CarShop> getCarShops() {
        return srepo.findAll();
    }

    public CarShop addShops(CarShop sub) {
        return srepo.save(sub);
    }

    public String deleteShop(Long sid) {
        srepo.deleteById(sid);
        return "Subject deleted successfully";
    }

    public Optional<CarShop> getShopBySid(Long sid) {
        return srepo.findById(sid);
    }

    public CarShop updateShop(Long sid, CarShop shopDetails) {
        CarShop sub = srepo.findById(sid).orElse(null);
        if (sub != null) {
            sub.setShopname(shopDetails.getShopname());
            sub.setAddress(shopDetails.getAddress());
            sub.setUser(shopDetails.getUser());
            srepo.save(sub);
        }
        return sub;
    }
}
