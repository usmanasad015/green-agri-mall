import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  // CardMedia,
  Typography,
  Grid,
  Button,
  Modal,
  Box,
  Fade,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    paddingTop: "90%",
    margin: "20%",
  },
  modal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row-reverse",
    },

    alignItems: "start",
    justifyContent: "center",
    gap: "5%",

    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: 24,
    padding: "24px",
    maxWidth: "80%",
    maxHeight: "80%",
    overflow: "auto",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7%",
    position: "sticky",
    maxWidth: "200px",
    marginLeft: "50px",
  },
  modalImage: {},

  modalContent: {
    position: "relative",
  },
  bottomLeftTypography: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: "8px",
  },
});

const ProductCard = ({ imageUrl, title, description, price, features }) => {
  const classes = useStyles();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [formattedFeatures, setFeatures] = useState("");

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    console.log(features);
    if (features) setFeatures(features.replace(/•/g, "<br>•"));
  }, [features]);

  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
      <Card className={classes.root} style={{ height: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <CardMedia
            sx={{ display: flex }}
            className={classes.media}
            image={imageUrl ? imageUrl.replace('http://', 'https://') : null}
            title={title}
          /> */}
          <img
            style={{
              maxHeight: "20rem",
              objectFit: "contain",
              padding: "10px 0",
            }}
            src={imageUrl ? imageUrl.replace("http://", "https://") : null}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Rs. {price}
          </Typography>
          {showFullDescription ? (
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              {description.length > 30
                ? `${description.substring(0, 30)}...`
                : description}
            </Typography>
          )}
          <Button
            onClick={handleOpenModal}
            size="small"
            style={{ color: "#372d21" }}
          >
            View Details
          </Button>
        </CardContent>
      </Card>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className={classes.modal}
      >
        <Fade in={openModal} timeout={500}>
          <Box className={classes.paper}>
            <img
              style={{
                maxHeight: "20rem",
                objectFit: "contain",
                padding: "10px 0",
              }}
              src={imageUrl ? imageUrl.replace("http://", "https://") : null}
            />
            <span>
              <Typography
                variant="h3"
                id="modal-title"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                {title}
              </Typography>
              <br></br>
              <Typography variant="body1" id="modal-description">
                {description}
              </Typography>
              <Typography
                variant="body1"
                id="modal-description"
                dangerouslySetInnerHTML={{ __html: formattedFeatures }}
              />
            </span>
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
};

export default ProductCard;
