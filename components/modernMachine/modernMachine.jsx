import ImgOverlay from "../imageOverlay/ImageOverlay";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Phygital1 from "../../public/home/phygital1.jpg";
import drone_spray_new from "../../public/home/Drone_new.jpg";
import ModernFarmMachinery_new from "../../public/home/ModernFarmMachinery_new.jpg";
import Services_We_Provide from "../../public/home/Services_We_Provide.jpg";
import products_new from "../../public/home/products_new.jpg";

// import Title from "../Title";
// import Card from "../customCards/CustomCards";
// import useWindowDimensions from "../hooks/useWindowDimensions";
// import History from "../../public/about/History.webp";
// import tractor from "../../public/tractor.png";
// import growthImage from "../../public/growthImage.png";
// import farm_machine1 from "../../public/home/farm_machine1.jpg";
// import farm_machine2 from "../../public/home/farm_machine2.jpg";
// import farm_machine from "../../public/home/Modern_Farm_Machinery.jpg";
// import ModernFarmMachinery from "../../public/home/ModernFarmMachinery.jpg";
// import Phygital1_new from "../../public/home/phygital1.jpg";
// import drone_spray from "../../public/home/drone_spray.jpg";
// import Phygital_Services from "../../public/home/Phygital_Services.jpg";
// import mainImage from "../../public/conceptSection/mainImage.png";
// import AboutImage from "../../public/about/Sky_Closeup_Ear_botany_501921_3840x2400.webp";

const About = () => {
  return (
    <div id="concept">
      <ImgOverlay
        image={Services_We_Provide}
        height="100%"
        titlePartOne={
          <span
            style={{
              fontFamily: "'Arial', Helvetica, Arial, sans-serif",
            }}
          >
            Services
          </span>
        }
        titlePartTwo={
          <span
            style={{
              fontFamily: "'Arial', Helvetica, Arial, sans-serif",
            }}
          >
            We Provide
          </span>
        }
        style={{ objectFit: "cover" }}
      />

      <Box id="">
        <Container className="mt-5">
          {/* SEED, PESTICIDE, AND FERTILIZER */}
          <Row className="align-items-center mt-5 mb-5">
            <Col md={8} lg={8} className="order-2 order-md-1">
              <img
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "16px",
                }}
                className="mb-0"
                src={products_new}
                alt="Products"
              />
            </Col>

            <Col md={4} lg={4} className="order-1 order-md-2">
              <Typography
                fontFamily="Arial"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                SEED, PESTICIDE, AND FERTILIZER
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
                  All fertilizers available at control prices
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Special discounts on seed and agro-chemicals
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Contact now with our sales rep for registration and booking
                </li>
              </Typography>
            </Col>
          </Row>
          {/* ------------- Drone ------------- */}
          <Row className="align-items-center mt-5 mb-5">
            <Col md={4} lg={4}>
              <Typography
                fontFamily="Arial"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                DRONE SPRAY
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
                  Covers 3 acres in just 15 minutes.
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Precision spray technology ensures superior pest control.
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Effective solution to address labor shortages.
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Reaches remote and uneven terrains easily.
                </li>
              </Typography>
            </Col>

            <Col md={8} lg={8}>
              <img
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  // marginBottom: "16px",
                }}
                className="mb-0"
                src={drone_spray_new}
                alt="drone spray"
              />
            </Col>
          </Row>

          <Row className="align-items-center ">
            <Col md={8} lg={8}  className="order-2 order-md-1">
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                className="mb-0"
                src={Phygital1}
                alt="Main"
              />
            </Col>
            <Col md={4} lg={4}  className="order-1 order-md-2">
              <Typography
                fontFamily="Arial"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Phygital Services
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
                  Field training programs for the farming community
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Digital advisory services provide farmers with real-time
                  insights on weather, pest control, and market prices
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Loyalty programs for registered farmers
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Expert lectures for uplifting the knowledge base of farmers in
                  Green Agrimall's dedicated training centers
                </li>
                <li>Expert lectures via Green Agrimall social media handles</li>
              </Typography>
            </Col>
          </Row>
          <br /> <br />
          {/* ------------- Modern Farm Machinery -------------*/}
          <Row className="align-items-center">
            <Col md={4} lg={4} className="order-md-1 order-2">
              <Typography
                fontFamily="Arial"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Modern Machines
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
                  Enables faster planting, harvesting, and processing, boosting
                  overall farm output.
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Digital advisory services provide farmers with real-time
                  insights on weather, pest control, and market prices.
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Consistent planting and harvesting enhance crop uniformity,
                  leading to higher-quality produce.
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Effective solution to address labor shortages.
                </li>
              </Typography>
            </Col>

            <Col md={8} lg={8} className="order-md-1 order-2">
              <img
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
                className="mb-0"
                src={ModernFarmMachinery_new}
                alt="Modern Farm Machinery"
              />
            </Col>
          </Row>
        </Container>
      </Box>
    </div>
  );
};

export default About;
