/* eslint-disable array-callback-return */
import React, { Fragment, useState } from "react";
import { Box } from "@mui/system";
import { FormControl, InputLabel, Select } from "@mui/material";

import Cards from "./Cards";

const Filters = ({ products }) => {
  const [filtered, setFiltered] = useState("");
  return (
    <Fragment>
      <Box sx={{ maxWidth: 150, marginTop: 2 }}>
        <FormControl fullWidth>
          <InputLabel htmlFor="grouped-native-select">Filter</InputLabel>
          <Select
            native
            id="grouped-native-select"
            label="Filter"
            value={filtered}
            onChange={(e) => setFiltered(e.target.value)}
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
      <div className="cardGroup">
        {products
          .filter((item) => {
            if (filtered === "") {
              return true;
            } else if (
              item.category.toLocaleLowerCase() === filtered.toLocaleLowerCase()
            ) {
              return true;
            } else if (
              item.color
                .toLocaleLowerCase()
                .includes(filtered.toLocaleLowerCase())
            ) {
              return true;
            }
            return;
          })
          .map((product) => {
            return <Cards product={product} key={product.id} />;
          })}
      </div>
    </Fragment>
  );
};

export default Filters;
