import React from "react";
import Nav from "../Nav";
import { HeaderContainer } from "./styled";

const Header = ({
  products,
  handleArrayProducts,
  handleScreen,
  handleTitleCategory,
  accessoriesCategory,
  cushionsCategory,
  toysCategory,
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
      />
    </HeaderContainer>
  );
};

export default Header;
