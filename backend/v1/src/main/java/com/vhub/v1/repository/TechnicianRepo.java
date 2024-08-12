package com.vhub.v1.repository;

import com.vhub.v1.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Repository
public interface TechnicianRepo extends JpaRepository<Technician,Integer> {

    @Query("SELECT CASE WHEN COUNT(t) > 0 THEN true ELSE false END FROM Technician t WHERE t.tech_id = :tech_id")
    boolean existsBytech_Id(@Param("tech_id") int tech_id);

    @Modifying
    @Transactional
    @Query("DELETE FROM Technician t WHERE t.tech_id = :tech_id")
    void deleteBytech_Id(@Param("tech_id") int tech_id);
     
}
