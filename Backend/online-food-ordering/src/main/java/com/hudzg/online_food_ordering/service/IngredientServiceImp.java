package com.hudzg.online_food_ordering.service;

import com.hudzg.online_food_ordering.model.IngredientCategory;
import com.hudzg.online_food_ordering.model.IngredientsItem;
import com.hudzg.online_food_ordering.model.Restaurant;
import com.hudzg.online_food_ordering.repository.IngredientCategoryRepository;
import com.hudzg.online_food_ordering.repository.IngredientItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImp implements IngredientsService{

    @Autowired
    private IngredientItemRepository ingredientItemRepository;

    @Autowired
    private IngredientCategoryRepository ingredientCategoryRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception {

        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);

        IngredientCategory category = new IngredientCategory();
        category.setRestaurant(restaurant);
        category.setName(name);

        return ingredientCategoryRepository.save(category);
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
        Optional<IngredientCategory> optional = ingredientCategoryRepository.findById(id);

        if(optional.isEmpty()) throw new Exception("ingredient category not found...");
        return optional.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception {
        restaurantService.findRestaurantById(id);
        return ingredientCategoryRepository.findByRestaurantId(id);
    }

    @Override
    public IngredientsItem createIngrediensItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {

        IngredientCategory category = findIngredientCategoryById(categoryId);
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);

        IngredientsItem ingredientsItem = new IngredientsItem();
        ingredientsItem.setName(ingredientName);
        ingredientsItem.setRestaurant(restaurant);
        ingredientsItem.setCategory(category);

        IngredientsItem ingredients = ingredientItemRepository.save(ingredientsItem);
        category.getIngredients().add(ingredients);

        // save category ??

        return ingredients;
    }

    @Override
    public List<IngredientsItem> findRestaurantsIngredients(Long restaurantId) {
        return ingredientItemRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItem updateStock(Long id) throws Exception {
        Optional<IngredientsItem> optional = ingredientItemRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("ingredient not found");
        }
        IngredientsItem ingredientsItem = optional.get();
        ingredientsItem.setInStoke(!ingredientsItem.isInStoke());
        return ingredientItemRepository.save(ingredientsItem);
    }
}
