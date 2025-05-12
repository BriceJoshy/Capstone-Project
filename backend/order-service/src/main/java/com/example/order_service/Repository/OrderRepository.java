package com.example.order_service.Repository;

import com.example.order_service.Entity.Order;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserName(String userName);
}