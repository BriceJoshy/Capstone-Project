package com.example.order_service.Service;

import com.example.order_service.Entity.Order;
import com.example.order_service.Repository.OrderRepository;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Generated;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    public Order createOrder(Order order) {
        order.setStatus("RECEIVED");
        order.setOrderDate(LocalDateTime.now());
        return (Order)this.orderRepository.save(order);
    }

    public List<Order> getOrdersForUser(String userName) {
        return this.orderRepository.findByUserName(userName);
    }

    public Order updateOrderStatus(Long orderId, String status) {
        Order order = (Order)this.orderRepository.findById(orderId).orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status);
        return (Order)this.orderRepository.save(order);
    }

    @Generated
    public OrderService(final OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }
}