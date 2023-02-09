import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  padding: 0 2rem;
  scroll-margin-inline-start: initial;
`;

export const Card = styled.div`
  display: flex;
  width: 75rem;
  justify-content: space-between;
  border-radius: 1.5rem;
  padding: 1rem;
  gap: 4rem;

  @media screen and (max-width: 1280px) {
    width: 60rem;
  }

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (max-width: 580px) {
    width: 45rem;
  }
`;

export const ProductInfos = styled.div`
  width: 40rem;
  color: #301e4e;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  order: 1;

  @media screen and (max-width: 1280px) {
    width: 30rem;
  }

  @media screen and (max-width: 1024px) {
    order: 2;
  }

  @media screen and (max-width: 580px) {
    width: 20rem;
  }

  @media screen and (max-width: 375px) {
    width: 15rem;
  }

  h1 {
    color: #ff6e6c;
    font-size: 3rem;
    line-height: 1rem;
    margin-top: 1rem;

    @media screen and (max-width: 580px) {
      font-size: 2.5rem;
      margin-top: 0.5rem;
    }
  }

  h2 {
    font-size: 2.7rem;
    line-height: 3.2rem;

    @media screen and (max-width: 1024px) {
      font-size: 2.3rem;
      line-height: 2.8rem;
    }

    @media screen and (max-width: 580px) {
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
`;

export const ProductImage = styled.img`
  width: 30rem;
  height: 30rem;
  object-fit: contain;
  border-radius: 1rem;
  order: 2;

  @media screen and (max-width: 1280px) {
    width: 26rem;
    height: 26rem;
  }

  @media screen and (max-width: 1024px) {
    order: 1;
  }

  @media screen and (max-width: 580px) {
    width: 18rem;
    height: 18rem;
  }

  @media screen and (max-width: 375px) {
    width: 15rem;
    height: 15rem;
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
