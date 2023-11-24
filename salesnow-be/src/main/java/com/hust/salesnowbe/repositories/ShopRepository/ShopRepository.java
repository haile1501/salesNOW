package com.hust.salesnowbe.repositories.ShopRepository;

import com.hust.salesnowbe.models.Shop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShopRepository extends JpaRepository<Shop, Integer> {
    Shop findById(int id);
}
