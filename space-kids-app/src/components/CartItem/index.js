import React from "react";
import {
  Card,
  ProductImage,
  CardInfos,
  NameItem,
  ValueItem,
  TrashIcon,
  AddIcon,
  RemoveIcon,
  Quantity,
  Input,
} from "./styled";

const CartItem = ({
  product,
  addProductCart,
  removeCartProduct,
  quantity,
  setQuantity,
  handleQuantity,
}) => {
  return (
    <Card key={product.key}>
      <ProductImage src={product.imageUrl} alt={product.imageAlt} />
      <CardInfos>
        <NameItem>
          <h5>{product.name}</h5>
          <TrashIcon
            onClick={() => {
              removeCartProduct(product);
              setQuantity(1);
            }}
          />
        </NameItem>
        <ValueItem>
          <Quantity>
            <RemoveIcon onClick={() => removeCartProduct(product)} />
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantity}
            />
            <AddIcon onClick={() => addProductCart(product)} />
          </Quantity>
          <h4>R$ {(product.value * quantity).toFixed(2).replace(".", ",")}</h4>
        </ValueItem>
      </CardInfos>
    </Card>
  );
};

export default CartItem;
