package com.hudzg.online_food_ordering.repository;

import com.hudzg.online_food_ordering.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


}
