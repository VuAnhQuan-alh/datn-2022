import React from "react";
import { Col, Row, Typography } from "antd";

const TitleCard = ({ text, places }) => {
  return (
    <Row style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
      <Col
        span={4}
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "#AF8FA6",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontWeight: 'bold',
          color: 'white',
          marginRight: 16
        }}
      >
        {places}
      </Col>
      <Col span={20}>
        <Typography.Title style={{ margin: 0 }} level={4}>{text}</Typography.Title>
      </Col>
    </Row>
  );
};

export default TitleCard;
