import React from "react";
import {
  AdminPanelSettings,
  Category,
  Dashboard,
  Event,
  Fastfood,
  Logout,
  ShoppingBag,
  ShopTwo,
} from "@mui/icons-material";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../component/State/Authentication/Action";

const menu = [
  { title: "Dashboard", icon: <Dashboard />, path: "/" },
  { title: "Orders", icon: <ShoppingBag />, path: "/orders" },
  { title: "Menu", icon: <ShopTwo />, path: "/menu" },
  { title: "FoodCategory", icon: <Category />, path: "/category" },
  { title: "Ingredients", icon: <Fastfood />, path: "/ingredients" },
  { title: "Events", icon: <Event />, path: "/event" },
  { title: "Details", icon: <AdminPanelSettings />, path: "/details" },
  { title: "Logout", icon: <Logout />, path: "/" },
];

const AdminSideBar = ({ handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    navigate(`/admin/restaurant${item.path}`);
    if (item.title === "Logout") {
      navigate("/");
      dispatch(logout());
      handleClose();
    }
  };
  return (
    <div>
      <>
        <Drawer
          variant={isSmallScreen ? "temporary" : "permanent"}
          sx={{ zIndex: 1 }}
          open={true}
          anchor="left"
          onClose={handleClose}
        >
          <div className="w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]">
            {menu.map((item, index) => (
              <>
                <div
                  onClick={() => handleNavigate(item)}
                  className="px-5 flex items-center gap-5 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {index !== menu.length - 1 && <Divider />}
              </>
            ))}
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default AdminSideBar;
