import {
  Box,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

const orders = [1, 1, 1];

const IngredientCategoryTable = () => {
  return (
    <div>
      <Box>
        <Card className="mt-1">
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <CreateIcon />
              </IconButton>
            }
            title={"Ingredient Category"}
            sx={{ pt: 2, alignItems: "center" }}
          />
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="left">name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {1}
                    </TableCell>
                    <TableCell align="left">{"image"}</TableCell>
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

export default IngredientCategoryTable;
