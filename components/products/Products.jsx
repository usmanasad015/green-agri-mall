import ImgOverlay from "../imageOverlay/ImageOverlay";
import { Container } from "react-bootstrap";
import { Grid, Stack, Typography } from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";
import ProductsImg from "../../public/home/Products.jpg";
import insecticide from "../../public/Icons/insecticides.webp";
import herbicide from "../../public/Icons/herbicides.webp";
import fungicide from "../../public/Icons/fungicides.webp";
import seed from "../../public/Icons/seed.webp";
import tractor_animated from "../../public/tractor_animated.png";
import ProductCategory from "./ProductCategory";
// import { LocalActivity } from "@mui/icons-material";
// import micron from "../../public/Icons/micronutrients.webp";
// import { enqueueSnackbar } from "notistack";
// import ProductCard from "./ProductCard";
// import productImage from "../../public/slider/ (3).webp";

const Products = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="products">
      <ImgOverlay
        image={ProductsImg}
        height="300px"
        titlePartOne={<span style={{ fontFamily: "'Arial', Helvetica, Arial, sans-serif" }}>PRODUCTS</span>}
        titlePartTwo=""
        fontFamily="Arial"
      />
      <Container>
        <Grid container justifyContent="center" mt="10px" p={5}>
          <Grid item xs={12} md={width < 1800 ? 10 : 7}>
            <Typography
              align="left"
              variant="h5"
              // fontFamily="none"
              style={{
                borderBottom: "1px solid rgb(101,77,52)",
                marginBottom: "5px",
                paddingBottom: "5px",
                fontFamily: "Arial",
              }}
            >
              <strong>PRODUCT CATEGORY</strong>
            </Typography>
          </Grid>
          <Grid container spacing={3} margin={5} justifyContent="center">
            <ProductCategory
              icon={seed}
              title={
                <span
                  style={{
                    fontFamily:
                      "'Arial', Helvetica, Arial, sans-serif",
                  }}
                >
                  Seeds
                </span>
              }
              id={1}
            />
            <ProductCategory
              icon={herbicide}
              title={
                <span
                  style={{
                    fontFamily:
                      "'Arial', Helvetica, Arial, sans-serif",
                  }}
                >
                  Pesticides
                </span>
              }
              id={3}
            />
            <ProductCategory
              icon={insecticide}
              title={
                <span
                  style={{
                    fontFamily:
                      "'Arial', Helvetica, Arial, sans-serif",
                  }}
                >
                  Fertilizers
                </span>
              }
              id={4}
            />
            <ProductCategory
              icon={tractor_animated}
              title={
                <span
                  style={{
                    fontFamily:
                      "'Arial', Helvetica, Arial, sans-serif",
                  }}
                >
                  Equipments
                </span>
              }
              id={5}
            />
            <ProductCategory
              icon={fungicide}
              title={
                <span
                  style={{
                    fontFamily:
                      "'Arial', Helvetica, Arial, sans-serif",
                  }}
                >
                  Fungicides
                </span>
              }
              id={2}
            />
          </Grid>

         
          <Grid item xs={12} md={width < 1800 ? 10 : 7}>
            <Stack
              direction="row-reverse"
              alignItems="center"
              justifyContent="center"
              mb={2}
              mt={2}
            ></Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
