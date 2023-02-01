import React from "react";
import {
  Button,
  Filters,
  HeaderList,
  HomeContainer,
  Input,
  ListProducts,
  Products,
  ShowProducts,
} from "./styled";
import { Slideshow } from "../../components/SlideShow/SlideShow";

const Home = ({ productsRender }) => {
  return (
    <HomeContainer>
      <Slideshow />
      <ShowProducts>
        <Filters>
          <h2>Filtros</h2>
          <label htmlFor="lowest-price">
            <p>Valor mínimo:</p>
            <Input
              type="number"
              id="lowest-price"
              name="lowest-price"
              placeholder="R$"
            />
          </label>
          <label htmlFor="biggest-price">
            <p>Valor máximo:</p>
            <Input
              type="number"
              id="biggest-price"
              name="biggest-price"
              placeholder="R$"
            />
          </label>
          <Button>Limpar</Button>
        </Filters>
        <ListProducts>
          <HeaderList>
            <h2>Produtos</h2>
            <select>
              <option value="">Ordenar por:</option>
              <option value="lowest-price">Menor Preço</option>
              <option value="biggest-price">Maior Preço</option>
            </select>
          </HeaderList>
          <Products>{productsRender()}</Products>
        </ListProducts>
      </ShowProducts>
    </HomeContainer>
  );
};

export default Home;
