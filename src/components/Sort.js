import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { productsContext } from "../context/products_context";
import { useContext } from "react";

export default function Sort({ item }) {
  const { productData } = useContext(productsContext);
  const [name, setName] = React.useState([]);
  const [output, setOutput] = React.useState([]);

  console.log(productData);
  // const { sort_options, products } = item;

  // products.map((product) => {
  //   return setName(product.name);
  // });



  //Sorting

  const handleAlphabetic = (output) => {
    output.sort();
    setOutput([...output]);
  };
  const handleAlphabeticReverse = (output) => {
    output.sort().reverse();
    setOutput([...output]);
  };

  const handleDate = (output) => {
    output.sort((a, b) =>
      b[3]
        .split("/")
        .reverse()
        .join()
        .localeCompare(a[3].split("/").reverse().join())
    );
    setOutput([...output]);
  };
  const handleDateReverse = (output) => {
    output.sort((b, a) =>
      b[3]
        .split("/")
        .reverse()
        .join()
        .localeCompare(a[3].split("/").reverse().join())
    );
    setOutput([...output]);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Sort</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
        >
          <option aria-label="None" value="" />

          <option value={1}>Sweater</option>
          <option value={2}>Coat</option>
          <option value={3}>Dress</option>

          <option value={4}>Black</option>
        </Select>
      </FormControl>
    </div>
  );
}
