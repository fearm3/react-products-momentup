import axios from "axios";
import React from "react";

//!CORS Policy

const Data = () => {
  React.useEffect(() => {
    axios
      .get("https://www.momentup.co/challange/ProductsWithFilter.json", {
        withCredentials: true,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });

  return <div>Data</div>;
};

export default Data;
