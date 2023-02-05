import React, { useState, useEffect } from "react";
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
  //ESTADO PARA MUDANÇA DE TELA
  const [screen, setScreen] = useState(1);
  const handleScreen = (number) => setScreen(number);

  //ESTADO PARA TÍTULO CATEGORYPAGE
  const [titleCategory, setTitleCategory] = useState("Produtos");
  const handleTitleCategory = (title) => setTitleCategory(title);

  //ESTADO ARRAY DE PRODUTOS
  const [arrayProducts, setArrayProducts] = useState(products);
  const handleArrayProducts = (array) => setArrayProducts(array);

  //ESTADO PARA OS FILTROS
  const [lowestPrice, setLowestPrice] = useState(0);
  const [biggestPrice, setBiggestPrice] = useState(1000);
  const [ordination, setOrdination] = useState("");

  //ESTADO PARA BUSCA PELO INPUT
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //ESTADO PARA ABRIR E FECHAR CARRINHO
  const [cartIsOpen, setCartIsOpen] = useState("-100%");

  //ESTADO PARA PRODUTOS NO CARRINHO
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  //ESTADO PARA VALOR TOTAL DO CARRINHO
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.value * currentItem.amount;
    }, 0);
    setTotal(totalAmount);
  }, [cart]);

  //ESTADO PARA TOTAL DE ITENS DO CARRINHO
  const [itemAmount, setItemAmount] = useState(0);
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

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
      setLowestPrice(0);
      setBiggestPrice(1000);
      setOrdination("");
    }
  };

  //ARRAY ATUALIZADO COM FILTRO DE PREÇO
  const newArrayProducts = [
    ...arrayProducts.filter((product) => {
      return product.value <= biggestPrice && product.value >= lowestPrice;
    }),
  ];

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

  //FUNÇÃO PARA ADICIONAR PRODUTO NO CARRINHO
  const addProductCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    //checar se o produto já existe no carrinho
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //FUNÇÃO PARA REMOVER PRODUTO NO CARRINHO
  const removeCartProduct = (product) => {
    const filteredList = cart.filter((item) => item !== product);
    setCart(filteredList);
  };

  //FUNÇÃO PARA DIMINUIR QUANTIDADE DE PRODUTO NO CARRINHO
  const removeCartItem = (product) => {
    if (product.amount > 1) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (product.amount < 2) {
      removeCartProduct(product);
    }
  };

  //FUNÇÃO PARA RENDERIZAR PRODUTOS NO CARRINHO
  const cartItemRender = () =>
    cart.map((product) => {
      return (
        <CartItem
          key={product.id}
          product={product}
          addProductCart={addProductCart}
          removeCartItem={removeCartItem}
          removeCartProduct={removeCartProduct}
        />
      );
    });

  //SALVAR CARRINHO COM LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

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
        itemAmount={itemAmount}
      />
      <ShoppingCart
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
        cart={cart}
        cartItemRender={cartItemRender}
        total={total}
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
        handleArrayProducts={handleArrayProducts}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        accessoriesCategory={accessoriesCategory}
        cushionsCategory={cushionsCategory}
        toysCategory={toysCategory}
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
      />
    </Container>
  );
};

export default App;
