import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { style } from "../Cart/Cart";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnClose = () => {
    navigate("/");
  };
  return (
    <>
      <Modal
        open={
          location.pathname === "/account/register" ||
          location.pathname === "/account/login"
        }
        onClose={handleOnClose}
      >
        <Box sx={style}>
          {location.pathname === "/account/register" ? (
            <RegisterForm />
          ) : (
            <LoginForm />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Auth;
