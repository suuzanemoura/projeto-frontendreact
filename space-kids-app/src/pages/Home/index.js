import React from "react";
import { HomeContainer } from "./styled";
import { Slideshow } from "../../components/SlideShow/SlideShow";
import ProductsContainer from "../../components/ProductsContainer";

const Home = ({
  productsRender,
  titleCategory,
  lowestPrice,
  setLowestPrice,
  biggestPrice,
  setBiggestPrice,
  ordination,
  setOrdination,
  newArrayProducts,
}) => {
  return (
    <HomeContainer>
      <Slideshow />
      <ProductsContainer
        productsRender={productsRender}
        titleCategory={titleCategory}
        lowestPrice={lowestPrice}
        setLowestPrice={setLowestPrice}
        biggestPrice={biggestPrice}
        setBiggestPrice={setBiggestPrice}
        ordination={ordination}
        setOrdination={setOrdination}
        newArrayProducts={newArrayProducts}
      />
    </HomeContainer>
  );
};

export default Home;
