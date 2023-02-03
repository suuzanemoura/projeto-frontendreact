import React from "react";
import {
  Button,
  Filters,
  HeaderList,
  HeaderInfos,
  Input,
  ListProducts,
  Main,
  Products,
  Select,
  ShowProducts,
} from "./styled";

const CategoryPage = ({ arrayProducts, productsRender, titleCategory }) => {
  return (
    <Main>
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
            <HeaderInfos>
              <h2>{titleCategory}</h2>
              <p>
                <strong>{arrayProducts.length}</strong> produtos encontrados
              </p>
            </HeaderInfos>
            <Select>
              <option value="">Ordenar por:</option>
              <option value="lowest-price">Menor Preço</option>
              <option value="biggest-price">Maior Preço</option>
            </Select>
          </HeaderList>
          <Products>{productsRender()}</Products>
        </ListProducts>
      </ShowProducts>
    </Main>
  );
};

export default CategoryPage;
