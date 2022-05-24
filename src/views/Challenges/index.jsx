import BG_IMAGE from "@src/assets/images/pages/challange-filter-bgr.png";
import { Col, Pagination, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CustomCardChallenge,
  CustomIconChallenge,
} from "../../@core/components";
import { challengesInHome } from "../../redux/actions/challenges";
import "./index.scss";
import SearchChallenges from "./SearchChallenge";

const ChallengePage = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((store) => store.list_challenges);

  useEffect(() => {
    dispatch(challengesInHome());
  }, [dispatch]);

  const levels = ["Dễ", "Trung bình", "Khó"];

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
              <CustomIconChallenge
                level={item}
                size="middle"
                fontSize="little"
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Row>
        <SearchChallenges />
      </Row>
      <Col style={{ maxWidth: 890, width: "100%", margin: "26px auto" }}>
        <CustomCardChallenge data={data} />
      </Col>
      {/* <Row gutter={16} align="middle" style={{ marginTop: 10 }}>
        <Col style={{ color: "#7367f0", fontWeight: "bold" }}>
          1 - 10 trong {data.length} kết quả
        </Col>
        <Col>
          <Pagination
            pageSize={10}
            showQuickJumper
            defaultCurrent={1}
            total={data.length}
            className="custom-pagination"
          />
        </Col>
      </Row> */}
    </>
  );
};

export default ChallengePage;
