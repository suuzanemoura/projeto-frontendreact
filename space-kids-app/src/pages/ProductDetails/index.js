import React from "react";
import { Button, Card, Container, ProductImage, ProductInfos } from "./styled";
import { FiShoppingBag } from "react-icons/fi";

const ProductDetails = ({ productDetail, addProductCart, setCartIsOpen }) => {
  return (
    <Container>
      <Card key={productDetail.key}>
        <ProductInfos>
          <h2>{productDetail.name}</h2>
          <h1>R$ {productDetail.value.toFixed(2).replace(".", ",")}</h1>
          <h4>
            Ou em 3x de {(productDetail.value / 3).toFixed(2).replace(".", ",")}
          </h4>
          <p>{productDetail.description}</p>
          <small>
            <strong>Tamanho:</strong> {productDetail.measure}
          </small>
          <small>
            <strong>Categoria:</strong> {productDetail.category}
          </small>
          <Button
            onClick={() => {
              addProductCart(productDetail, productDetail.id);
              setCartIsOpen("0");
            }}
          >
            <FiShoppingBag /> Adicionar
          </Button>
        </ProductInfos>
        <ProductImage
          src={productDetail.imageUrl}
          alt={productDetail.imageAlt}
        />
      </Card>
    </Container>
  );
};

export default ProductDetails;
