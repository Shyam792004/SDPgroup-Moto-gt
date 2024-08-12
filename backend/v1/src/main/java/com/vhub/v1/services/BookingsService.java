package com.vhub.v1.services;

import com.vhub.v1.repository.*;
import com.vhub.v1.dto.BookingDTO;
import com.vhub.v1.model.*;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingsService {

    
    @Autowired
    BookingsRepo br;

    @Autowired
    CustomerRepo cr;
   
    // public Bookings create(Bookings k)
    // {
    //     return br.save(k);
    // }
    public List<Bookings> getAllBookings()
    {
        return br.findAll();
    }

    public Bookings create(BookingDTO bookingDTO) {
        Bookings bookings = new Bookings();
        bookings.setName(bookingDTO.getName());
        bookings.setPhonenumber(bookingDTO.getPhonenumber());
        bookings.setVehicleNo(bookingDTO.getVehicleNo());
        bookings.setService(bookingDTO.getService());
        bookings.setDate(bookingDTO.getDate());
        bookings.setTime(bookingDTO.getTime());
        bookings.setProblemDesc(bookingDTO.getProblemDesc());
        
        Customer customer = cr.findById(bookingDTO.getCustomerId())
                .orElseThrow(() -> new RuntimeException("Customer not found with ID: " + bookingDTO.getCustomerId()));
        bookings.setCustomer(customer);

        return br.save(bookings);
    }
    public Optional<Bookings> getBookingsById(int id) 
    {
        return br.findById(id);
    }

    public Bookings updateBookings(int id, BookingDTO bookingDTO) {
        if (br.existsById(id)) {
            Bookings booking = br.findById(id).orElse(null);
            if (booking != null) {
                booking.setName(bookingDTO.getName());
                booking.setPhonenumber(bookingDTO.getPhonenumber());
                booking.setVehicleNo(bookingDTO.getVehicleNo());
                booking.setService(bookingDTO.getService());
                booking.setDate(bookingDTO.getDate());
                booking.setTime(bookingDTO.getTime());
                booking.setProblemDesc(bookingDTO.getProblemDesc());
                Customer customer = cr.findById(bookingDTO.getCustomerId()).orElse(null);
                if (customer != null) {
                    booking.setCustomer(customer);
                }
                return br.save(booking);
            }
        }
        return null;
    }

    public boolean deleteBookings(int bookingId) 
    {
        if (br.existsById(bookingId))
        {
            br.deleteById(bookingId);
            return true;
        }
        return false;
    }
}
