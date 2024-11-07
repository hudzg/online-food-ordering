import Grid from "@mui/material/Grid2";
import React from "react";
import MenuTable from "../Menu/MenuTable";
import OrderTable from "../Orders/OrderTable";

const Dashboard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, lg: 6 }}>
          <MenuTable />
        </Grid>
        <Grid item size={{ xs: 12, lg: 6 }}>
          <OrderTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
