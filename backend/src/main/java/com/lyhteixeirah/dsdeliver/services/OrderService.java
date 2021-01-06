package com.lyhteixeirah.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import com.lyhteixeirah.dsdeliver.dto.OrderDTO;
import com.lyhteixeirah.dsdeliver.entities.Order;
import com.lyhteixeirah.dsdeliver.repositories.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repo;
    
    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = repo.findOrdersWithProducts();
        return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }
}
