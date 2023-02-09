import React, { useState, useEffect } from "react";
import { GlobalStyled } from "./GlobalStyle";
import styled from "styled-components";

import Header from "./components/Header";
import MenuMobile from "./components/MenuMobile";
import MainPage from "./components/MainPage";
import ProductCard from "./components/ProductCard";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";

import { products } from "./assets/products.js";
import CartItem from "./components/CartItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [screen, setScreen] = useState(1);
  const [titleCategory, setTitleCategory] = useState("Produtos");
  const [arrayProducts, setArrayProducts] = useState(products);
  const [productDetail, setProductDetail] = useState("");

  const [lowestPrice, setLowestPrice] = useState(0);
  const [biggestPrice, setBiggestPrice] = useState(1000);
  const [ordination, setOrdination] = useState("");
  const [search, setSearch] = useState("");

  const [cartIsOpen, setCartIsOpen] = useState("-120%");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [total, setTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState("-120%");

  const handleScreen = (number) => setScreen(number);
  const handleTitleCategory = (title) => setTitleCategory(title);
  const handleArrayProducts = (array) => setArrayProducts(array);
  const handleSearch = (e) => setSearch(e.target.value);
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

  useEffect(() => {
    const totalAmount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.value * currentItem.amount;
    }, 0);
    setTotal(totalAmount);
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

  const newArrayProducts = [
    ...arrayProducts.filter((product) => {
      return product.value <= biggestPrice && product.value >= lowestPrice;
    }),
  ];

  const accessoriesCategory = products.filter((product) => {
    return product.category === "Acessórios";
  });

  const cushionsCategory = products.filter((product) => {
    return product.category === "Almofadas";
  });

  const toysCategory = products.filter((product) => {
    return product.category === "Brinquedos";
  });

  const addProductToDetails = (product) => {
    setProductDetail(product);
  };

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
            handleScreen={handleScreen}
            addProductToDetails={addProductToDetails}
          />
        );
      });

  const addProductCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

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

  const removeCartProduct = (product) => {
    const filteredList = cart.filter((item) => item !== product);
    setCart(filteredList);
  };

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
        setMenuMobileIsOpen={setMenuMobileIsOpen}
      />
      <ShoppingCart
        handleScreen={handleScreen}
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
        cart={cart}
        setCart={setCart}
        cartItemRender={cartItemRender}
        total={total}
      />
      <MenuMobile
        products={products}
        handleArrayProducts={handleArrayProducts}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        accessoriesCategory={accessoriesCategory}
        cushionsCategory={cushionsCategory}
        toysCategory={toysCategory}
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
        menuMobileIsOpen={menuMobileIsOpen}
        setMenuMobileIsOpen={setMenuMobileIsOpen}
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
        addProductCart={addProductCart}
        setCartIsOpen={setCartIsOpen}
        productDetail={productDetail}
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
