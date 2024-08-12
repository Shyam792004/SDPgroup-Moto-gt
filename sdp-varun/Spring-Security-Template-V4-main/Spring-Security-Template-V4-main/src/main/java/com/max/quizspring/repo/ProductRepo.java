
package com.max.quizspring.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.quizspring.model.Product;
import com.max.quizspring.model.User;

public interface ProductRepo extends JpaRepository<Product,Long>{

    Optional<User> findById(Product serviceId);

    
}