import React from "react";

import Home from "../../pages/Home";
import CategoryPage from "../../pages/CategoryPage";
import Contact from "../../pages/ContactPage";
import Login from "../../pages/LoginPage";
import Register from "../../pages/RegisterPage";

import { Main } from "./styled";

const MainPage = ({ screen, productsRender, titleCategory }) => {
  //FUNÇÃO PARA MUDANÇA DE TELA
  const showScreen = () => {
    switch (screen) {
      case 1:
        return <Home productsRender={productsRender} />;
      case 2:
        return (
          <CategoryPage
            productsRender={productsRender}
            titleCategory={titleCategory}
          />
        );
      case 3:
        return <Contact />;
      case 4:
        return <Login />;
      case 5:
        return <Register />;
      default:
        return "Página não encontrada!";
    }
  };

  return <Main>{showScreen()}</Main>;
};

export default MainPage;
