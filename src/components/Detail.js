import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import blazercoat from "./img/blazer-coat.jpg";
import { apiData } from "../api/apiData";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    setData(apiData.products.find((item) => item.id == id));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [id]);

  console.log(data);

  return (
    <>
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
          }}
        >
          <Avatar
            alt={data.image_name}
            src={data.image_name}
            sx={{ width: 150, height: 150 }}
            style={{ margin: "auto" }}
            variant="square"
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
    </>
  );
};

export default Detail;
