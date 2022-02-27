import { Alert, Button } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { apiData } from "../api/apiData";

const Home = () => {
  const navigate = useNavigate();

  // console.log(apiData);

  const handleButtonClick = (row) => {
    navigate(`detail/${row.id}`);
  };

  const caseInsensitiveSort = (rowA, rowB) => {
    const a = rowA.name.toLowerCase();
    const b = rowB.name.toLowerCase();

    if (a > b) {
      return 1;
    }

    if (b > a) {
      return -1;
    }

    return 0;
  };
  const priceSort = (rowA, rowB) => {
    const a = rowA.price;
    const b = rowB.price;

    if (a > b) {
      return 1;
    }

    if (b > a) {
      return -1;
    }

    return 0;
  };

  const columns = [
    {
      cell: (row) => (
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={() => handleButtonClick(row)}
        >
          Details
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      sortFunction: caseInsensitiveSort,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      sortFunction: priceSort,
    },
    {
      name: "Currency",
      selector: (row) => row.currency,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
  ];
  const conditionalRowStyles = [
    {
      when: (row) => row.color,
      style: (row) => ({
        backgroundColor: row.color,
        color: row.color === "Black" ? "White" : "Black",
        fontSize: "1rem",
        fontWeight: "500",
      }),
    },
  ];

  return (
    <Fragment>
      <DataTable
        responsive
        title="Products List"
        data={apiData.products}
        columns={columns}
        conditionalRowStyles={conditionalRowStyles}
      />

      <Alert severity="success">
        All Products : {apiData.total_product_count}
      </Alert>
    </Fragment>
  );
};

export default Home;
