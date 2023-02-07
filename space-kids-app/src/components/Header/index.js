import React from "react";
import Nav from "../Nav";
import NavMobile from "../NavMobile";
import { HeaderContainer } from "./styled";

const Header = ({
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
  handleSearchByEnter,
  setLowestPrice,
  setBiggestPrice,
  setOrdination,
  setCartIsOpen,
  itemAmount,
}) => {
  return (
    <HeaderContainer>
      <Nav
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
      <NavMobile
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
    </HeaderContainer>
  );
};

export default Header;
