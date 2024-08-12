package com.vhub.v1.services;

import com.vhub.v1.repository.*;
import com.vhub.v1.dto.CustomerRequestDTO;
import com.vhub.v1.dto.CustomerResponseDTO;
import com.vhub.v1.model.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    
    @Autowired
    CustomerRepo ur;
    public CustomerResponseDTO createUser(CustomerRequestDTO userRequestDTO) {
        Customer user = new Customer();
        user.setName(userRequestDTO.getName());
        user.setEmail(userRequestDTO.getEmail());
        user = ur.save(user);

        CustomerResponseDTO userResponseDTO = new CustomerResponseDTO();
        userResponseDTO.setId(user.getId());
        userResponseDTO.setPassword(user.getPassword());
        userResponseDTO.setEmail(user.getEmail());
        return userResponseDTO;
    }
    public List<CustomerResponseDTO> getAll()
    {
        List<Customer> customers = ur.findAll();
        return customers.stream().map(this::convertToDTO).collect(Collectors.toList());
    }
    private CustomerResponseDTO convertToDTO(Customer customer) {
        CustomerResponseDTO dto = new CustomerResponseDTO();
        dto.setId(customer.getId());
        dto.setPassword(customer.getPassword());
        dto.setEmail(customer.getEmail());
        return dto;
    }
    public Customer create(Customer k)
    {
        return ur.save(k);
    }
    public List<Customer> getAllCustomer(){
        return ur.findAll();
    }

    public Optional<Customer> getCustomerById(int id) 
    {
        return ur.findById(id);
    }

    public Customer updateCustomer(int id, Customer u)
    {
        if (ur.existsById(id)) 
        {
            u.setId(id);
            return ur.save(u);
        }
        return null;
    }

    public boolean deleteCustomer(int id) 
    {
        if (ur.existsById(id))
        {
            ur.deleteById(id);
            return true;
        }
        return false;
    }
}
