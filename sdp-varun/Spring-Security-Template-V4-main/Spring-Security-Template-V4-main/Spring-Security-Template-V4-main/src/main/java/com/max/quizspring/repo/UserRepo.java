package com.max.quizspring.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.max.quizspring.model.User;




public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    
}