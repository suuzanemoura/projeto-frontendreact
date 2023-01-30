import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SlideImg01 from "../imgs/Slide01.jpg";
import SlideImg02 from "../imgs/Slide02.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const spanStyle = {
  padding: "2rem 1rem 1rem 1rem",
  background: "transparent",
  color: "#463366",
  fontFamily: "'Barrio', cursive",
  fontSize: "2rem",
  width: "15rem",
  textAlign: "center",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
};

const buttonStyle = {
  width: "24px",
  background: "none",
  border: "0px",
  margin: "1rem",
};

const arrow = {
  color: "#fff",
  fontSize: "2.5rem",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <IoIosArrowBack style={{ ...arrow }} />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <IoIosArrowForward style={{ ...arrow }} />
    </button>
  ),
};

const slideImages = [
  {
    url: `${SlideImg01}`,
    caption: "Um mundo de fantasias",
  },
  {
    url: `${SlideImg02}`,
    caption: "Realizando sonhos de pequenos sonhadores",
  },
];

export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
                backgroundPosition: "center",
              }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
