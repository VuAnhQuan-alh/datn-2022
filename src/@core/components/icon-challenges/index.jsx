import { Col } from "antd";
import React from "react";
import "./index.scss";

const IconChallenge = ({ level, size }) => {
  const sizeOfIcon = (size) => {
    switch (size) {
      case "small":
        return "30px";
      case "default":
        return "42px";
      case "large":
        return "54px";
      default:
        return "42px";
    }
  };
  const colorOfIcon = (level) => {
    switch (level) {
      case "S":
        return "#FFD45B";
      case "A":
        return "#F05A65";
      case "B":
        return "#A47BB6";
      case "C":
        return "#1FB6FF";
      case "D":
        return "#82C5E0";
      case "E":
        return "#92C485";
      case "F":
        return "#22556D";
      default:
        return "#22556D";
    }
  };
  const sizeOfText = (size) => {
    switch (size) {
      case "small":
        return "18px";
      case "default":
        return "24px";
      case "large":
        return "32px";
      default:
        return "24px";
    }
  };
  return (
    <Col
      className="custom-icon-challenge"
      style={{
        background: colorOfIcon(level),
        width: sizeOfIcon(size),
        height: sizeOfIcon(size),
        fontSize: sizeOfText(size),
      }}
    >
      {level}
    </Col>
  );
};

export default IconChallenge;
