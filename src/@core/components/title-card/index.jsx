import React from "react";
import { Col, Row, Typography } from "antd";
import PropTypes from "prop-types";
import "./index.scss";
import { CustomIconChallenge } from "..";
import { convertRank } from "../../../utility/Utils";

const CustomTitle = ({ text, places, justify }) => {
  return (
    <>
      <Row justify={justify}>
        <Col>
          <CustomIconChallenge
            level={convertRank(places)}
            size="small"
            fontSize="little"
          />
        </Col>
        <Col>
          <Typography.Title
            level={4}
            style={{ marginLeft: 15, padding: 0, color: "#575d63" }}
          >
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
