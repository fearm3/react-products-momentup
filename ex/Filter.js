import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Filter({ item }) {
  const { filter_options } = item;

  // products.filter((product) => {
  //   if (product.category === "Sweater") {
  //   }
  // });

  console.log("filter_options=>", filter_options);

  console.log(filter_options[0].values);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Filter</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
        >
          <option aria-label="None" value="" />
          <optgroup label="Category">
            <option value={1}>Sweater</option>
            <option value={2}>Coat</option>
            <option value={3}>Dress</option>
          </optgroup>
          <optgroup label="Color">
            <option value={4}>Black</option>
            <option value={5}>White</option>
            <option value={6}>Blue</option>
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}