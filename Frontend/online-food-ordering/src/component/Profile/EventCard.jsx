import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          image="https://images.pexels.com/photos/429807/pexels-photo-429807.jpeg?auto=compress&cs=tinysrgb&w=600"
          sx={{ height: 345 }}
        />
        <CardContent>
          <Typography variant="h5">Hung Stawberry</Typography>
          <Typography variant="body2">50% off on your first order</Typography>
          <div className="py-2 space-y-2">
            <p>{"Hanoi"}</p>
            <p className="text-blue-500">October 28, 2024 7:00 AM</p>
            <p className="text-red-500">October 29, 2024 7:00 PM</p>
          </div>
        </CardContent>
        {false && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
