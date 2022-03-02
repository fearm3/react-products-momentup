import React, { Fragment } from "react";
import { Alert, Grid } from "@mui/material";
import Filters from "../components/Filters";
import Sort from "../components/Sort";

//from api
import { apiData } from "../utils/apiData";

const Home = () => {
  const { products, total_product_count, sort_options, filter_options } =
    apiData;

  return (
    <Fragment>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Filters products={products} filter_options={filter_options} />
        </Grid>
        <Grid xs={6}>
          <Sort products={products} sort_options={sort_options} />
        </Grid>
      </Grid>
      <Alert severity="success">All Products : {total_product_count}</Alert>
    </Fragment>
  );
};

export default Home;
