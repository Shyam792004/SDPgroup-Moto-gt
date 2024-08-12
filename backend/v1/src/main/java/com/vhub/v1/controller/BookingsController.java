package com.vhub.v1.controller;

import com.vhub.v1.dto.BookingDTO;
import com.vhub.v1.model.*;
import com.vhub.v1.services.*;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Bookings")
public class BookingsController
{

    @Autowired
    private BookingsService bs;
    @PostMapping
    public ResponseEntity<Bookings> createBookings(@RequestBody BookingDTO bookingDTO) {
        Bookings createdBookings = bs.create(bookingDTO);
        return new ResponseEntity<>(createdBookings, HttpStatus.CREATED);
    }

    // @PostMapping
    // public ResponseEntity<Bookings> createBookings(@RequestBody Bookings k) 
    // {
    //     return new ResponseEntity<>(bs.create(k), HttpStatus.CREATED);
    // }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookingsById(@PathVariable("id") int i)
    {
        Optional<Bookings> BookingsOptional = bs.getBookingsById(i);
        if(BookingsOptional.isPresent()) 
        {
            Bookings u = BookingsOptional.get();
            return new ResponseEntity<>(u, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<String>("No Bookings with id",HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllBookings()
    {
     return new ResponseEntity<>(bs.getAllBookings(),HttpStatus.OK);
    }

    // @PutMapping("/{id}")
    // public ResponseEntity<Bookings> updateBookings(@PathVariable("id") int id, @RequestBody Bookings u) {
    //     Bookings updatedBookings = bs.updateBookings(id, u);
    //     if (updatedBookings == null) 
    //     {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    //     return new ResponseEntity<>(updatedBookings, HttpStatus.OK);
    // }
@PutMapping("/{id}")
    public ResponseEntity<Bookings> updateBookings(@PathVariable("id") int id, @RequestBody BookingDTO bookingDTO) {
        Bookings updatedBookings = bs.updateBookings(id, bookingDTO);
        if (updatedBookings == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(updatedBookings, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBookings(@PathVariable("id") int BookingId) 
    {
        boolean deleted = bs.deleteBookings(BookingId);
        if (!deleted) 
        {
            return new ResponseEntity<>("Bookings not found with ID: " + BookingId, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Bookings deleted successfully", HttpStatus.OK);
    }
}
