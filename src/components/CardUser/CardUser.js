import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardUser = ({ data }) => {
  
  return (
    
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardActionArea>
        <CardMedia component="img" image={data.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${data.precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.tipo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;
