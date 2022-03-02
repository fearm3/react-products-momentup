/* eslint-disable array-callback-return */
import React, { Fragment, useState } from "react";
import { Box } from "@mui/system";
import { FormControl, InputLabel, Select } from "@mui/material";

import Cards from "./Cards";

const Sort = ({ products, sort_options }) => {
  const [sorted, setSorted] = useState("");

  console.log(sorted);
  console.log(sort_options);
  return (
    <Fragment>
      <Box sx={{ maxWidth: 150, marginTop: 2 }}>
        <FormControl fullWidth>
          <InputLabel htmlFor="grouped-select" id="demo-simple-select-label">
            Sort
          </InputLabel>
          <Select
            native
            id="grouped-select"
            label="Grouping"
            value={sorted}
            onChange={(e) => setSorted(e.target.value)}
          >
            <option aria-label="None" value="" />
            {sort_options.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <div className="cardGroup">
        {products
          .sort((a, b) => {
            if (sorted === "") {
              return true;
            } else if (sorted === "Highest price") {
              return a.price > b.price ? -1 : +1;
            } else if (sorted === "Lowest price") {
              return a.price > b.price ? 1 : -1;
            } else if (sorted === "Order A-Z") {
              return a.name > b.name ? 1 : -1;
            } else if (sorted === "Order Z-A") {
              return a.name > b.name ? -1 : 1;
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

export default Sort;
