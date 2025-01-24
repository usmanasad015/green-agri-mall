import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { makeStyles } from "@mui/styles";
import { Link as ScrollLink } from "react-scroll";
import agri_mall_logo_landing from "../../public/Eng_Logo_without_background.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from '@mui/material';
// import { Facebook, Telegram, YouTube } from "@mui/icons-material";
// import telephone from "./telephone.png";
// import agri from "../../public/4bAgri.png";
// import agri_mall_logo_landing from "../../public/agri_mall_logo_landing.png";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import PhoneIcon from "@mui/icons-material/Phone";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#372d21",
    color: "white",
    // padding: theme.spacing(4),
    // marginTop: theme.spacing(8),
    textAlign: "center",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // marginTop: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#3aa8ff",
    },
  },
  icon: {
    color: "white",
    // marginRight: theme.spacing(1),
    verticalAlign: "middle",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const isLaptop = useMediaQuery("(min-width:1024px)");

  return (
    <Box component="footer" className={classes.footer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            className={classes.logo}
            src={agri_mall_logo_landing}
            alt="Agri Mall Logo"
            style={{ width: isLaptop ? "400px" : "-webkit-fill-available" }}
            // style={{width:"400px"}}
          />

          {/* <Typography variant="body1" className={classes.description}>
            Green, Innovation, Commercialization.
          </Typography> */}
          <Box className="{classes.textContainer} my-2">
            <a
              href="https://www.linkedin.com/company/greenagrimall"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className={classes.icon} />
            </a>
            <a
              href="https://www.facebook.com/greenagrimall.pk"
              className="mx-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className={classes.icon} />
            </a>
            <a
              href="https://www.youtube.com/@greenagrimallpk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className={classes.icon} />
            </a>
            <a
              href="https://www.instagram.com/greenagrimall.pk"
              target="_blank"
              className="mx-3"
              rel="noopener noreferrer"
            >
              <InstagramIcon className={classes.icon} />
            </a>
            <a
              href="https://www.tiktok.com/@greenagrimall.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icon} icon={faTiktok} />
            </a>
          </Box>
          <Typography
            variant="body2"
            className={classes.copyright}
            style={{ fontFamily: "Arial" }}
          >
            &copy; {new Date().getFullYear()} Green Agrimall. All rights
            reserved.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} style={{ alignSelf: "center" }}>
          <Typography
            variant="h4"
            className={classes.mainMenu}
            style={{ fontFamily: "Arial" }}
          >
            Main Menu
          </Typography>
          <Typography variant="body1" style={{ marginTop: "10px" }}>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={classes.link}
              style={{ cursor: "pointer", fontFamily: "Arial" }}
            >
              About Us
            </ScrollLink>
          </Typography>
          <Typography variant="body1" className="my-1">
            <ScrollLink
              to="products"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={classes.link}
              style={{ cursor: "pointer", fontFamily: "Arial" }}
            >
              Products
            </ScrollLink>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
