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
  filteredProductsBySearch,
  setSearch,
  handleSearch,
  searchByEnter,
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
            handleArrayProducts(filteredProductsBySearch);
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
          onKeyUp={searchByEnter}
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
            setLowestPrice(0);
            setBiggestPrice(1000);
            setOrdination("");
          }}
        >
          Acessórios
        </li>
        <li
          onClick={() => {
            handleArrayProducts(cushionsCategory);
            handleScreen(2);
            handleTitleCategory("Almofadas");
            setLowestPrice(0);
            setBiggestPrice(1000);
            setOrdination("");
          }}
        >
          Almofadas
        </li>
        <li
          onClick={() => {
            handleArrayProducts(toysCategory);
            handleScreen(2);
            handleTitleCategory("Brinquedos");
            setLowestPrice(0);
            setBiggestPrice(1000);
            setOrdination("");
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
          <p>{itemAmount}</p>
        </Icon>
      </Icons>
    </NavBar>
  );
};

export default Nav;
