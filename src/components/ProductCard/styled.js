import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 27.5rem;
  justify-content: space-between;
  align-items: left;
  border: #67568c 1px solid;
  border-radius: 1.5rem;
  padding: 1rem;
  color: #301e4e;

  @media screen and (max-width: 319px) {
    width: 15rem;
  }

  h1 {
    color: #ff6e6c;
    font-size: 2rem;
    line-height: 2rem;
    margin-top: 0.35rem;
  }

  h2 {
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 1.3rem;
    cursor: pointer;
    color: #301e4e;

    :hover {
      color: #67568c;
    }
  }
`;

export const ProductImage = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: contain;
  border-radius: 1rem 1rem 0 0;
  cursor: pointer;

  @media screen and (max-width: 319px) {
    width: 13rem;
    height: 13rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #301e4e;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #fff;
  margin: 0.5rem 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: #463366;
  }

  :active {
    background-color: #67568c;
  }
`;
