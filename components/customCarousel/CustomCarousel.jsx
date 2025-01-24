import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { useState } from "react";
import React, { lazy, Suspense } from "react";
import BANNER_1 from "../../public/slider/ (1).webp";
import BANNER_3 from "../../public/slider/ (3).webp";
import BANNER_4 from "../../public/slider/ (4).webp";
import BANNER_5 from "../../public/slider/ (5).webp";
import BANNER_6 from "../../public/slider/ (6).webp";
import agri_mall_logo_landing from "../../public/Eng_Logo_without_background.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import { FacebookOutlined, LinkedIn } from "@mui/icons-material";
// import { createTheme } from "@mui/material/styles";
// import BANNER_11 from '../../public/slider/(1).jpeg';
// import agri from "../../public/4bAgri.png";
// import agri_mall_logo_landing from "../../public/agri_mall_logo_landing.png";
// import BANNER_2 from "../../public/slider/ (2).webp";

const useStyles = makeStyles(() => ({
  imageCover: {
    width: "-webkit-fill-available",
    height: "auto", // Maintains aspect ratio
  },
  root: {
    position: "relative",
    marginTop: "0px !important",
  },
  image: {
    height: "800px",
    "@media (max-width: 1800px)": {
      height: "750px",
    },
    objectFit: "cover",
  },

  animatedImages: {
    animation: "$kenburns 60s ease infinite",
    animationIterationCount: "infinite",
    WebkitAnimationDelay: "0s",
    animationDelay: "0s",
  },
  "@keyframes kenburns": {
    "0%": {
      WebkitTransform: "scale(1)",
      transform: "scale(1)",
    },
    "50%": {
      WebkitTransform: "scale(1.5)",
      transform: "scale(1.5)",
    },
    "51%": {
      WebkitTransform: "scale(1.5)",
      transform: "scale(1.5)",
    },
    to: {
      WebkitTransform: "scale(0)",
      transform: "scale(0)",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundImage:
      "linear-gradient(to bottom, rgb(75 75 68 / 38%), rgb(35 19 2));",
  },
  iconContainer: {
    position: "absolute",
    height: "100%",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    marginLeft: "55px",
    color: "white",

    "@media (max-width: 1199.5px)": {
      display: "none",
    },
  },
  titleContainer: {
    fontFamily: "'Arial', Helvetica, Arial, sans-serif !important",
    position: "absolute",
    height: "100%",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    marginLeft: "9%",
    color: "black",
    width: "54%",
    "@media (max-width: 1280px)": {
      width: "70%",
    },
    "@media (max-width: 600px)": {
      top: "2%",
      width: "85%",
    },
  },
  title: {
    fontFamily: "'Arial', Helvetica, Arial, sans-serif !important",
    fontSize: "40px",
    lineHeight: "50px",
    "@media (max-width: 1200px)": {
      fontSize: "40px",
      lineHeight: "52px",
    },
    "@media (max-width: 767px)": {
      fontSize: "28px",
      lineHeight: "35px",
      marginTop: "15px",
    },
  },
  description: {
    fontFamily: "Arial",
    // fontSize: '14px',
    color: "white",
    // lineHeight: '31px',
  },
  button: {
    background: "#fff!important",
    border: "2px solid #eef3f5!important",
    borderRadius: "20px 0!important",
    color: "#101010!important",
    fontSize: "12px!important",
    fontWeight: "400!important",
    lineHeight: "18px!important",
    padding: "14px 42px!important",
    textDecoration: "none",
    textTransform: "uppercase",
    "@media (max-width: 1200px)": {
      padding: "12px 20px!important",
    },
    "@media (max-width: 960px)": {
      padding: "12px 18px!important",
    },
  },
}));
const redirectToLinkedin = () => {
  window.location.href = "https://www.linkedin.com/company/fourbrothersgroup/";
};
const redirectToFB = () => {
  window.location.href = "https://www.facebook.com/TarzanMarkaz";
};

export default function CustomCarousel() {
  const classes = useStyles();
  const [selectedSlide, setSelectedSlide] = useState(0);
  const handleSlideChange = (index) => {
    setSelectedSlide(index);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box className={classes.root}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          stopOnHover={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          className={classes.carousel}
          interval={4000}
          onChange={handleSlideChange}
        >
          <div>
            <img
              alt=""
              src={BANNER_1}
              className={`${classes.image} ${selectedSlide === 0 ? classes.animatedImages : ""}`}
            />
          </div>
          {/* <div>
            <img
              alt=""
              src={BANNER_2}
              className={`${classes.image} ${selectedSlide === 1 ? classes.animatedImages : ''}`}
            />
          </div> */}

          {/* <div>
            <img
              alt=""
              src={BANNER_2}
              className={`${classes.image} ${selectedSlide === 1 ? classes.animatedImages : ""}`}
            />
          </div> */}

          <div>
            <img
              alt=""
              src={BANNER_3}
              className={`${classes.image} ${selectedSlide === 2 ? classes.animatedImages : ""}`}
            />
          </div>
          {/* <div>
            <img
              alt=""
              src={BANNER_5}
              className={`${classes.image} ${selectedSlide === 4 ? classes.animatedImages : ''}`}
            />
          </div> */}
          <div>
            <img
              alt=""
              src={BANNER_4}
              className={`${classes.image} ${selectedSlide === 3 ? classes.animatedImages : ""}`}
            />
          </div>
          <div>
            <img
              alt=""
              src={BANNER_5}
              className={`${classes.image} ${selectedSlide === 4 ? classes.animatedImages : ""}`}
            />
          </div>
          {/* <div>
            <img
              alt=""
              src={BANNER_9}
              className={`${classes.image} ${selectedSlide === 8 ? classes.animatedImages : ''}`}
            />
          </div> */}
          {/* <div>
            <img
              alt=""
              src={BANNER_10}
              className={`${classes.image} ${selectedSlide === 9 ? classes.animatedImages : ''}`}
            />
          </div> */}
          <div>
            <img
              alt=""
              src={BANNER_6}
              className={`${classes.image} ${selectedSlide === 5 ? classes.animatedImages : ""}`}
            />
          </div>
          {/* <div>
            <img
              alt=""
              src={BANNER_12}
              className={`${classes.image} ${selectedSlide === 11 ? classes.animatedImages : ''}`}
            />
          </div> */}
        </Carousel>
        <Box className={classes.overlay}></Box>
        <Box className={classes.iconContainer}>
          <a
            href="https://www.linkedin.com/company/greenagrimall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              style={{ color: "white" }}
            >
              <LinkedIn />
            </svg>
          </a>

          <br />

          <a
            href="https://www.facebook.com/greenagrimall.pk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              // onClick={redirectToFB}
              xmlns="http://www.w3.org/2000/svg"
              cursor={"pointer"}
              style={{ color: "white" }}
            >
              <FacebookOutlined />
            </svg>
          </a>

          <br />
          <span
            style={{
              color: "#fff",
              position: "relative",
              transform: "rotate(180deg)",
              lineHeight: 1,
              paddingTop: "0.5rem",
              whiteSpace: "nowrap",
              WebkitTransform: "rotate(180deg)",
              WebkitWritingMode: "vertical-rl",
              writingMode: "vertical-rl",
              margin: "5px",
              fontFamily: "Arial",
            }}
          >
            Follow us -{" "}
          </span>
        </Box>
        <Box className={classes.titleContainer}>
          <Box
            component="img"
            src={agri_mall_logo_landing}
            alt="Agri Mall Logo"
            className={classes.imageCover}
            style={{
              width: "100%",
              // height: "100%",
              // objectFit: "cover",
            }}
          />
          {/* <h1 className={classes.title} style={{ color: 'white', fontWeight: '800' }}>
            FOUR
            <br />
            <span
              style={{
                color: 'white',
                WebkitTextStroke: '1px',
                WebkitTextFillColor: 'transparent',
              }}
            >
              BROTHERS
            </span>
          </h1> */}
          <Typography
            variant="h7"
            ml={20}
            className={classes.description}
            style={{
              fontFamily: "'Arial'",
            }}
          >
            A vision to revolutionize, Pakistan’s agriculture landscape and
            maximize <br />
            agriculture output to its true potential
          </Typography>

          {/* <Button className={classes.button}>
            <Link to={'#about'} style={{ color: 'black' }}>
              {' '}
              Read More
            </Link>
            <span className="m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="10"
                viewBox="0 0 24 10"
                fill="none"
              >
                <path
                  d="M23.4133 3.6066L20.8333 0.999933C20.7714 0.937448 20.6976 0.887851 20.6164 0.854006C20.5351 0.82016 20.448 0.802734 20.36 0.802734C20.272 0.802734 20.1849 0.82016 20.1036 0.854006C20.0224 0.887851 19.9486 0.937448 19.8867 0.999933C19.7625 1.12484 19.6928 1.29381 19.6928 1.46993C19.6928 1.64606 19.7625 1.81502 19.8867 1.93993L22.26 4.33327H0.666667C0.489856 4.33327 0.320286 4.40351 0.195262 4.52853C0.0702377 4.65355 0 4.82312 0 4.99993C0 5.17674 0.0702377 5.34631 0.195262 5.47134C0.320286 5.59636 0.489856 5.6666 0.666667 5.6666H22.3L19.8867 8.07327C19.8242 8.13524 19.7746 8.20898 19.7407 8.29022C19.7069 8.37146 19.6895 8.45859 19.6895 8.5466C19.6895 8.63461 19.7069 8.72175 19.7407 8.80299C19.7746 8.88422 19.8242 8.95796 19.8867 9.01993C19.9486 9.08242 20.0224 9.13202 20.1036 9.16586C20.1849 9.19971 20.272 9.21713 20.36 9.21713C20.448 9.21713 20.5351 9.19971 20.6164 9.16586C20.6976 9.13202 20.7714 9.08242 20.8333 9.01993L23.4133 6.43327C23.7879 6.05827 23.9982 5.54994 23.9982 5.01993C23.9982 4.48993 23.7879 3.9816 23.4133 3.6066Z"
                  fill="#252D40"
                ></path>
              </svg>
            </span>
          </Button>  */}
        </Box>
      </Box>
    </>
  );
}
