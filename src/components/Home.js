import { Alert } from "@mui/material";
import React, { Fragment } from "react";
import { apiData } from "../api/apiData";
import Cards from "./Cards";
import Filter from "./Filter";
import Sort from "./Sort";

const Home = () => {
  const { products, total_product_count} = apiData;

  return (
    <Fragment>
      <Sort />
      <Filter item={apiData} />
      <div className="cardGroup">
        {products.map((product) => {
          return <Cards product={product} key={product.id} />;
        })}
      </div>
      <Alert severity="success">All Products : {total_product_count}</Alert>
    </Fragment>
  );
};

export default Home;
