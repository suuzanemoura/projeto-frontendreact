import React from "react";

import { Astronaut, CheckIcon, Container, LilacBox } from "./styled";
import AstronautPurchased from "../../assets/imgs/SpaceKids_Purchased.svg";

const Purchased = () => {
  return (
    <Container>
      <LilacBox>
        <CheckIcon />
        <h2>Compra Finalizada com Sucesso!</h2>

        <p>
          Parabéns! Sua compra foi finalizada com sucesso e em breve os produtos
          mais procurados da galáxia estarão na sua casa!
        </p>
        <Astronaut
          src={AstronautPurchased}
          alt="Astronauta sentado com um entre as pernas, acenando, com um balãozinho de fala com um coração dentro."
        />
      </LilacBox>
    </Container>
  );
};

export default Purchased;
