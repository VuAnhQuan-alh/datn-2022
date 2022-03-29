import { Col, Pagination, Row, Typography } from "antd";
import React from "react";
import {
  CustomCardChallenge,
  CustomIconChallenge,
} from "../../@core/components";
import BG_IMAGE from "@src/assets/images/pages/challange-filter-bgr.png";
import "./index.scss";

const challengePage = () => {
  const levels = ["S", "A", "B", "C", "D", "E", "F"];
  return (
    <>
      <Col style={{ backgroundImage: `url(${BG_IMAGE})`, padding: "35px 0px" }}>
        <Row justify="center">
          <Typography.Title
            level={1}
            style={{
              color: "#fff",
              marginTop: -18,
              textTransform: "uppercase",
            }}
          >
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
      <Col style={{ maxWidth: 890, width: "100%", margin: "26px auto" }}>
        <CustomCardChallenge />
      </Col>
      <Row gutter={16} align="middle" style={{ marginTop: 10 }}>
        <Col style={{ color: "#7367f0", fontWeight: "bold" }}>
          1 - 15 trong 134 kết quả
        </Col>
        <Col>
          <Pagination
            pageSize={15}
            showQuickJumper
            defaultCurrent={1}
            total={138}
            className="custom-pagination"
          />
        </Col>
      </Row>
    </>
  );
};

export default challengePage;
