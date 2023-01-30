import React from "react";
import {
  Button,
  Filters,
  HeaderList,
  Input,
  ListProducts,
  Main,
  Products,
  ShowProducts,
} from "./styled";
import { Slideshow } from "../SlideShow";

const Home = ({ arrayProducts, productsRender }) => {
  return (
    <Main>
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
          <Products>{arrayProducts}</Products>
        </ListProducts>
      </ShowProducts>
    </Main>
  );
};

export default Home;
