package com.max.quizspring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.quizspring.model.Orders;
import com.max.quizspring.model.Product;
import com.max.quizspring.model.User;
import com.max.quizspring.repo.OrderRepo;
import com.max.quizspring.repo.ProductRepo;
import com.max.quizspring.repo.UserRepo;


@Service
public class OrderService {
    @Autowired
    private UserRepo ur;

    @Autowired
    private ProductRepo pr;

    @Autowired
    private OrderRepo or;
     public Orders createOrder(Long userId, Long serviceId, String userAddress, String payMethod) {
        User user = ur.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Product service = pr.findById(serviceId).orElseThrow(() -> new RuntimeException("Service not found"));

        Orders order = new Orders();
        order.setUser(user);
        order.setService(service);
        order.setUserAddress(userAddress);
        order.setPayMethod(payMethod);
        order.setOrderConfirmed(false); // Default value for new orders

        return or.save(order);
    }
}