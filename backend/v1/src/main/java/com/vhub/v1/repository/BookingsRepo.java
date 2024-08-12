package com.vhub.v1.repository;

import com.vhub.v1.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface BookingsRepo extends JpaRepository<Bookings,Integer> {

     
}
