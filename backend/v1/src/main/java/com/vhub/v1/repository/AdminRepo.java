package com.vhub.v1.repository;

import com.vhub.v1.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AdminRepo extends JpaRepository<Admin,Integer> {
    boolean existsByName(String name);
    List<Admin> findByEmail(String email);
     
}
