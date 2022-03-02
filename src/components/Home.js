import React, { Fragment } from "react";
import { Alert } from "@mui/material";
import Filters from "./Filters";
import Sort from "./Sort";

//from api
import { apiData } from "../api/apiData";


const Home = () => {
  const { products, total_product_count, sort_options } = apiData;

  return (
    <Fragment>
      
      <Filters products={products} />
      <Sort products={products} sort_options={sort_options} />
      <Alert severity="success">All Products : {total_product_count}</Alert>
    </Fragment>
  );
};

export default Home;
