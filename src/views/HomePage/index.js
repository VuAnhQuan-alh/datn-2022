import { Col, Progress, Row, Typography } from "antd";
import { CustomCard, CustomTitle } from "../../@core/components";

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

  return (
    <>
      <Row>
        <Typography.Title level={3}>Tiến độ của bạn</Typography.Title>
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
      <Row style={{ marginTop: 28 }}>
        <Typography.Title level={3}>Khám phá thử thách</Typography.Title>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <CustomCard
            title="Thăng hạng"
            ranks={lec}
            textBtn="Tiếp tục"
          />
        </Col>
        <Col span={12}>
          <CustomCard
            title="Thử thách mới nhất"
            ranks={lec}
            textBtn="Tiếp tục"
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
