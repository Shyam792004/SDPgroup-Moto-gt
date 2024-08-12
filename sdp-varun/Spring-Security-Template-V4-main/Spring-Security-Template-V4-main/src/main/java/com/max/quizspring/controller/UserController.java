package com.max.quizspring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.quizspring.model.Product;
import com.max.quizspring.model.User;
import com.max.quizspring.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/getusers")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/register")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }
    
    @DeleteMapping("/delete/{uid}")
    public String deleteUser(@PathVariable Long uid) {
        return userService.deleteUser(uid);
    }
    
    // <--------------------------------->
    
    @PostMapping("/addservice")
    public Product addProduct(@RequestBody Product product) {
        return userService.addProduct(product);
    }

    @PutMapping("/updateservice/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        product.setId(id); // Ensure the product's ID is set
        return userService.updateProduct(product);
    }
    
    @GetMapping("/getservice")
    public List<Product> getProducts() {
        return userService.getProducts();
    }
    
    @DeleteMapping("/deleteservice/{id}")
    public String deleteProduct(@PathVariable Long id) {
        return userService.deleteProduct(id);
    }
}
