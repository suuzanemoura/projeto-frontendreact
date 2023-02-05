import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export const Main = styled.main`
  width: 100%;
  height: 38rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.section`
  width: 25rem;
  height: 22rem;

  h1 {
    color: #301e4e;
    font-family: "Barriecito", cursive;
    text-transform: uppercase;
    text-decoration: 0.2rem solid underline #ff6e6c;
    text-underline-offset: 0.5rem;
    margin-bottom: 2rem;
    font-size: 3rem;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 25rem;
  height: 2.5rem;
  padding: 1rem 2.5rem 1rem 1rem;
  background-color: rgba(76, 73, 74, 0.1);
  border-radius: 6px;
  border: none;

  :focus {
    outline: 0;
  }
`;

export const EyeIcon = styled(AiOutlineEye)`
  color: #1f1235;
  position: absolute;
  right: 1rem;
  margin-top: 0.7rem;
`;

export const EyeInvisibleIcon = styled(AiOutlineEyeInvisible)`
  color: #1f1235;
  position: absolute;
  right: 1rem;
  margin-top: 0.7rem;
`;

export const Link = styled.a`
  color: #ff6e6c;
  text-decoration: none;
  font-size: 0.8rem;
  align-self: flex-end;
`;

export const Button = styled.button`
  width: 12rem;
  background-color: #301e4e;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #fff;
  border: none;
  font-size: 1.2rem;

  :hover {
    background-color: #463366;
  }

  :active {
    background-color: #67568c;
  }
`;
