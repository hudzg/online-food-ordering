package com.hudzg.online_food_ordering.service;

import com.hudzg.online_food_ordering.model.Category;
import com.hudzg.online_food_ordering.model.Food;
import com.hudzg.online_food_ordering.model.Restaurant;
import com.hudzg.online_food_ordering.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {
    public Food createFood(CreateFoodRequest request, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws Exception;

    public List<Food> getRestaurantsFood(Long restaurantId,
                                         boolean isVegetarian,
                                         boolean isNonveg,
                                         boolean isSeasonal,
                                         String foodCategory);

    public List<Food> searchFood(String keyword);

    public Food findFoodById(Long foodId) throws Exception;

    public Food updateAvailabilityStatus(Long foodId) throws Exception;
}
