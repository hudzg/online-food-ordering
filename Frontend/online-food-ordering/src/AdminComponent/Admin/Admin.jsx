import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  getRestaurantById,
  getRestaurantCategory,
} from "../../component/State/Restaurant/Action";
import Dashboard from "../Dashboard/Dashboard";
import Events from "../Events/Events";
import FoodCategory from "../FoodCategory/FoodCategory";
import Ingredients from "../Ingredients/Ingredients";
import CreateMenuForm from "../Menu/CreateMenuForm";
import Menu from "../Menu/Menu";
import Orders from "../Orders/Orders";
import AdminSideBar from "./AdminSideBar";
import RestaurantDetails from "./RestaurantDetails";

const Admin = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const restaurant = useSelector((store) => store.restaurant);
  const handleClose = () => {};
  // useEffect(() => {
  //   console.log("restaurantId", restaurant.userRestaurant?.id);
  //   dispatch(
  //     getRestaurantCategory({
  //       jwt,
  //       restaurantId: restaurant.userRestaurant?.id,
  //     })
  //   );
  //   // dispatch(
  //   //   fetchRestaurantOrder({ restaurantId: restaurant.userRestaurant?.id, jwt })
  //   // );
  // }, []);
  return (
    <div className="lg:flex justify-between">
      <div>
        <AdminSideBar handleClose={handleClose} />
      </div>
      <div className="lg:w-[80%]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category" element={<FoodCategory />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/event" element={<Events />} />
          <Route path="/details" element={<RestaurantDetails />} />
          <Route path="/add-menu" element={<CreateMenuForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
