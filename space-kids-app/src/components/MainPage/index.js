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
} from "./styles";
import { Slideshow } from "../SlideShow";
import Product from "../Product";

const MainPage = ({ products }) => {
  return (
    <Main>
      <Slideshow />
      <ShowProducts>
        <Filters>
          <h2>Filtros</h2>
          <label>
            <p>Valor mínimo:</p>
            <Input type="number" placeholder="R$" />
          </label>
          <label>
            <p>Valor máximo:</p>
            <Input type="number" placeholder="R$" />
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
          <Products>
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </Products>
        </ListProducts>
      </ShowProducts>
    </Main>
  );
};

export default MainPage;
