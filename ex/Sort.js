import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { productsContext } from "../context/products_context";
import { useContext } from "react";

export default function Sort() {
  const { productData } = useContext(productsContext);
  const [orderedData, setOrderedData] = useState([]);

  // console.log("All product=>", productData);

  // productData.map((product) => {
  //   return setName(...product.name);
  // });

  //!Sorting

  //Price High
  function sortedHighPrice() {
    return setOrderedData(
      productData.sort(function (a, b) {
        return a.price - b.price;
      })
    );
  }
  //Price Low
  const sortedLowPrice = () =>
    productData.sort(function (a, b) {
      return b.price - a.price;
    });

  //Alphabetic

  const orderedA = () =>
    productData.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

  console.log("orderedA", orderedA);

  const orderedZ = () =>
    productData.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });

  // console.log("Sort =>", sortedHighPrice);

  // useEffect(() => {
  //   setOrderedData(sortedHighPrice());
  // }, [orderedData]);

  console.log("orderedData", orderedData);

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

          <option onClick={orderedA} value={1}>
            Order A-Z
          </option>
          <option onClick={orderedZ} value={2}>
            Order Z-A
          </option>
          <option onClick={sortedLowPrice} value={3}>
            Lowest price
          </option>
          <option onClick={sortedHighPrice} value={4}>
            Highest price
          </option>
        </Select>
      </FormControl>
    </div>
  );
}
