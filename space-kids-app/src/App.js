import React, { useState } from "react";
import { GlobalStyled } from "./GlobalStyle";
import styled from "styled-components";

//import components
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import ProductCard from "./components/ProductCard";
import Sidebar from "./components/ShoppingCart";
import Footer from "./components/Footer";

//import products
import { products } from "./assets/products.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const App = () => {
  //ESTADO ARRAY DE PRODUTOS
  const [arrayProducts, setArrayProducts] = useState(products);
  const handleArrayProducts = (array) => setArrayProducts(array);

  //ESTADO PARA TÍTULO CATEGORYPAGE
  const [titleCategory, setTitleCategory] = useState("");
  const handleTitleCategory = (title) => setTitleCategory(title);

  //ESTADO PARA MUDANÇA DE TELA
  const [screen, setScreen] = useState(1);
  const handleScreen = (number) => setScreen(number);

  //ESTADO PARA BUSCA PELO INPUT
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchByEnter = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      handleTitleCategory("Resultado da pesquisa");
      handleArrayProducts(
        products.filter((product) => {
          return product.name.toLowerCase().includes(search.toLowerCase());
        })
      );
      handleScreen(2);
      setSearch("");
    }
  };

  //ESTADO PARA OS FILTROS
  const [lowestPrice, setLowestPrice] = useState(0);
  const [biggestPrice, setBiggestPrice] = useState(550);
  const [ordination, setOrdination] = useState("");

  //FUNÇÃO PARA RENDERIZAR PRODUTOS
  const productsRender = () =>
    arrayProducts.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });

  //FUNÇÃO PARA FILTRAR AS CATEGORIAS PARA HEADER E FOOTER
  const accessoriesCategory = products.filter((product) => {
    return product.category === "Acessórios";
  });

  const cushionsCategory = products.filter((product) => {
    return product.category === "Almofadas";
  });

  const toysCategory = products.filter((product) => {
    return product.category === "Brinquedos";
  });

  return (
    <Container>
      <GlobalStyled />
      <Header
        products={products}
        handleArrayProducts={handleArrayProducts}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        accessoriesCategory={accessoriesCategory}
        cushionsCategory={cushionsCategory}
        toysCategory={toysCategory}
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleSearchByEnter={handleSearchByEnter}
      />
      {/* <Sidebar /> */}
      <MainPage
        screen={screen}
        handleScreen={handleScreen}
        arrayProducts={arrayProducts}
        productsRender={productsRender}
        titleCategory={titleCategory}
      />
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
