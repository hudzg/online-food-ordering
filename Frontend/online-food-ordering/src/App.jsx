import { CssBaseline, ThemeProvider } from "@mui/material";
// import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { darkTheme } from "./Theme/DarkTheme";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./component/State/store";
import { useEffect } from "react";
import { getUser } from "./component/State/Authentication/Action";
import { findCart } from "./component/State/Cart/Action";
import Routers from "./Routers/Routers";
import { getRestaurantByUserId } from "./component/State/Restaurant/Action";

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (auth.jwt || jwt) {
      dispatch(getUser(auth.jwt || jwt));
      dispatch(findCart({ jwt: auth.jwt || jwt }));
      // dispatch(getRestaurantByUserId({ jwt: auth.jwt || jwt }));
      console.log("auth jwt", auth.jwt);
      console.log("user", auth.user);
    }
  }, [auth.jwt]);

  useEffect(() => {
    if (auth.jwt || jwt) {
      dispatch(getRestaurantByUserId({ jwt: auth.jwt || jwt }));
    }
    console.log("user", auth.user);
  }, [auth.user]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
