import styled from "styled-components";

export const Select = styled.select`
  width: 8rem;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: #301e4e 1px solid;

  @media screen and (max-width: 480px) {
    width: 7rem;
    font-size: 0.75rem;
    padding: 0.25rem;
  }
`;
