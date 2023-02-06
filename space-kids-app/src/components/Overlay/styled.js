import styled from "styled-components";

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000047;
  z-index: 10000;
  cursor: pointer;
  display: ${(props) => (props.cartIsOpen === "-100%" ? "none;" : "block;")};
`;
