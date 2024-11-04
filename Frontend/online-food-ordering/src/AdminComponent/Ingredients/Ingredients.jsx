import Grid from "@mui/material/Grid2";
import React from "react";
import IngredientCategoryTable from "./IngredientCategoryTable";
import IngredientTable from "./IngredientTable";

const Ingredients = () => {
  return (
    <div className="px-2">
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, lg: 8 }}>
          <IngredientTable />
        </Grid>
        <Grid item size={{ xs: 12, lg: 4 }}>
          <IngredientCategoryTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Ingredients;
