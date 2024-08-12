package com.security.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.User;
import com.security.template.repo.UserRepo;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepo urepo;

    public List<User> getUsers() {
        return urepo.findAll();
    }

    public User addUsers(User user) {
        return urepo.save(user);
    }

    public String deleteUser(Long uid) {
        urepo.deleteById(uid);
        return "User deleted successfully";
    }

    public User findUserByUid(Long uid) {
        Optional<User> user = urepo.findById(uid);
        return user.orElse(null);
    }

    public User editUserByUid(Long uid, User userDetails) {
        User user = urepo.findById(uid).orElse(null);
        if (user != null) {
            user.setName(userDetails.getName());
            user.setEmail(userDetails.getEmail());
            user.setPassword(userDetails.getPassword());
            user.setSubjects(userDetails.getSubjects());
            urepo.save(user);
        }
        return user;
    }
}
