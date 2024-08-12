
package com.max.quizspring.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.quizspring.auth.OrderRequest;
import com.max.quizspring.model.Orders;
import com.max.quizspring.service.OrderService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/post")
    public Orders createOrder(@RequestBody OrderRequest orderRequest) {
        return orderService.createOrder(
            orderRequest.getUserId(),
            orderRequest.getProductId(),
            orderRequest.getUserAddress(),
            orderRequest.getPayMethod()
        );
    }
}