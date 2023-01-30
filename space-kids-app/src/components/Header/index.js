import React from "react";
import {
  HeaderContainer,
  LogoDiv,
  NavBar,
  OptionsList,
  Icons,
  Icon,
  Input,
  FormInput,
  SearchIcon,
} from "./styled";
import Logo from "../../imgs/SpaceKids_Logo.svg";
import { FiShoppingBag, FiUser } from "react-icons/fi";

const Header = ({
  products,
  productsRender,
  handleScreen,
  handleTitleCategory,
  accessoriesCategory,
  cushionsCategory,
  toysCategory,
}) => {
  return (
    <HeaderContainer>
      <NavBar>
        <a href="/">
          <LogoDiv src={Logo} alt="Logo Space Kids" />
        </a>

        <FormInput>
          <SearchIcon />
          <Input
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Buscar"
          />
        </FormInput>

        <OptionsList>
          <li
            onClick={() => {
              productsRender(products);
              handleScreen(1);
            }}
          >
            Início
          </li>
          <li
            onClick={() => {
              productsRender(accessoriesCategory);
              handleScreen(2);
              handleTitleCategory("Acessórios");
            }}
          >
            Acessórios
          </li>
          <li
            onClick={() => {
              productsRender(cushionsCategory);
              handleScreen(2);
              handleTitleCategory("Almofadas");
            }}
          >
            Almofadas
          </li>
          <li
            onClick={() => {
              productsRender(toysCategory);
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
          <Icon>
            <FiShoppingBag />
            <p>0</p>
          </Icon>
        </Icons>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
