import styled from "styled-components";
import { IoTrashOutline, IoAddOutline, IoRemoveOutline } from "react-icons/io5";

export const Card = styled.div`
  display: flex;
  width: 100%;
  align-items: left;
  border: #67568c 1px solid;
  border-radius: 1.5rem;
  padding: 0.75rem;
  color: #301e4e;

  h4 {
    color: #ff6e6c;
    font-size: 1rem;
  }
`;

export const ProductImage = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: contain;
  border-radius: 1rem;
`;

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-left: 0.75rem;
`;

export const NameItem = styled.div`
  display: flex;
  justify-content: space-between;
  h5 {
    width: 75%;
  }
`;

export const TrashIcon = styled(IoTrashOutline)`
  font-size: 1.5rem;
`;

export const ValueItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Quantity = styled.div`
  width: 6rem;
  padding: 0.3rem 0.5rem;
  background-color: rgba(76, 73, 74, 0.1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 3rem;
  text-align: center;
  border: none;
  background: transparent;

  :focus {
    outline: 0;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const AddIcon = styled(IoAddOutline)`
  :hover {
    color: #ff6e6c;
  }
`;

export const RemoveIcon = styled(IoRemoveOutline)`
  :hover {
    color: #ff6e6c;
  }
`;
