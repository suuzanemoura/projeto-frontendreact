import React, { useState } from "react";
import { GlobalStyled } from "./GlobalStyle";
import styled from "styled-components";

//import components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";
import Contact from "./components/Contact";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import Footer from "./components/Footer";
import Product from "./components/Product";

//import products
import { products } from "./products.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const App = () => {
  //FUNÇÃO PARA RENDERIZAR PRODUTOS NA TELA
  const [arrayProducts, setArrayProducts] = useState(
    products.map((product) => {
      return <Product key={product.id} product={product} />;
    })
  );

  const handleArrayProducts = (array) =>
    setArrayProducts(
      array.map((product) => {
        return <Product key={product.id} product={product} />;
      })
    );

  const productsRender = (array) => {
    handleArrayProducts(array);
  };

  //FUNÇÃO PARA FILTRAR
  const accessoriesCategory = products.filter((product) => {
    return product.category === "Acessórios";
  });

  const cushionsCategory = products.filter((product) => {
    return product.category === "Almofadas";
  });

  const toysCategory = products.filter((product) => {
    return product.category === "Brinquedos";
  });

  const [titleCategory, setTitleCategory] = useState("");
  const handleTitleCategory = (title) => setTitleCategory(title);

  //USE STATE PARA MUDANÇA DE TELA
  const [screen, setScreen] = useState(1);
  const handleScreen = (screen) => setScreen(screen);
  const showScreen = () => {
    switch (screen) {
      case 1:
        return (
          <Home
            products={products}
            arrayProducts={arrayProducts}
            productsRender={productsRender}
          />
        );
      case 2:
        return (
          <CategoryPage
            products={products}
            arrayProducts={arrayProducts}
            productsRender={productsRender}
            titleCategory={titleCategory}
          />
        );
      case 3:
        return <Contact />;
      case 4:
        return <Login />;
      case 5:
        return <Register />;
      default:
        return "Página não encontrada!";
    }
  };

  return (
    <Container>
      <GlobalStyled />
      <Header
        products={products}
        productsRender={productsRender}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        accessoriesCategory={accessoriesCategory}
        cushionsCategory={cushionsCategory}
        toysCategory={toysCategory}
      />
      {/* <Sidebar /> */}
      {showScreen()}
      <Footer
        productsRender={productsRender}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        accessoriesCategory={accessoriesCategory}
        cushionsCategory={cushionsCategory}
        toysCategory={toysCategory}
      />
    </Container>
  );
};

export default App;
