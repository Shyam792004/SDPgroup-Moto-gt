package com.vhub.v1.controller;

import com.vhub.v1.model.Admin;
import com.vhub.v1.services.AdminService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/Admin")
public class AdminController
{

    @Autowired
    private AdminService as;


    @GetMapping("/getAll")
    public ResponseEntity<List<Admin>> getAllAdmin() {
       return new ResponseEntity<>(as.getAll(),HttpStatus.OK);
    }
//     @PutMapping("/{email}")
//     public ResponseEntity<Admin> updateAdmin(@PathVariable String email, @RequestBody Admin u) {
//     List<Admin> l = as.getByEmail(email);
//     for(Admin existingAdmin  : l){
//     if (existingAdmin != null && existingAdmin.getPassword().equals(u.getPassword())) {
//         existingAdmin.setPassword(u.getNewPassword());
//         Admin updatedAdmin = as.updateAdmin(email, existingAdmin);
//         return new ResponseEntity<>(updatedAdmin, HttpStatus.OK);
//     }}
//     return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
// }
@PutMapping("/{email}")
public ResponseEntity<Admin> updateAdmin(@PathVariable String email, @RequestBody Admin u) {
    List<Admin> admins = as.getByEmail(email);
    if (admins.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); // No admin found with given email
    }
    Admin existingAdmin = admins.get(0); // Assuming email is unique
    if (existingAdmin.getPassword().equals(u.getPassword())) {
        existingAdmin.setPassword(u.getNewPassword());
        Admin updatedAdmin = as.updateAdmin(email, existingAdmin);
        return new ResponseEntity<>(updatedAdmin, HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // Old password is incorrect
}



    
}
