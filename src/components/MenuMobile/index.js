import React from "react";
import {
  ArrowIcon,
  ButtonLogin,
  ButtonRegister,
  CloseIcon,
  HeaderMenu,
  Icon,
  Login,
  LogoDiv,
  OptionsList,
  SidebarMenu,
  UserArea,
  UserIcon,
} from "./styled";
import Overlay from "../Overlay";
import Logo from "../../assets/imgs/SpaceKids_Logo.svg";

const MenuMobile = ({
  products,
  handleArrayProducts,
  handleScreen,
  handleTitleCategory,
  accessoriesCategory,
  cushionsCategory,
  toysCategory,
  setLowestPrice,
  setBiggestPrice,
  setOrdination,
  menuMobileIsOpen,
  setMenuMobileIsOpen,
}) => {
  return (
    <div>
      <SidebarMenu menuMobileIsOpen={menuMobileIsOpen}>
        <CloseIcon onClick={() => setMenuMobileIsOpen("-120%")} />
        <HeaderMenu>
          <LogoDiv
            src={Logo}
            alt="Logo Space Kids"
            onClick={() => {
              handleScreen(1);
              setMenuMobileIsOpen("-120%");
            }}
          />
        </HeaderMenu>
        <UserArea>
          <Icon>
            <UserIcon />
          </Icon>
          <Login>
            <p>Olá, faça login ou cadastra-se.</p>
            <small>
              Encontre os produtos mais procurados da galáxia em um só lugar!
            </small>
          </Login>
          <ButtonLogin
            type="button"
            onClick={() => {
              handleScreen(4);
              setMenuMobileIsOpen("-120%");
            }}
          >
            Login
          </ButtonLogin>
          <ButtonRegister
            type="button"
            onClick={() => {
              handleScreen(5);
              setMenuMobileIsOpen("-120%");
            }}
          >
            Cadastre-se
          </ButtonRegister>
        </UserArea>
        <OptionsList>
          <li
            onClick={() => {
              setMenuMobileIsOpen("-120%");
              handleScreen(1);
              handleArrayProducts(products);
              handleTitleCategory("Produtos");
              setLowestPrice(0);
              setBiggestPrice(1000);
              setOrdination("");
            }}
          >
            Início <ArrowIcon />
          </li>
          <li
            onClick={() => {
              handleArrayProducts(accessoriesCategory);
              handleScreen(2);
              handleTitleCategory("Acessórios");
              setLowestPrice(0);
              setBiggestPrice(1000);
              setOrdination("");
              setMenuMobileIsOpen("-120%");
            }}
          >
            Acessórios <ArrowIcon />
          </li>
          <li
            onClick={() => {
              handleArrayProducts(cushionsCategory);
              handleScreen(2);
              handleTitleCategory("Almofadas");
              setLowestPrice(0);
              setBiggestPrice(1000);
              setOrdination("");
              setMenuMobileIsOpen("-120%");
            }}
          >
            Almofadas <ArrowIcon />
          </li>
          <li
            onClick={() => {
              handleArrayProducts(toysCategory);
              handleScreen(2);
              handleTitleCategory("Brinquedos");
              setMenuMobileIsOpen("-120%");
              setLowestPrice(0);
              setBiggestPrice(1000);
              setOrdination("");
            }}
          >
            Brinquedos <ArrowIcon />
          </li>
          <li
            onClick={() => {
              handleScreen(3);
              setMenuMobileIsOpen("-120%");
            }}
          >
            Contato <ArrowIcon />
          </li>
        </OptionsList>
      </SidebarMenu>
      <Overlay
        menuMobileIsOpen={menuMobileIsOpen}
        setMenuMobileIsOpen={setMenuMobileIsOpen}
      />
    </div>
  );
};

export default MenuMobile;
