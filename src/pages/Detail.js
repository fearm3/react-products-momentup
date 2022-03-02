import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { apiData } from "../utils/apiData";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { products } = apiData;

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line
    setData(products.find((item) => item.id == id));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line
  }, [id]);

  // console.log(data);

  const imgDetail = `/images/${data.image_name}.png`;
  // console.log(imgDetail);
  return (
    <Fragment>
      {loading ? (
        <div
          style={{ display: "grid", placeItems: "center", marginTop: "20rem" }}
        >
          <CircularProgress size={150} color="warning" />
        </div>
      ) : (
        <Card
          sx={{ maxWidth: 750 }}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            padding: "2rem",
          }}
        >
          <Avatar
            alt={data.image_name}
            src={imgDetail}
            sx={{ width: 250, height: 250 }}
            style={{ margin: "auto" }}
            // variant="square"
          />

          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Name : {data.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Category : {data.category}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Price : {data.price}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Currency : {data.currency}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </CardActions>
        </Card>
      )}
    </Fragment>
  );
};

export default Detail;
