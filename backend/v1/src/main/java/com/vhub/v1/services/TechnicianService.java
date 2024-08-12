package com.vhub.v1.services;

import com.vhub.v1.repository.*;
import com.vhub.v1.model.*;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TechnicianService {

    
    @Autowired
    TechnicianRepo ur;
   
    public Technician create(Technician k)
    {
        return ur.save(k);
    }
    public List<Technician> getAllTechnician(){
        return ur.findAll();
    }

    public Optional<Technician> getTechnicianById(int id) 
    {
        return ur.findById(id);
    }

    public Technician updateTechnician(int id, Technician u)
    {
        if (ur.existsById(id)) 
        {
            u.setTech_id(id);
            return ur.save(u);
        }
        return null;
    }

    public boolean deleteTechnician(int tech_id) 
    {
        if (ur.existsBytech_Id(tech_id))
        {
            ur.deleteBytech_Id(tech_id);
            return true;
        }
        return false;
    }
}
