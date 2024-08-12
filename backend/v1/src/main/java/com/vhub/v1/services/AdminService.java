package com.vhub.v1.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vhub.v1.model.Admin;
import com.vhub.v1.repository.AdminRepo;

@Service
public class AdminService {

    
    @Autowired
    AdminRepo br;

   
    public List<Admin> getByEmail(String email) {
        return br.findByEmail(email);
    }
    public Admin updateAdmin(String email, Admin admin) {
        if (br.existsByName(email)) {
            return br.save(admin); // Assuming admin object has the updated password
        }
        return null; // Admin not found
    }
      

    public List<Admin> getAll()
    {
        return br.findAll();
    }

}
