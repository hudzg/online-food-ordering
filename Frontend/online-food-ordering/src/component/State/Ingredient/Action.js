import { api } from "../../config/api";
import {
  CREATE_INGREDIENT_CATEGORY_FAILURE,
  CREATE_INGREDIENT_CATEGORY_REQUEST,
  CREATE_INGREDIENT_CATEGORY_SUCCESS,
  CREATE_INGREDIENT_FAILURE,
  CREATE_INGREDIENT_REQUEST,
  CREATE_INGREDIENT_SUCCESS,
  GET_INGREDIENT,
  GET_INGREDIENT_CATEGORY_FAILURE,
  GET_INGREDIENT_CATEGORY_REQUEST,
  GET_INGREDIENT_CATEGORY_SUCCESS,
  UPDATE_STOCK,
} from "./ActionType";

export const getIngredientsOfRestaurant =
  ({ restaurantId, jwt }) =>
  async (dispatch) => {
    // dispatch({ type: GET_RESTAURANT_ORDER_REQUEST });
    try {
      const response = await api.get(
        `/api/admin/ingredients/restaurant/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_INGREDIENT,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      //   dispatch({ type: GET_RESTAURANT_ORDER_FAILURE, payload: error });
    }
  };

export const createIngredient =
  ({ data, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_REQUEST });
    try {
      const response = await api.post(`/api/admin/ingredients`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: CREATE_INGREDIENT_SUCCESS,
        payload: response.data,
      });
      //   console.log("all restaurant: ", data);
    } catch (error) {
      console.log("error", error);
      dispatch({ type: CREATE_INGREDIENT_FAILURE, payload: error });
    }
  };

export const createIngredientCategory =
  ({ data, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });
    try {
      const response = await api.post(`/api/admin/ingredients/category`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
        payload: response.data,
      });
      //   console.log("all restaurant: ", data);
    } catch (error) {
      console.log("error", error);
      dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error });
    }
  };

export const getIngredientCategory =
  ({ id, jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_INGREDIENT_CATEGORY_REQUEST });
    try {
      const response = await api.get(
        `/api/admin/ingredients/restaurant/${id}/category`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_INGREDIENT_CATEGORY_SUCCESS,
        payload: response.data,
      });
      //   console.log("all restaurant: ", data);
    } catch (error) {
      console.log("error", error);
      dispatch({ type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error });
    }
  };

export const updateStockOfIngredient =
  ({ id, jwt }) =>
  async (dispatch) => {
    // dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });
    try {
      const response = await api.put(
        `/api/admin/ingredients/${id}/stoke`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_STOCK,
        payload: response.data,
      });
      //   console.log("all restaurant: ", data);
    } catch (error) {
      console.log("error", error);
      //   dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error });
    }
  };
