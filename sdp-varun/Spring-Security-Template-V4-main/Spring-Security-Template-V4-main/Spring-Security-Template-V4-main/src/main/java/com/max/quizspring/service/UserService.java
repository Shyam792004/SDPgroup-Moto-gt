package com.max.quizspring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.quizspring.model.Product;
import com.max.quizspring.model.User;
import com.max.quizspring.repo.ProductRepo;
import com.max.quizspring.repo.UserRepo;


@Service
public class UserService {
    
    @Autowired
    private UserRepo urepo;

    @Autowired
    private ProductRepo prepo;

    public User addUsers(User user){
         return urepo.save(user);
    }
    public String deleteUser(Long uid){
        urepo.deleteById(uid);
        return "User Deleted Successfully" + uid;
    }
    public List<User> getUsers(){
        return urepo.findAll();
    }
   
    
    
    public List<Product> getproduct(){
        return prepo.findAll();
    }
    public Product addproducts(Product product){
        return prepo.save(product);
    }
    public String deleteproduct(Long id){
        prepo.deleteById(id);
        return "User Deleted Successfully" + id;
    }
}