package com.example.order_service.Controller;

import com.example.order_service.Entity.Order;
import com.example.order_service.Security.JwtUtil;
import com.example.order_service.Service.OrderService;
import java.util.List;
import lombok.Generated;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/orders"})
public class OrderController {
    private final OrderService orderService;
    private final JwtUtil jwtUtil;

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order, @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        String userName = this.jwtUtil.extractUserName(token);
        order.setUserName(userName);
        return ResponseEntity.ok(this.orderService.createOrder(order));
    }

    @GetMapping
    public ResponseEntity<List<Order>> getMyOrders(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        String userName = this.jwtUtil.extractUserName(token);
        return ResponseEntity.ok(this.orderService.getOrdersForUser(userName));
    }

    @PatchMapping({"/{id}/status"})
    public ResponseEntity<Order> updateStatus(@PathVariable Long id, @RequestParam String status) {
        return ResponseEntity.ok(this.orderService.updateOrderStatus(id, status));
    }

    @Generated
    public OrderController(final OrderService orderService, final JwtUtil jwtUtil) {
        this.orderService = orderService;
        this.jwtUtil = jwtUtil;
    }
}
