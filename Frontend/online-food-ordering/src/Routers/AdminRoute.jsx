import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Admin from "../AdminComponent/Admin/Admin";
import CreateRestaurantForm from "../AdminComponent/CreateRestaurantForm/CreateRestaurantForm";

const AdminRoute = () => {
  const restaurant = useSelector((store) => store.restaurant);
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            // auth.user &&
            !restaurant.userRestaurant ? <CreateRestaurantForm /> : <Admin />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AdminRoute;
