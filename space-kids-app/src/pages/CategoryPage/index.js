import React from "react";
import { Main } from "./styled";
import ProductsContainer from "../../components/ProductsContainer";

const CategoryPage = ({
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
    <Main>
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
    </Main>
  );
};

export default CategoryPage;
