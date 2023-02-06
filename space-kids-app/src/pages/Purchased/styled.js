import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LilacBox = styled.div`
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e2daeb;
  margin: 4rem 2rem;
  padding: 3rem 4rem;
  text-align: center;
  gap: 1rem;
  color: #301e4e;

  h2 {
    text-transform: uppercase;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const CheckIcon = styled(AiFillCheckCircle)`
  font-size: 3rem;
  color: #4c346b;
`;

export const Astronaut = styled.img`
  width: 15rem;
`;
