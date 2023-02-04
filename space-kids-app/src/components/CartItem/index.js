import React from "react";
import { IoIosClose } from "react-icons/io";
import { Card, ProductImage, Button } from "./styled";

const CartItem = ({ product }) => {
  console.log(product);

  return (
    <Card key={product.key}>
      <ProductImage src={product.imageUrl} alt={product.imageAlt} />
      <h2>{product.name}</h2>
      <h1>R$ {product.value.toFixed(2).replace(".", ",")}</h1>
      <p>Ou em 3x de {(product.value / 3).toFixed(2).replace(".", ",")}</p>
      <Button>Adicionar</Button>
    </Card>
  );
};

export default CartItem;
