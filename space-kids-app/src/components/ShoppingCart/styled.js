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
  display: ${(props) => (props.cartArray.length === 0 ? "flex" : "none")};
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
  display: ${(props) => (props.cartArray.length === 0 ? "none" : "flex")};
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding: 1rem;
`;
