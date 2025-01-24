import ImgOverlay from "../imageOverlay/ImageOverlay";
import Our_History from "../../public/about/Our_History.jpg";
import { Box, Grid, Typography } from "@mui/material";
import Title from "../Title";
import Card from "../customCards/CustomCards";
import useWindowDimensions from "../hooks/useWindowDimensions";
import site_image from "../../public/home/site_image.jpg";
// import History from "../../public/about/History.webp";
// import tractor from "../../public/tractor.png";
// import AboutImage from "../../public/about/Sky_Closeup_Ear_botany_501921_3840x2400.webp";

const About = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="about">
      <ImgOverlay
        image={Our_History}
        height={"300px"}
        titlePartOne={
          <span
            style={{
              fontFamily: "'Arial', Helvetica, Arial, sans-serif",
            }}
          >
            Our
          </span>
        }
        titlePartTwo={
          <span
            style={{
              fontFamily: "'Arial', Helvetica, Arial, sans-serif",
            }}
          >
            History
          </span>
        }
      />
      <Box id="">
        <Title title={"Home"}></Title>
        <Grid container mt="50px" alignItems="center" justifyContent="center">
          {/* {width >= 1500 ? <Grid lg={1} xl={2}></Grid> : null} */}
          <Grid
            item
            xs={12}
            lg={6}
            xl={width < 1800 ? 4 : 3}
            alignItems="flex-end"
            boarder="1 solid black"
            style={{
              // marginLeft: '-40px',
              display: "flex",
              justifyContent: width < 1200 ? "center" : "end",
            }}
          >
            <Card
              mainCardImage={site_image}
              mainCardImageHeight={width < 1200 ? "220px" : "600px"}
              mainCardMaxWidth={"1000px"}
              mainCardBoxShadow={"none"}
              mainCardHeight={width < 1200 ? "250px" : "600px"}
              mainCardMaxHeight={"600px"}
              mainCardBorderRadius={"15px"}
              mainCardWriteOnImage={null}
              basicCard={false}
            />
          </Grid>
          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
          <Grid
            item
            xs={width <= 800 ? 12 : 9}
            lg={5}
            xl={4}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              paddingLeft: "40px",
              paddingRight: "40px",
              marginTop: width < 1200 ? "30px" : "0px",
            }}
          >
            <Typography
              align="left"
              fontFamily="Arial"
              color="rgb(101,77,52)"
            ></Typography>
            <Typography
              variant="h1"
              align="left"
              fontSize={40}
              mb={3}
              fontFamily="Arial"
            >
              About Us
            </Typography>
            <Typography
              align="left"
              fontFamily="Arial"
              // mb={3}
              line-height="10px"
              wordSpacing="15px"
              textAlign={"justify"}
            >
              Green Agrimall, a subsidiary of the Green Pakistan Initiative
              (GPI) managed by the Pakistan Army, focuses on two primary
              missions: ensuring national food security and unlocking export
              potential in the agricultural sector. By implementing advanced
              farming practices and supporting local farmers, Green Agrimall
              aims to maintain a stable food supply for Pakistan's growing
              population.
              <br />
              <br />
              Additionally, it seeks to boost the country's economy by improving
              the quality of agricultural products and expanding access to
              global markets. Through these efforts, Green Agrimall plays a
              crucial role in enhancing Pakistan's agricultural landscape and
              economic growth.
              <br />
              <br />
            </Typography>
          </Grid>
          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
          {/* {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null} */}
        </Grid>
      </Box>
    </div>
  );
};

export default About;
