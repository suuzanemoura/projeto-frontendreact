import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Astronaut, CheckIcon, Container, LilacBox, Main } from "./styled";
import AstronautPurchased from "../../assets/imgs/SpaceKids_Purchased.svg";

const Purchased = ({
  products,
  handleArrayProducts,
  handleScreen,
  handleTitleCategory,
  accessoriesCategory,
  cushionsCategory,
  toysCategory,
  search,
  setSearch,
  handleSearch,
  setLowestPrice,
  setBiggestPrice,
  setOrdination,
  setCartIsOpen,
  itemAmount,
  setMenuMobileIsOpen,
}) => {
  return (
    <Container>
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
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
        setCartIsOpen={setCartIsOpen}
        itemAmount={itemAmount}
        setMenuMobileIsOpen={setMenuMobileIsOpen}
      />
      <Main>
        <LilacBox>
          <CheckIcon />
          <h2>Compra Finalizada com Sucesso!</h2>

          <p>
            Parabéns! Sua compra foi finalizada com sucesso e em breve os
            produtos mais procurados da galáxia estarão na sua casa!
          </p>
          <Astronaut
            src={AstronautPurchased}
            alt="Astronauta sentado com um entre as pernas, acenando, com um balãozinho de fala com um coração dentro."
          />
        </LilacBox>
      </Main>
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

export default Purchased;
