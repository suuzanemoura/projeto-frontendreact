import styled from "styled-components";

export const FiltersContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 15vw;
  padding: 1rem 2rem 1rem 1rem;

  h2 {
    color: #301e4e;
    font-family: "Barrio", cursive;
    text-decoration: 0.2rem solid underline #ff6e6c;
    text-underline-offset: 0.5rem;
    margin-bottom: 2rem;
  }
`;

export const Input = styled.input`
  width: 10rem;
  border: #301e4e 1px solid;
  margin-bottom: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
`;

export const Button = styled.button`
  width: 10rem;
  background-color: #301e4e;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #fff;
  margin: 0.5rem 0;
  border: none;

  :hover {
    background-color: #463366;
  }

  :active {
    background-color: #67568c;
  }
`;
