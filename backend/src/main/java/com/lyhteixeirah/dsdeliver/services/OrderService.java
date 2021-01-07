package com.lyhteixeirah.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import com.lyhteixeirah.dsdeliver.dto.OrderDTO;
import com.lyhteixeirah.dsdeliver.dto.ProductDTO;
import com.lyhteixeirah.dsdeliver.entities.Order;
import com.lyhteixeirah.dsdeliver.entities.Product;
import com.lyhteixeirah.dsdeliver.entities.enums.OrderStatus;
import com.lyhteixeirah.dsdeliver.repositories.OrderRepository;
import com.lyhteixeirah.dsdeliver.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repo;

    @Autowired
    private ProductRepository productRepository;
    
    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = repo.findOrdersWithProducts();
        return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO insert(OrderDTO dto) {
        Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLatitude(), Instant.now(), OrderStatus.PENDING);
        for (ProductDTO p : dto.getProducts()){
            Product product = productRepository.getOne(p.getId());
            order.getProducts().add(product);
        }
        order = repo.save(order);
        return new OrderDTO(order);
    }

    @Transactional
    public OrderDTO setDelivered(Long id) {
        Order order = repo.getOne(id);
        order.setStatus(OrderStatus.DELIVERED);
        order = repo.save(order);
        return new OrderDTO(order);
    }
}
