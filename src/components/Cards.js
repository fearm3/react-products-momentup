import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const Cards = ({ product }) => {
  const navigate = useNavigate();
  // console.log(product);
  const { name, price, category, currency, image_name, color, id } = product;

  return (
    <Card
      sx={{
        width: 300,
        margin: 3,
        background: color,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={`/images/${image_name}.png`}
          alt={image_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" color="orange">
            Name : {name}
          </Typography>
          <Typography variant="body2" color="orange">
            Price : {price}
          </Typography>
          <Typography variant="body2" color="orange">
            Category : {category}
          </Typography>
          <Typography variant="body2" color="orange">
            Currency : {currency}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => navigate(`detail/${id}`)}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
export default Cards;
