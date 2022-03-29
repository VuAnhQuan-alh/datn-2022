import { Avatar, Card, Col, Image, Row, Typography } from "antd";
import React from "react";
import CustomButton from "../button-cus";
import "./index.scss";

const CardChallenge = () => {
  return (
    <Card>
      <Row gutter={16}>
        <Col>
          <Avatar
            src={<Image src="https://joeschmoe.io/api/v1/random" />}
            size={72}
          />
        </Col>
        <Col>
          <Row>
            <Typography.Title level={5}>CoffeeSS</Typography.Title>
            <Typography>01/12/2021</Typography>
          </Row>
          <Row>
            <Typography.Title level={3}>Divide</Typography.Title>
          </Row>
        </Col>
        <Col flex="auto" align="end">
          <CustomButton text="Giải bài này" />
        </Col>
      </Row>
    </Card>
  );
};

export default CardChallenge;
