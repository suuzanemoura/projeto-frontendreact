import React from "react";
import { Button, Card, ProductImage } from "./styled";
import { FiShoppingBag } from "react-icons/fi";

const ProductCard = ({ product, addProductCart, setCartIsOpen }) => {
  return (
    <Card key={product.key}>
      <ProductImage src={product.imageUrl} alt={product.imageAlt} />
      <h2>{product.name}</h2>
      <h1>R$ {product.value.toFixed(2).replace(".", ",")}</h1>
      <p>Ou em 3x de {(product.value / 3).toFixed(2).replace(".", ",")}</p>
      <Button
        onClick={() => {
          addProductCart(product);
          setCartIsOpen("0");
        }}
      >
        <FiShoppingBag /> Adicionar
      </Button>
    </Card>
  );
};

export default ProductCard;
