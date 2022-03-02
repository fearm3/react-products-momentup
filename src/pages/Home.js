import React, { Fragment } from "react";
import { Alert } from "@mui/material";
import Filters from "../components/Filters";
import Sort from "../components/Sort";

//from api
import { apiData } from "../utils/apiData";

const Home = () => {
  const { products, total_product_count, sort_options, filter_options } =
    apiData;

  return (
    <Fragment>
      <Filters products={products} filter_options={filter_options} />
      <Sort products={products} sort_options={sort_options} />
      <Alert severity="success">All Products : {total_product_count}</Alert>
    </Fragment>
  );
};

export default Home;
