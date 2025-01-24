import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImgOverlay from '../imageOverlay/ImageOverlay';
import { Container } from 'react-bootstrap';
import { Grid, Typography } from '@mui/material';
import useWindowDimensions from '../hooks/useWindowDimensions';
import productImage from '../../public/slider/ (3).webp';
import ProductCard from './ProductCard';
import Header from '../header/Header';

const ProductList = () => {
  const { title, id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(products);
  }, [products]);
  const { width } = useWindowDimensions();

  return (
    <>
      <Header />
      <ImgOverlay image={productImage} height="300px" titlePartOne="PRODUCTS" titlePartTwo="" />
      <Container>
        <Grid container justifyContent="center" mt="10px" p={5}>
          <Grid item xs={12} md={width < 1800 ? 10 : 7}>
            <Typography
              align="left"
              variant="h5"
              // fontFamily="Poppins"
              style={{
                borderBottom: '1px solid rgb(101,77,52)',
                marginBottom: '5px',
                paddingBottom: '5px',
              }}
            >
              <strong>{title}</strong>
            </Typography>
          </Grid>
          <Grid
            container
            spacing={3}
            margin={5}
            justifyContent="center"
            // item
            // style={{
            //   display: 'flex',
            //   flexDirection: 'row',
            //   alignItems: 'center',
            //   justifyContent: 'center',
            // }}
          >
            {products.length !== 0 &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  imageUrl={product.pesticide_picture}
                  title={product.pesticide_name}
                  description={product.pesticide_about}
                  price={product.pesticide_price}
                  features={product.pesticide_features}
                />
              ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductList;
