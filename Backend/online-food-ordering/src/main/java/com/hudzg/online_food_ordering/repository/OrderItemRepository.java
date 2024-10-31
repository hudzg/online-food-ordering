package com.hudzg.online_food_ordering.repository;

import com.hudzg.online_food_ordering.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
