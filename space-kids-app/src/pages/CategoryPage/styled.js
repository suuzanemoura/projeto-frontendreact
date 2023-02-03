import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  padding: 0.5rem 0 0 0;
`;

export const ShowProducts = styled.section`
  display: flex;
  width: 100%;
  padding: 1rem 2rem 5rem 1rem;
`;

export const Filters = styled.aside`
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

export const Select = styled.select`
  width: 8rem;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: #301e4e 1px solid;
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  gap: 3rem 2.2rem;

  ::after {
    content: "";
    flex: 1;
  }
`;
