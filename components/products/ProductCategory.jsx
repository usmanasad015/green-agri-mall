import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  // Grid,
  // CardMedia,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: 170,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  media: {
    height: "auto",
    paddingTop: "10%",
  },
});

const ProductCategory = ({ icon, title, id }) => {
  const classes = useStyles();

  return (
    <Button
      // disableRipple
      xs={6}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      margin={1}
      style={{
        display: "inline-block",
        width: "auto",
        alignContent: "space-around",
      }}
      sx={{
        display: "inline-block",
        width: "auto",
        alignContent: "space-around",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      // onClick={() => {
      //   console.log(`/products/${title}/${id}`);
      //   navigate(`/products/${title}/${id}`);
      // }}
    >
      <Card className={classes.root}>
        <CardContent>
          <img
            src={icon}
            width={"70px"}
            style={{ marginRight: "10px", marginTop: "1px" }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-around",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
};

export default ProductCategory;
