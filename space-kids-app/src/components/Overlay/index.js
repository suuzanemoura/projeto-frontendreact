import React from "react";
import { OverlayContainer } from "./styled";

const Overlay = ({ cartIsOpen, setCartIsOpen }) => {
  return (
    <OverlayContainer
      cartIsOpen={cartIsOpen}
      onClick={() => setCartIsOpen("-100%")}
    />
  );
};

export default Overlay;
