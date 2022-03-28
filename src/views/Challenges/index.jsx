import { Col, Row, Typography } from "antd";
import React from "react";
import { CustomIconChallenge } from "../../@core/components";
import BG_IMAGE from "@src/assets/images/pages/challange-filter-bgr.png";

const challengePage = () => {
  const levels = ["S", "A", "B", "C", "D", "E", "F"];
  return (
    <>
      <Col style={{ backgroundImage: `url(${BG_IMAGE})` }}>
        <Row justify="center">
          <Typography.Title level={3} style={{ color: '#fff !important' }}>
            Thứ hạng của thử thách
          </Typography.Title>
        </Row>
        <Row justify="center" gutter={16}>
          {levels.map((item, idx) => (
            <Col key={idx}>
              <CustomIconChallenge level={item} size="large" />
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
};

export default challengePage;
