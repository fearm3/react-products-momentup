import { Alert, FormControl, InputLabel, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import { apiData } from "../api/apiData";
import Cards from "./Cards";
// import Filters from "./Filters";
// import Sort from "./Sort";

const Home = () => {
  const [query, setQuery] = useState("");
  const { products, total_product_count } = apiData;

  console.log("query=", query);

  return (
    <Fragment>
      <Box sx={{ maxWidth: 150, marginTop: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            native
            id="grouped-native-select"
            label="Grouping"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          >
            <option aria-label="None" value="" />
            <optgroup label="Category">
              <option value={"Sweater"}>Sweater</option>
              <option value={"Coat"}>Coat</option>
              <option value={"Dress"}>Dress</option>
            </optgroup>
            <optgroup label="Color">
              <option value={"Black"}>Black</option>
              <option value={"White"}>White</option>
              <option value={"Blue"}>Blue</option>
            </optgroup>
          </Select>
        </FormControl>
      </Box>

      {/* <Sort products={products} /> */}

      <div className="cardGroup">
        {products
          .filter((item) => {
            if (query === "") {
              return true;
            } else if (
              item.category.toLocaleLowerCase() === query.toLocaleLowerCase()
            ) {
              return true;
            } else if (
              item.color.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            ) {
              return true;
            }
          })
          .map((product) => {
            return <Cards product={product} key={product.id} />;
          })}
      </div>
      <Alert severity="success">All Products : {total_product_count}</Alert>
    </Fragment>
  );
};

export default Home;
