package com.lyhteixeirah.dsdeliver.repositories;

import com.lyhteixeirah.dsdeliver.entities.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    
}
