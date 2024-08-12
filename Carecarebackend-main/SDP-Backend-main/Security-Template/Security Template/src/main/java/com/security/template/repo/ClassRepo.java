package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.security.template.model.Class;
import java.util.Optional;

public interface ClassRepo extends JpaRepository<Class, Long> {
    Optional<Class> findByCid(Long cid);
}
