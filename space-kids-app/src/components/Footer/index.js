import React from "react";
import {
  FooterStyled,
  NavBar,
  LogoDiv,
  OptionsList,
  InfoStore,
  Copyright,
  GitHubIcon,
  LinkedinIcon,
} from "./styled";
import Logo from "../../assets/imgs/SpaceKids_Logo_Branco.svg";

const Footer = ({
  productsRender,
  handleScreen,
  handleTitleCategory,
  accessoriesCategory,
  cushionsCategory,
  toysCategory,
}) => {
  return (
    <FooterStyled>
      <InfoStore>
        <LogoDiv src={Logo} alt="Logo Space Kids" />
        <NavBar>
          <OptionsList>
            <p>
              <strong>Loja</strong>
            </p>
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

          <OptionsList>
            <p>
              <strong>Space Kids</strong>
            </p>
            <li>Sobre nós</li>
            <li>Frete e Prazo de Entrega</li>
            <li>Perguntas frequentes</li>
            <li>Rastreamento de pedidos</li>
          </OptionsList>
        </NavBar>
      </InfoStore>
      <Copyright>
        <p>Space Kids © 2023. Todos os direitos reservados.</p>
        <p>Desenvolvido por Suzane Moura.</p>
        <div>
          <a href="https://github.com/suuzanemoura/" target={"blank"}>
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/in/suuzanemoura/" target={"blank"}>
            <LinkedinIcon />
          </a>
        </div>
      </Copyright>
    </FooterStyled>
  );
};

export default Footer;
