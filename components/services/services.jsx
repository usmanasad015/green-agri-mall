import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
// import setelliteSensing from "../../public/home/setelliteSensing.jpg";
import setelliteSensing_new from "../../public/home/setelliteSensing_new.jpg";
// import setelliteSensing from "../../public/home/setellite_sensing.jpg";
// import History from "../../public/about/History.webp";
// import Services_We_Provide from "../../public/home/Services_We_Provide.jpg";
// import ImgOverlay from "../imageOverlay/ImageOverlay";
// import AboutImage from "../../public/about/Sky_Closeup_Ear_botany_501921_3840x2400.webp";
// import Title from "../Title";
// import Card from "../customCards/CustomCards";
// import useWindowDimensions from "../hooks/useWindowDimensions";
// import tractor from "../../public/tractor.png";
// import growthImage from "../../public/growthImage.png";
// import Phygital_Services from "../../public/home/Phygital_Services.jpg";
// import Phygital1 from "../../public/home/phygital1.jpg";
// import mainImage from "../../public/conceptSection/mainImage.png";

const About = () => {
  return (
    <div id="concept">
      {/* <ImgOverlay
        image={Services_We_Provide}
        height="100%"
        titlePartOne="Services"
        titlePartTwo="We Provide"
      /> */}
      <br /> <br />
      <Box id="">
        <Container className="">
          {/* ------------- Satellite Sensing ------------- */}
          <Row className="align-items-center ">
            <Col md={8} lg={8} className="order-md-1 order-2">
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                className="mb-0"
                src={setelliteSensing_new}
                alt="Main"
              />
            </Col>
            <Col md={4} lg={4} className="order-md-2 order-1">
              <Typography
                fontFamily="Arial"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Satellite Sensing
              </Typography>

              <Typography
                fontFamily="Arial"
                component="ul"
                style={{
                  paddingLeft: "20px",
                  margin: "0",
                  listStyleType: "disc",
                }}
              >
                <li style={{ marginBottom: "12px" }}>
                  Enables continuous, real-time monitoring of farm conditions
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Allowing farmers to track crop health, soil moisture, and
                  other vital metrics remotely
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Provides accurate data for efficient use of resources (water,
                  fertilizers), reducing waste and improving yields
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Reduce agriculture expenses and achieve operational excellence
                  based on data
                </li>
              </Typography>
            </Col>
          </Row>
          {/* ---------------- Produce Off take ----------------  */}
          {/* <Row className="align-items-center mt-5">
            <Col md={8} lg={8} className="order-md-2 order-2">
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                className="mb-0"
                src={setelliteSensing}
                alt="Main"
              />
            </Col>
            <Col md={4} lg={4} className="order-md-1 order-1">
              <Typography
                fontFamily="Arial"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Produce Offtake
              </Typography>

              <Typography
                fontFamily="Arial"
                component="ul"
                style={{
                  paddingLeft: "20px",
                  margin: "0",
                  listStyleType: "disc",
                }}
              >
                <li style={{ marginBottom: "12px" }}>
                  Access to the best agricultural practices and training to
                  increase crop yield and quality
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Reliable direct platform for farmers to sell produce
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Provides farmers with better prices for their crops
                </li>
              </Typography>
            </Col>
          </Row> */}
        </Container>
      </Box>
    </div>
  );
};

export default About;
