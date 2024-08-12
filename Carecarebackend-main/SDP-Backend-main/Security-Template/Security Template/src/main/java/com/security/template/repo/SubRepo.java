package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.template.model.Sub;

public interface SubRepo extends JpaRepository<Sub, Long> {
   
}
