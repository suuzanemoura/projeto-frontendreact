import React, { useState } from "react";
import { GlobalStyled } from "./GlobalStyle";
import styled from "styled-components";

//import components
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import ProductCard from "./components/ProductCard";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";

//import products
import { products } from "./assets/products.js";
import CartItem from "./components/CartItem";

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
  const [titleCategory, setTitleCategory] = useState("Produtos");
  const handleTitleCategory = (title) => setTitleCategory(title);

  //ESTADO PARA MUDANÇA DE TELA
  const [screen, setScreen] = useState(1);
  const handleScreen = (number) => setScreen(number);

  //ESTADO PARA ABRIR E FECHAR CARRINHO
  const [cartIsOpen, setCartIsOpen] = useState("-100%");

  //ESTADO PARA PRODUTOS NO CARRINHO
  const [cartProducts, setCartProducts] = useState([]);

  //ESTADO QUANTIDADE DE PRODUTO NO CARRINHO
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (e) => setQuantity(e.target.value);

  //FUNÇÃO PARA ADICIONAR PRODUTO NO CARRINHO
  const addProductCart = (product) => {
    const newCartProducts = [...cartProducts, product];
    setCartProducts(newCartProducts);
  };

  //FUNÇÃO PARA REMOVER PRODUTO NO CARRINHO
  const removeCartProduct = (product) => {
    const filteredList = cartProducts.filter((item) => item !== product);
    setCartProducts(filteredList);
  };

  //ESTADO PARA BUSCA PELO INPUT
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //FUNÇÃO PARA BUSCA PELO INPUT USANDO ENTER
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
  const [biggestPrice, setBiggestPrice] = useState(1000);
  const [ordination, setOrdination] = useState("");

  //ARRAY ATUALIZADO COM FILTRO DE PREÇO
  const newArrayProducts = [
    ...arrayProducts.filter((product) => {
      return product.value <= biggestPrice && product.value >= lowestPrice;
    }),
  ];

  //FUNÇÃO PARA RENDERIZAR PRODUTOS COM ORDENAÇÃO
  const productsRender = () =>
    newArrayProducts
      .sort((a, b) => {
        switch (ordination) {
          case "lowest-price":
            return a.value - b.value;
          case "biggest-price":
            return b.value - a.value;
          case "a-z":
            return a.name.localeCompare(b.name);
          case "z-a":
            return b.name.localeCompare(a.name);
          default:
            return arrayProducts;
        }
      })
      .map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            addProductCart={addProductCart}
            setCartIsOpen={setCartIsOpen}
          />
        );
      });

  //FUNÇÃO PARA RENDERIZAR PRODUTOS NO CARRINHO
  const cartItemRender = () =>
    cartProducts.map((product) => {
      return (
        <CartItem
          key={product.id}
          product={product}
          handleQuantity={handleQuantity}
          addProductCart={addProductCart}
          removeCartProduct={removeCartProduct}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      );
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
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
        setCartIsOpen={setCartIsOpen}
        cartProducts={cartProducts}
      />
      <ShoppingCart
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
        cartProducts={cartProducts}
        cartItemRender={cartItemRender}
      />
      <MainPage
        screen={screen}
        handleScreen={handleScreen}
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
