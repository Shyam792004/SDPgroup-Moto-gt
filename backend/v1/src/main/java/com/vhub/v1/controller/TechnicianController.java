package com.vhub.v1.controller;

import com.vhub.v1.model.*;
import com.vhub.v1.services.*;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Technicians")
public class TechnicianController
{

    @Autowired
    private TechnicianService ts;

    
    @PostMapping
    public ResponseEntity<Technician> createTechnician(@RequestBody Technician k) 
    {
        return new ResponseEntity<>(ts.create(k), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTechnicianById(@PathVariable("id") int i)
    {
        Optional<Technician> TechnicianOptional = ts.getTechnicianById(i);
        if(TechnicianOptional.isPresent()) 
        {
            Technician u = TechnicianOptional.get();
            return new ResponseEntity<>(u, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<String>("No technician found with given id",HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllTechnician()
    {
     return new ResponseEntity<>(ts.getAllTechnician(),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Technician> updateTechnician(@PathVariable("id") int id, @RequestBody Technician u) {
        Technician updatedTechnician = ts.updateTechnician(id, u);
        if (updatedTechnician == null) 
        {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(updatedTechnician, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTechnician(@PathVariable("id") int id) 
    {
        boolean deleted = ts.deleteTechnician(id);
        if (!deleted) 
        {
            return new ResponseEntity<>("Technician not found with ID: " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Technician deleted successfully", HttpStatus.OK);
    }
}
