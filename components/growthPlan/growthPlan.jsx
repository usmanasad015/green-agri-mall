import ImgOverlay from "../imageOverlay/ImageOverlay";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import phase1 from "../../public/growthSection/Phase1.png";
import phase2 from "../../public/growthSection/Phase2.png";
import phase3 from "../../public/growthSection/Phase3.png";
import "../../src/index.css";
import Growth_Plan from "../../public/home/Growth_Plan.jpg";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";
// import History from "../../public/about/History.webp";
// import Card from "../customCards/CustomCards";
// import growth_image1 from "../../public/home/growth_image1.webp";
// import Title from "../Title";
// import useWindowDimensions from "../hooks/useWindowDimensions";
// import tractor from "../../public/tractor.png";
// import growthImage from "../../public/growthImage.png";
// import AboutImage from "../../public/about/Sky_Closeup_Ear_botany_501921_3840x2400.webp";

const growthPlan = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "16px",
    justifyContent: "space-around",
    alignItems: "stretch",
  };

  const cardStyle = {
    flex: 1,
    margin: "0 10px",
  };

  const cardActionAreaStyle = {
    cursor: "default",
    userSelect: "text",
  };

  const cardContentStyle = {
    userSelect: "text",
  };

  return (
    <div id="about">
      <ImgOverlay
        image={Growth_Plan}
        height={"100px"}
        titlePartOne={
          <span
            style={{
              fontFamily: "'Arial', Helvetica, Arial, sans-serif",
            }}
          >
            Growth
          </span>
        }
        titlePartTwo={
          <span
            style={{
              fontFamily: "'Arial', Helvetica, Arial, sans-serif",
            }}
          >
            Plan
          </span>
        }
      />

      <Box>
        <Container style={containerStyle} className="my-5">
          <Card style={cardStyle}>
            <CardActionArea style={cardActionAreaStyle} disableRipple>
              <CardMedia
                component="img"
                height="140"
                image={phase1}
                alt="Mega Green Agrimall"
              />
              <CardContent style={cardContentStyle}>
                <Typography
                  variant="h5"
                  fontFamily="Arial"
                  fontSize="1.2rem"
                  fontWeight="bold"
                >
                  Mega Green Agrimall at Marot, Cholistan
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontFamily="Arial"
                  fontSize="1rem"
                  component="div" 
                >
                  <ul style={{ lineHeight: "1.8", marginTop: "10px" }}>
                    <li>
                      The site will be ready by the end of May, providing modern
                      facilities to support local agriculture.
                    </li>
                    <li>
                      The inauguration is expected in July, featuring tours,
                      speeches, and showcasing innovative agricultural solutions.
                    </li>
                    <li>
                      Business activities will commence next week, creating a
                      hub for trading, networking, and accessing agricultural
                      supplies.
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={cardStyle}>
            <CardActionArea style={cardActionAreaStyle} disableRipple>
              <CardMedia
                component="img"
                height="140"
                image={phase2}
                alt="Green Agrimall Boost Punjab Agriculture"
              />
              <CardContent style={cardContentStyle}>
                <Typography
                  variant="h5"
                  fontFamily="Arial"
                  fontSize="1.2rem"
                  fontWeight="bold"
                >
                  Green Agrimall Boost Punjab Agriculture
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontFamily="Arial"
                  fontSize="1rem"
                  component="div" 
                >
                  <ul style={{ lineHeight: "1.8", marginTop: "10px" }}>
                    <li>We are launching 25 new sites across Punjab.</li>
                    <li>
                      Each site will be managed and operated under the Green
                      Agrimall brand.
                    </li>
                    <li>
                      These sites will offer advanced resources and services to
                      boost agricultural productivity and sustainability in
                      various regions.
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={cardStyle}>
            <CardActionArea style={cardActionAreaStyle} disableRipple>
              <CardMedia
                component="img"
                height="140"
                image={phase3}
                alt="Mega Sites Transform Agriculture"
              />
              <CardContent style={cardContentStyle}>
                <Typography
                  variant="h5"
                  fontFamily="Arial"
                  fontSize="1.2rem"
                  fontWeight="bold"
                >
                  Mega Sites Transform Agriculture
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontFamily="Arial"
                  fontSize="1rem"
                  component="div" 
                >
                  <ul style={{ lineHeight: "1.8", marginTop: "10px" }}>
                    <li>
                      The ambitious rollout of multiple new mega sites
                      (&gt;250) signifies a monumental leap forward in
                      agricultural development.
                    </li>
                    <li>
                      These sites, each exceeding 250 acres in size, represent a
                      bold endeavor to transform the agricultural landscape.
                    </li>
                    <li>
                      With state-of-the-art infrastructure and cutting-edge
                      technology, they promise to revolutionize farming
                      practices, enhance productivity, and ensure
                      sustainability.
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Box>
    </div>
  );
};

export default growthPlan;
