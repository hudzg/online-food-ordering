import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const handleLogout = () => {};
  const { auth } = useSelector((store) => store);
  return (
    <div className="min-h-[80vh] flex felx-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl font-semibold">{auth.user.fullName}</h1>
        <p>Email: {auth.user.email}</p>
        <Button
          sx={{ margin: "2rem 0rem" }}
          onClick={handleLogout}
          variant="contained"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
