import { Col } from "antd";
import React from "react";
import "./index.scss";

const IconChallenge = ({ level, size, fontSize }) => {
  const sizeOfIconWidth = (size) => {
    switch (size) {
      case "small":
        return "50px";
      case "middle":
        return "100px";
      case "large":
        return "150px";
      default:
        return "50px";
    }
  };
  const sizeOfIconHeight = (size) => {
    switch (size) {
      case "small":
        return "25px";
      case "middle":
        return "50px";
      case "large":
        return "75px";
      default:
        return "25px";
    }
  };
  const colorOfIcon = (level) => {
    switch (level) {
      case "Dễ":
        return "rgb(85 177 89)";
      case "Trung bình":
      case "TB":
        return "rgb(240 140 90)";
      case "Khó":
        return "#F05A65";
      default:
        return "rgb(85 177 89)";
    }
  };
  const sizeOfText = (fontSize) => {
    switch (fontSize) {
      case "little":
        return "13.5px";
      case "small":
        return "18px";
      case "default":
        return "24px";
      case "large":
        return "32px";
      case "big":
        return "86px";
      default:
        return "24px";
    }
  };
  return (
    <Col
      className="custom-icon-challenge"
      style={{
        background: colorOfIcon(level),
        width: sizeOfIconWidth(size),
        height: sizeOfIconHeight(size),
        fontSize: sizeOfText(fontSize),
      }}
    >
      {level}
    </Col>
  );
};

export default IconChallenge;
