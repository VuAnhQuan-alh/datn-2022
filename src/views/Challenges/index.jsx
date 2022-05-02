import { Col, Pagination, Row, Typography } from "antd";
import React, { useState, useEffect } from "react";
import {
  CustomCardChallenge,
  CustomIconChallenge,
} from "../../@core/components";
import BG_IMAGE from "@src/assets/images/pages/challange-filter-bgr.png";
import "./index.scss";
import ChallengesAPI from "../../api/challengesApi";

const ChallengePage = () => {
  const levels = ["S", "A", "B", "C", "D", "E", "F"];
  const [dataChallenge, setDataChallenge] = useState([])

  const getChallenges = async () => {
    await ChallengesAPI.getChallenges()
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          const result = response.data.data
            .map((item, idx) => ({
              key: idx,
              ...item,
              text: item.title,
              point: item.score,
              pass: 25,
              cup: 1,
              comment: 1,
              save: 2,
              answer: 1,
            }))
          setDataChallenge(result)
        }
      })
  }
  useEffect(() => {
    getChallenges()
  }, [])

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
        <CustomCardChallenge data={dataChallenge} />
      </Col>
      <Row gutter={16} align="middle" style={{ marginTop: 10 }}>
        <Col style={{ color: "#7367f0", fontWeight: "bold" }}>
          1 - 10 trong {dataChallenge.length} kết quả
        </Col>
        <Col>
          <Pagination
            pageSize={10}
            showQuickJumper
            defaultCurrent={1}
            total={dataChallenge.length}
            className="custom-pagination"
          />
        </Col>
      </Row>
    </>
  );
};

export default ChallengePage;
