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

    @media screen and (max-width: 1080px) {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1080px) {
    width: 40rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    gap: 0rem 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 30rem;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 480px) {
    width: 17rem;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 319px) {
    gap: 0rem 0.75rem;
  }
`;

export const Input = styled.input`
  width: 10rem;
  border: #301e4e 1px solid;
  margin-bottom: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 5rem;
  }
`;

export const Button = styled.button`
  width: 10rem;
  background-color: #301e4e;
  border-radius: 0.5rem;
  color: #fff;
  margin: 0.5rem 0;
  border: none;
  height: 2rem;

  :hover {
    background-color: #463366;
  }

  :active {
    background-color: #67568c;
  }

  @media screen and (max-width: 768px) {
    width: 7rem;
  }
`;
