package com.hudzg.online_food_ordering.service;

import com.hudzg.online_food_ordering.dto.RestaurantDto;
import com.hudzg.online_food_ordering.model.Restaurant;
import com.hudzg.online_food_ordering.model.User;
import com.hudzg.online_food_ordering.request.CreateRestaurantRequest;

import java.util.List;

public interface RestaurantService {

    public Restaurant createRestaurant(CreateRestaurantRequest request, User user);

    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRestaurant) throws Exception;

    public void deleteRestaurant(Long restaurantId) throws  Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(Long id) throws Exception;

    public Restaurant getRestaurantByUserId(Long userId) throws Exception;

    public RestaurantDto addToFavorites(Long restaurantId, User user) throws  Exception;

    public Restaurant updateRestaurantStatus(Long id) throws Exception;

}
