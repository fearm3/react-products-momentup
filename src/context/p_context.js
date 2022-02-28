import React, { useContext, useReducer } from "react";
import reducer from "../reducers/products_reducer";

import { apiData } from "../api/apiData";

const { products } = apiData;

const initialState = {
  id: 0,
  price: 0,
  name: "",
  category: "",
  currency: "",
  image_name: "",
  color: "",
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ ...state, products }}>
      {children}
    </ProductsContext.Provider>
  );
};
//! make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
