import React, { Fragment, useState } from "react";
import { Box } from "@mui/system";
import { FormControl, InputLabel, Select } from "@mui/material";

import Cards from "./Cards";

const Filters = ({ products, filter_options }) => {
  const [filtered, setFiltered] = useState("");
  console.log(filtered);
  return (
    <>
      <Box sx={{ maxWidth: 200, marginTop: 2 }}>
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
            {filter_options.map((options, index) => {
              return (
                <Fragment key={index}>
                  <optgroup label={options.name} />

                  <option value={options.values[0]}>{options.values[0]}</option>
                  <option value={options.values[1]}>{options.values[1]}</option>
                  <option value={options.values[2]}>{options.values[2]}</option>
                </Fragment>
              );
            })}
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
            // eslint-disable-next-line
            return;
          })
          .map((product) => {
            return <Cards product={product} key={product.id} />;
          })}
      </div>
    </>
  );
};

export default Filters;
