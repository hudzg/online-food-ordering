import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFood,
  getMenuItemsByRestaurantId,
} from "../../component/State/Menu/Action";

const orders = [1, 1, 1];

const MenuTable = () => {
  const navigate = useNavigate();
  const { restaurant, ingredient, menu } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        restaurantId: restaurant.userRestaurant.id,
        jwt: localStorage.getItem("jwt"),
        vegetarian: false,
        seasonal: false,
        nonveg: false,
        foodCategory: "",
      })
    );
  }, []);

  const handleDeleteFood = (foodId) => {
    dispatch(deleteFood({ foodId, jwt }));
  };

  return (
    <div>
      <Box>
        <Card className="mt-1">
          <CardHeader
            action={
              <IconButton
                onClick={() => navigate("/admin/restaurant/add-menu")}
                aria-label="settings"
              >
                <CreateIcon />
              </IconButton>
            }
            title={"Menu"}
            sx={{ pt: 2, alignItems: "center" }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>image</TableCell>
                  <TableCell align="right">title</TableCell>
                  <TableCell align="right">ingredients</TableCell>
                  <TableCell align="right">price</TableCell>
                  <TableCell align="right">Availability</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menu.menuItems.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Avatar src={item.images[0]}></Avatar>
                    </TableCell>
                    <TableCell align="right">{item.name}</TableCell>
                    <TableCell align="right">
                      {item.ingredients.map((ingredient) => (
                        <Chip label={ingredient.name} />
                      ))}
                    </TableCell>
                    <TableCell align="right">${item.price}</TableCell>
                    <TableCell align="right">
                      {item.available ? "in_stoke" : "out_of_stoke"}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <DeleteIcon
                          color="primary"
                          onClick={() => handleDeleteFood(item.id)}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </div>
  );
};

export default MenuTable;
