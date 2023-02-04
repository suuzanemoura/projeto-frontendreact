import React from "react";
import {
  Astronaut,
  Button,
  CartItens,
  CartWithItens,
  CloseIcon,
  EmptyCart,
  HeaderCart,
  SidebarCart,
  TotalAmount,
} from "./styled";
import Overlay from "../Overlay";
import AstronautCart from "../../assets/imgs/SpaceKids_Cart.svg";

const ShoppingCart = ({
  cartIsOpen,
  setCartIsOpen,
  cartProducts,
  cartItemRender,
}) => {
  return (
    <div>
      <SidebarCart cartIsOpen={cartIsOpen}>
        <HeaderCart>
          <CloseIcon onClick={() => setCartIsOpen("-100%")} />
          <h2>Carrinho de Compras</h2>
        </HeaderCart>
        <EmptyCart cartProducts={cartProducts}>
          <p>Carrinho de compras está vazio.</p>
          <Astronaut
            src={AstronautCart}
            alt="Astronauta dentro de um Carrinho de compras"
          />
        </EmptyCart>

        <CartWithItens cartProducts={cartProducts}>
          <CartItens>{cartItemRender()}</CartItens>
          <TotalAmount>
            <h1>Total:</h1> <h1>R$00,00</h1>
          </TotalAmount>
          <Button>Finalizar compra</Button>
          <p onClick={() => setCartIsOpen("-100%")}>Ver mais produtos</p>
        </CartWithItens>
      </SidebarCart>

      <Overlay cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
    </div>
  );
};

export default ShoppingCart;
