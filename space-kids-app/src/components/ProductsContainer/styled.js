import styled from "styled-components";

export const ShowProducts = styled.section`
  display: flex;
  width: 100%;
  padding: 1rem 2rem 2rem 1rem;
  gap: 2rem;
`;

export const ListProducts = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 85vw;
  justify-content: center;
  align-items: center;
`;

export const HeaderList = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`;

export const HeaderInfos = styled.div`
  h2 {
    color: #301e4e;
    font-family: "Barrio", cursive;
    text-decoration: 0.2rem solid underline #ff6e6c;
    text-underline-offset: 0.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const Products = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.1rem;
  max-width: 2180px;
  margin-bottom: 3rem;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1780px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 2180px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1130px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
