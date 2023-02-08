import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const NavBar = styled.nav`
  display: none;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    display: flex;
  }

  @media screen and (max-width: 319px) {
    gap: 0;
  }
`;

export const LogoDiv = styled.img`
  width: 10rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    width: 8rem;
  }

  @media screen and (max-width: 468px) {
    width: 6rem;
  }
`;

export const FormInput = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const Input = styled.input`
  width: 15rem;
  height: 2.5rem;
  padding: 1rem 2.5rem 1rem 1rem;
  background-color: rgba(76, 73, 74, 0.1);
  border-radius: 6px;
  border: none;

  :focus {
    outline: 0;
  }

  @media screen and (max-width: 640px) {
    width: 10rem;
  }

  @media screen and (max-width: 540px) {
    width: 8rem;
  }

  @media screen and (max-width: 380px) {
    width: 6.5rem;
    padding: 0.5rem 2rem 0.5rem 0.5rem;
  }
`;

export const SearchIcon = styled(BsSearch)`
  color: #1f1235;
  position: absolute;
  right: 1rem;

  @media screen and (max-width: 468px) {
    font-size: 1rem;
  }
`;

export const OptionsList = styled.ul`
  display: flex;
  list-style-type: none;
  height: 100%;
  align-items: center;
  gap: 2rem;

  li {
    color: #1f1235;
  }

  li:hover {
    color: #ff6e6c;
    cursor: pointer;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 319px) {
    gap: 0.2rem;
  }
`;

export const Icon = styled.div`
  font-size: 1.5rem;
  color: #1f1235;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  p {
    font-size: 1rem;
  }

  :hover {
    color: #ff6e6c;
    cursor: pointer;
  }

  @media screen and (max-width: 468px) {
    font-size: 1rem;
  }
`;
