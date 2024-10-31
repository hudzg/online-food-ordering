package com.hudzg.online_food_ordering.repository;

import com.hudzg.online_food_ordering.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food, Long> {
    List<Food> findByRestaurantId(Long restaurantId);

    @Query("SELECT f FROM Food f WHERE lower(f.name) LIKE lower(concat('%', :keyword, '%')) OR lower(f.foodCategory.name) LIKE lower(concat('%', :keyword, '%'))")
    List<Food> searchFood(@Param("keyword") String keyword);
}
