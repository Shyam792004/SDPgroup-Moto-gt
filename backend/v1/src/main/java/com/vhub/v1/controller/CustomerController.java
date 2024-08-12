package com.vhub.v1.controller;

import com.vhub.v1.dto.CustomerRequestDTO;
import com.vhub.v1.dto.CustomerResponseDTO;
import com.vhub.v1.model.*;
import com.vhub.v1.services.*;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/Customers")
public class CustomerController
{

    @Autowired
    private CustomerService us;

    @PostMapping
    public ResponseEntity<CustomerResponseDTO> createUser(@RequestBody CustomerRequestDTO userRequestDTO) {
        CustomerResponseDTO userResponseDTO = us.createUser(userRequestDTO);
        return ResponseEntity.ok(userResponseDTO);
    }

    // @PostMapping("/new")
    // public ResponseEntity<Customer> createCustomer(@RequestBody Customer k) 
    // {
    //     return new ResponseEntity<>(us.create(k), HttpStatus.CREATED);
    // }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCustomerById(@PathVariable("id") int i)
    {
        Optional<Customer> CustomerOptional = us.getCustomerById(i);
        if(CustomerOptional.isPresent()) 
        {
            Customer u = CustomerOptional.get();
            return new ResponseEntity<>(u, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<String>("Customer Not found",HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/dto")
    public ResponseEntity<?> getAll() {
       List<CustomerResponseDTO> customers = us.getAll();
        return ResponseEntity.ok(customers);
    }
    

    @GetMapping
    public ResponseEntity<?> getAllCustomer()
    {
     return new ResponseEntity<>(us.getAllCustomer(),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable("id") int id, @RequestBody Customer u) {
        Customer updatedCustomer = us.updateCustomer(id, u);
        if (updatedCustomer == null) 
        {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    // @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteCustomer(@PathVariable("id") int id) 
    {
        boolean deleted = us.deleteCustomer(id);
        if (!deleted) 
        {
            return new ResponseEntity<>("Customer not found with ID: " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Customer deleted successfully", HttpStatus.OK);
    }
}
