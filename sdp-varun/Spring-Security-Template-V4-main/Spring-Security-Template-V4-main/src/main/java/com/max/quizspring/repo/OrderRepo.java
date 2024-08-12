package com.max.quizspring.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.max.quizspring.model.Orders;

public interface OrderRepo extends JpaRepository<Orders, Long> {
}