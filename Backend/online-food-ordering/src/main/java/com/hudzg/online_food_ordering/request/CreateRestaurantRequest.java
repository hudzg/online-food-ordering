package com.hudzg.online_food_ordering.request;

import com.hudzg.online_food_ordering.model.Address;
import com.hudzg.online_food_ordering.model.ContactInformation;
import lombok.Data;

import java.util.List;

@Data
public class CreateRestaurantRequest {
    private Long id;
    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> images;
}
