import { Button, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Events = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    image: "",
    location: "",
    name: "",
    startedAt: null,
    endsAt: null,
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateType) => {
    const formatedDate = dayjs(date).format("MMMM DD, YYYY hh:mm A");
    console.log(dayjs(date), formatedDate);
    setFormData({ ...formData, [dateType]: formatedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formData);
  };
  return (
    <div>
      <div className="p-5">
        <Button onClick={handleOpen} variant="contained">
          Create New Event
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Grid container spacing={3}>
                <Grid item size={{ xs: 12 }}>
                  <TextField
                    name="image"
                    label="Image URL"
                    variant="outlined"
                    fullWidth
                    value={formData.image}
                    onChange={handleFormChange}
                  ></TextField>
                </Grid>

                <Grid item size={{ xs: 12 }}>
                  <TextField
                    name="location"
                    label="Location"
                    variant="outlined"
                    fullWidth
                    value={formData.location}
                    onChange={handleFormChange}
                  ></TextField>
                </Grid>

                <Grid item size={{ xs: 12 }}>
                  <TextField
                    name="name"
                    label="Event name"
                    variant="outlined"
                    fullWidth
                    value={formData.name}
                    onChange={handleFormChange}
                  ></TextField>
                </Grid>

                <Grid item size={{ xs: 12 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Start Date and Time"
                      value={dayjs(formData.startedAt)}
                      onChange={(newValue) =>
                        handleDateChange(newValue, "startedAt")
                      }
                      className="w-full"
                      // sx={{ width: "100%" }}
                      // renderInput={(props) => <TextField {...props} />}
                      // inputFormat="MM/dd/yyyy hh:mm a"
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item size={{ xs: 12 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="End Date and Time"
                      value={dayjs(formData.endsAt)}
                      onChange={(newValue) =>
                        handleDateChange(newValue, "endsAt")
                      }
                      className="w-full"
                      sx={{ width: "100%" }}
                      // renderInput={(props) => <TextField {...props} />}
                      // inputFormat="MM/dd/yyyy hh:mm a"
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Button variant="contained" type="submit">
                submit
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Events;
