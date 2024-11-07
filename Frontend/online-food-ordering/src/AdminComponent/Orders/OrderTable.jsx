import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantOrder,
  updateOrderStatus,
} from "../../component/State/RestaurantOrder/Action";

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" },
  { label: "Delivered", value: "DELIVERED" },
];

const OrderTable = () => {
  const { restaurant, ingredient, restaurantOrder } = useSelector(
    (store) => store
  );
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState({});

  const handleClick = (event, id) => {
    setAnchorEl((prev) => ({ ...prev, [id]: event.currentTarget }));
  };

  const handleClose = (id) => {
    setAnchorEl((prev) => ({ ...prev, [id]: null }));
  };

  useEffect(() => {
    dispatch(
      fetchRestaurantOrder({ restaurantId: restaurant.userRestaurant?.id, jwt })
    );
  }, []);

  const handleUpdateOrder = (orderId, orderStatus) => {
    handleClose(orderId);
    console.log("handleUpdateOrder", orderId, orderStatus);
    dispatch(updateOrderStatus({ orderId, orderStatus, jwt }));
  };

  return (
    <div>
      <Box>
        <Card className="mt-1">
          <CardHeader
            title={"All Orders"}
            sx={{ pt: 2, alignItems: "center" }}
          />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="right">image</TableCell>
                  <TableCell align="right">Customer</TableCell>
                  <TableCell align="right">price</TableCell>
                  <TableCell align="right">name</TableCell>
                  <TableCell align="right">ingredients</TableCell>
                  <TableCell align="right">status</TableCell>
                  <TableCell align="right">Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {restaurantOrder.orders.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell align="right">
                      <AvatarGroup>
                        {item.items.map((orderItem) => (
                          <Avatar src={orderItem.food?.images[0]} />
                        ))}
                      </AvatarGroup>
                    </TableCell>
                    <TableCell align="right">
                      {item.customer?.fullName}
                    </TableCell>
                    <TableCell align="right">${item.totalPrice}</TableCell>
                    <TableCell align="right">
                      {item.items.map((orderItem) => (
                        <p>{orderItem.food?.name}</p>
                      ))}
                    </TableCell>
                    <TableCell align="right">
                      {item.items.map((orderItem) => (
                        <div>
                          {orderItem.ingredients.map((ingredient) => (
                            <Chip label={ingredient} />
                          ))}
                        </div>
                      ))}
                    </TableCell>
                    <TableCell align="right">{item.orderStatus}</TableCell>
                    <TableCell>
                      <Button
                        id={`basic-button${item.id}`}
                        aria-controls={
                          Boolean(anchorEl[item.id])
                            ? `basic-menu${item.id}`
                            : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={
                          Boolean(anchorEl[item.id]) ? "true" : undefined
                        }
                        onClick={(e) => handleClick(e, item.id)}
                      >
                        Update
                      </Button>
                      <Menu
                        id={`basic-menu${item.id}`}
                        anchorEl={anchorEl[item.id]}
                        open={Boolean(anchorEl[item.id])}
                        onClose={() => handleClose(item.id)}
                        MenuListProps={{
                          "aria-labelledby": `basic-button${item.id}`,
                        }}
                      >
                        {orderStatus.map((status) => (
                          <MenuItem
                            key={`${item.id}${status.value}`}
                            onClick={() =>
                              handleUpdateOrder(item.id, status.value)
                            }
                          >
                            {status.label}
                          </MenuItem>
                        ))}
                      </Menu>
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

export default OrderTable;
