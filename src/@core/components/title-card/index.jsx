import React from "react";
import { Col, Row, Typography } from "antd";
import PropTypes from "prop-types";
import "./index.scss";

const CustomTitle = ({ text, places, justify }) => {
  return (
    <>
      <Row justify={justify}>
        <Col className="custom-title">{places}</Col>
        <Col>
          <Typography.Title level={4} style={{ margin: 0, padding: 0 }}>
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
