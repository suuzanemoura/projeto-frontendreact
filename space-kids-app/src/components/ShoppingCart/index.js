import React from "react";
import {
  Astronaut,
  CartWithItens,
  CloseIcon,
  EmptyCart,
  HeaderCart,
  SidebarCart,
} from "./styled";
import Overlay from "../Overlay";
import AstronautCart from "../../assets/imgs/SpaceKids_Cart.svg";
import CartItem from "../CartItem";

const ShoppingCart = ({ cartIsOpen, setCartIsOpen, cartArray }) => {
  //FUNÇÃO PARA RENDERIZAR PRODUTOS NO CARRINHO
  const cartItemRender = () => {
    cartArray.map((product) => {
      return <CartItem key={product.id} product={product} />;
    });
  };

  return (
    <div>
      <SidebarCart cartIsOpen={cartIsOpen}>
        <HeaderCart>
          <CloseIcon onClick={() => setCartIsOpen("-100%")} />
          <h2>Carrinho de Compras</h2>
        </HeaderCart>
        <EmptyCart cartArray={cartArray}>
          <p>Carrinho de compras está vazio.</p>
          <Astronaut
            src={AstronautCart}
            alt="Astronauta dentro de um Carrinho de compras"
          />
        </EmptyCart>

        <CartWithItens cartArray={cartArray}>
          {cartItemRender()}
          <h1>Total: R$00,00</h1>
          <div>
            <h3>Ver mais produtos</h3>
            <button>Finalizar compra</button>
          </div>
        </CartWithItens>
      </SidebarCart>

      <Overlay cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
    </div>
  );
};

export default ShoppingCart;
