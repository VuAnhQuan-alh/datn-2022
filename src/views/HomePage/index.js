import { Col, Progress, Row, Typography } from "antd";
import { useState, useEffect } from "react";
import { CustomCard, CustomTitle } from "../../@core/components";
import ChallengesAPI from "../../api/challengesApi";

const Home = () => {
  let ranker = [
    {
      places: "F",
      text: "Staff Feedback",
      point: 30,
      pass: 25,
      cup: 1,
      comment: 1,
      save: 2,
      answer: 1,
    },
  ];
  let lec = [
    {
      places: "F",
      text: "Staff Feedback",
      point: 30,
      pass: 25,
      cup: 1,
      comment: 1,
      save: 2,
      answer: 1,
    },
    {
      places: "F",
      text: "Staff Feedback",
      point: 30,
      pass: 25,
      cup: 1,
      comment: 1,
      save: 2,
      answer: 1,
    },
    {
      places: "F",
      text: "Staff Feedback",
      point: 30,
      pass: 25,
      cup: 1,
      comment: 1,
      save: 2,
      answer: 1,
    },
  ];

  const [listChallenges, setListChallenges] = useState([])
  const getListChallenge = async () => {
    await ChallengesAPI.getChallenges()
      .then(response => {
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
          setListChallenges(result)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    getListChallenge()
  }, [])

  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ color: "#575d63" }}>
          Tiến độ của bạn
        </Typography.Title>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <CustomCard style={{ padding: "11.5px 0" }}>
            <CustomTitle places="F" text="Hạng F" justify="center" />
            <Progress percent={0} />
            <Typography style={{ marginTop: 14, fontSize: 18 }}>
              Hoàn thành bài thi để thăng hạng
            </Typography>
          </CustomCard>
        </Col>
        <Col span={16}>
          <CustomCard
            title="Tiếp tục thử thách"
            ranks={ranker}
            textBtn="Tiếp tục"
          />
        </Col>
      </Row>

      {/* list card */}
      <Row style={{ marginTop: 28 }}>
        <Typography.Title level={3} style={{ color: "#575d63" }}>
          Khám phá thử thách
        </Typography.Title>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <CustomCard title="Thăng hạng" ranks={lec} textBtn="Tiếp tục" />
        </Col>
        <Col span={12}>
          <CustomCard
            title="Thử thách mới nhất"
            ranks={listChallenges}
            textBtn="Tiếp tục"
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
