import ImgOverlay from "../imageOverlay/ImageOverlay";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import mainImage from "../../public/conceptSection/mainImage.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import concept_image3 from "../../public/home/Concept_Plan3.jpg";
// import concept_image2 from "../../public/home/concept_image2.jpg";
// import Title from "../Title";
// import Card from "../customCards/CustomCards";
// import useWindowDimensions from "../hooks/useWindowDimensions";
// import History from "../../public/about/History.webp";
// import tractor from "../../public/tractor.png";
// import growthImage from "../../public/growthImage.png";
// import AboutImage from "../../public/about/Sky_Closeup_Ear_botany_501921_3840x2400.webp";

const About = () => {
  return (
    <div id="concept">
      <ImgOverlay
        image={concept_image3}
        height="100%"
        titlePartOne={<span style={{ fontFamily: "'Arial', Helvetica, Arial, sans-serif" }}>Concept</span>}
        titlePartTwo={<span style={{ fontFamily: "'Arial', Helvetica, Arial, sans-serif" }}>Plan</span>}
      />
      <Box id="">
        <Container className="mt-5">
          <Row className="align-items-center">
            <Col md={8} lg={8}>
              <img
                style={{ width: "100%" }}
                className="mb-0"
                src={mainImage}
                alt="Main"
              />
            </Col>

            <Col md={4} lg={4}>
              <Typography fontFamily="Arial">
                <p variant="h4" gutterBottom>
                  Green Agrimall offers top-quality seeds, fertilizers, and
                  pesticides, modern machines, tools for sale and rental,
                  advanced technologies like drones and satellite sensing, and
                  fuel solutions in collaboration with PSO to boost agricultural
                  efficiency.
                  <br /> <br />
                  Green Agrimall enhances agricultural knowledge through
                  CHOPALS, expert lectures at our training center, live sessions
                  on social media, and in-field training programs.
                  <br /> <br />
                  Green Agrimall's PHYGITAL farm advisory includes a call center
                  service, loyalty card programs, commodity buyback options, and
                  credit facilitation to support and empower farmers.
                </p>
              </Typography>
            </Col>
          </Row>
        </Container>
      </Box>
    </div>
  );
};

export default About;
