
package com.max.quizspring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.quizspring.model.Product;

public interface ProductRepo extends JpaRepository<Product,Long>{

    
}