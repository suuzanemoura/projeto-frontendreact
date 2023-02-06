import React from "react";

import Home from "../../pages/Home";
import CategoryPage from "../../pages/CategoryPage";
import Contact from "../../pages/ContactPage";
import Login from "../../pages/LoginPage";
import Register from "../../pages/RegisterPage";
import ProductDetails from "../../pages/ProductDetails";

import { Main } from "./styled";

const MainPage = ({
  screen,
  handleScreen,
  productsRender,
  titleCategory,
  lowestPrice,
  setLowestPrice,
  biggestPrice,
  setBiggestPrice,
  ordination,
  setOrdination,
  newArrayProducts,
  addProductCart,
  setCartIsOpen,
  productDetail,
}) => {
  //FUNÇÃO PARA MUDANÇA DE TELA

  console.log(screen);

  const showScreen = () => {
    if (
      screen === 1 ||
      screen === 2 ||
      screen === 3 ||
      screen === 4 ||
      screen === 5 ||
      screen === 6
    ) {
      window.scrollTo({
        top: 0,
      });
    }

    switch (screen) {
      case 1:
        return (
          <Home
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
        );
      case 2:
        return (
          <CategoryPage
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
        );
      case 3:
        return <Contact />;
      case 4:
        return <Login handleScreen={handleScreen} />;
      case 5:
        return <Register handleScreen={handleScreen} />;
      case 6:
        return (
          <ProductDetails
            addProductCart={addProductCart}
            setCartIsOpen={setCartIsOpen}
            productDetail={productDetail}
          />
        );
      default:
        return "Página não encontrada!";
    }
  };

  return <Main>{showScreen()}</Main>;
};

export default MainPage;
