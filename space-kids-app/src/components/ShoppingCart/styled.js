import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

export const SidebarCart = styled.div`
  top: 0;
  right: ${(props) => props.cartIsOpen};
  width: 30vw;
  background-color: #fff;
  border-radius: 1rem 0 0 1rem;
  transition: all 0.4s ease-in-out;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 20000;
  position: fixed;
  display: block;
  height: 100vh;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.55);
  color: #1f1235;
  padding: 1.5rem;
`;

export const HeaderCart = styled.header`
  display: flex;
  gap: 1rem;

  h2 {
    font-family: "Barriecito", cursive;
    text-transform: uppercase;
    text-decoration: 0.2rem solid underline #ff6e6c;
    text-underline-offset: 0.4rem;
  }
`;

export const CloseIcon = styled(IoIosClose)`
  font-size: 2.5rem;

  :hover {
    color: #ff6e6c;
  }
`;

export const EmptyCart = styled.div`
  display: ${(props) => (props.cartProducts.length === 0 ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 90%;
  margin-top: 2rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  p {
    width: 80%;
    height: 2.5rem;
    padding: 1rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Astronaut = styled.img`
  width: 15rem;
`;

export const CartWithItens = styled.div`
  display: ${(props) => (props.cartProducts.length === 0 ? "none" : "flex")};
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem;
  height: 100%;
  align-items: center;

  p {
    color: #ff6e6c;
    font-size: 0.85rem;
    margin: 0.5rem;
    cursor: pointer;
  }
`;

export const CartItens = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 0;
  gap: 0.75rem;
  margin-top: 1rem;
  overflow-y: auto;
  height: 74%;
`;

export const TotalAmount = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #301e4e;
  border-radius: 0.75rem;
  padding: 0.5rem;
  color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;

  :hover {
    background-color: #463366;
  }

  :active {
    background-color: #67568c;
  }
`;
