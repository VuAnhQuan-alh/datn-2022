import React from "react";
import { Col, Row, Typography } from "antd";
import PropTypes from "prop-types";
import "./index.scss";

const CustomTitle = ({ text, places, justify }) => {
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
        return "#997D90";
      default:
        return "#997D90";
    }
  };
  return (
    <>
      <Row justify={justify}>
        <Col className="custom-title" style={{ backgroundColor: colorOfIcon(places) }}>{places}</Col>
        <Col>
          <Typography.Title level={4} style={{ margin: 0, padding: 0, color: '#575d63' }}>
            {text}
          </Typography.Title>
        </Col>
      </Row>
    </>
  );
};

CustomTitle.defaultProps = {
  text: "Hạng F",
  places: "F",
  justify: "start",
};
CustomTitle.prototype = {
  text: PropTypes.string,
  places: PropTypes.string,
  justify: PropTypes.string,
};

export default CustomTitle;
