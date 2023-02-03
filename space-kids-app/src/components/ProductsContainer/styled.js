import styled from "styled-components";

export const ShowProducts = styled.section`
  display: flex;
  width: 100%;
  padding: 1rem 2rem 2rem 1rem;
`;

export const ListProducts = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 85vw;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  gap: 3rem 2.5rem;

  ::after {
    content: "";
    flex: 1;
  }
`;
