import { Box, Button, Grid, Typography } from "@mui/material";
import CustomCarousel from "../customCarousel/CustomCarousel";
import Header from "../header/Header";
import GrowthPlan from "../growthPlan/growthPlan";
import ScrollToTop from "../ScrollToTop";
import About from "../about/About";
import Products from "../products/Products";
import Footer from "../footer/Footer";
import Concept from "../conceptSection/conceptSection";
import Services from "../services/services";
import ModernMachine from "../modernMachine/modernMachine";
// import Chairman from "../../public/Chairman.png";
// import TKV from "../../public/TKV.png";
// import {  useState } from "react";
// import Card from "../customCards/CustomCards";
// import Title from "../Title";
// import useWindowDimensions from "../hooks/useWindowDimensions";

const Home = () => {
  // const { width } = useWindowDimensions();
  // const [testNo, setTestNo] = useState(0);

  // const [testimonial, setTestimonial] = useState({
  //   id: null,
  //   link: "",
  //   heading: "",
  //   description: "",
  // });

  // const renderListItem = (icon, text) => (
  //   <Box display="flex" mt="20px" mb="15px">
  //     {icon}
  //     <Typography
  //       align="left"
  //       fontFamily="Arial"
  //       color="text.secondary"
  //       textAlign="justify"
  //     >
  //       {text}
  //     </Typography>
  //   </Box>
  // );

  return (
    <>
      <Header home={true} />
      <CustomCarousel />
      <Box></Box>
      <Concept />
      <ModernMachine />
      <Services />
      <About id="about" />
      <GrowthPlan />
      <Products id="products" />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
