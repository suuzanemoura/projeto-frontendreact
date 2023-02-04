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

const Nav = ({
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
  cartProducts,
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

      <OptionsList>
        <li
          onClick={() => {
            handleArrayProducts(products);
            handleScreen(1);
            handleTitleCategory("Produtos");
            setLowestPrice(0);
            setBiggestPrice(1000);
            setOrdination("");
          }}
        >
          Início
        </li>
        <li
          onClick={() => {
            handleArrayProducts(accessoriesCategory);
            handleScreen(2);
            handleTitleCategory("Acessórios");
          }}
        >
          Acessórios
        </li>
        <li
          onClick={() => {
            handleArrayProducts(cushionsCategory);
            handleScreen(2);
            handleTitleCategory("Almofadas");
          }}
        >
          Almofadas
        </li>
        <li
          onClick={() => {
            handleArrayProducts(toysCategory);
            handleScreen(2);
            handleTitleCategory("Brinquedos");
          }}
        >
          Brinquedos
        </li>
        <li
          onClick={() => {
            handleScreen(3);
          }}
        >
          Contato
        </li>
      </OptionsList>

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
          <p>{cartProducts.length}</p>
        </Icon>
      </Icons>
    </NavBar>
  );
};

export default Nav;
