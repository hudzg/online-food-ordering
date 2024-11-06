import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const CreateIngredientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    ingredientCategoryId: "",
  });
  const handleSubmit = () => {
    const data = {
      name: formData.categoryName,
      restaurantId: {
        id: 1,
      },
    };
    console.log(data);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredients
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Ingredient"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Is Seasonal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.ingredientCategoryId}
              label="Is Seasonal"
              onChange={handleInputChange}
              name="ingredientCategoryId"
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" type="submit">
            Create Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientForm;
