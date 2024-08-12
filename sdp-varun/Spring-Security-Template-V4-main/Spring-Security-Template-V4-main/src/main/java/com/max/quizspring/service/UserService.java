package com.max.quizspring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.max.quizspring.model.Product;
import com.max.quizspring.model.User;
import com.max.quizspring.repo.ProductRepo;
import com.max.quizspring.repo.UserRepo;

@Service
public class UserService {

    private final UserRepo userRepo;
    private final ProductRepo productRepo;

    public UserService(UserRepo userRepo, ProductRepo productRepo) {
        this.userRepo = userRepo;
        this.productRepo = productRepo;
    }

    // User Methods
    public User addUser(User user) {
        return userRepo.save(user);
    }

    public String deleteUser(Long uid) {
        userRepo.deleteById(uid);
        return "User Deleted Successfully with ID: " + uid;
    }

    public List<User> getUsers() {
        return userRepo.findAll();
    }

    // Product Methods
    public List<Product> getProducts() {
        return productRepo.findAll();
    }

    public Product addProduct(Product product) {
        return productRepo.save(product);
    }

    public Product updateProduct(Product product) {
        return productRepo.save(product);
    }

    public String deleteProduct(Long id) {
        productRepo.deleteById(id);
        return "Product Deleted Successfully with ID: " + id;
    }
}
