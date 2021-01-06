package com.lyhteixeirah.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import com.lyhteixeirah.dsdeliver.dto.ProductDTO;
import com.lyhteixeirah.dsdeliver.entities.Product;
import com.lyhteixeirah.dsdeliver.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;
    
    @Transactional(readOnly = true)
    public List<ProductDTO> findAll() {
        List<Product> list = repo.findAllByOrderByNameAsc();
        return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
    }
}
