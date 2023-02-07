import React from "react";
import Logo from "../../assets/imgs/SpaceKids_Logo.svg";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import {
  LogoDiv,
  NavBar,
  OptionsList,
  Icons,
  Icon,
  Input,
  FormInput,
  SearchIcon,
} from "./styled";

const NavMobile = ({
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
    <NavBar>
      <LogoDiv
        src={Logo}
        alt="Logo Space Kids"
        onClick={() => {
          handleArrayProducts(products);
          handleScreen(1);
          handleTitleCategory("Produtos");
          setLowestPrice(0);
          setBiggestPrice(1000);
          setOrdination("");
        }}
      />

      <FormInput>
        <SearchIcon
          onClick={() => {
            handleTitleCategory("Resultado da pesquisa");
            handleArrayProducts(
              products.filter((product) => {
                return product.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
            );
            handleScreen(2);
            setSearch("");
            setLowestPrice(0);
            setBiggestPrice(1000);
            setOrdination("");
          }}
        />
        <Input
          autoComplete="off"
          type="search"
          name="search"
          placeholder="Buscar"
          value={search}
          onChange={handleSearch}
          onKeyUp={handleSearchByEnter}
        />
      </FormInput>

      <Icons>
        <Icon
          onClick={() => {
            handleScreen(4);
          }}
        >
          <FiUser />
        </Icon>
        <Icon onClick={() => setCartIsOpen("0")}>
          <FiShoppingBag />
          <p>{itemAmount}</p>
        </Icon>
      </Icons>
    </NavBar>
  );
};

export default NavMobile;
