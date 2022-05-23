import { Col, Progress, Row, Typography } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomCard, CustomTitle } from "../../@core/components";
import { challengesInHome } from "@store/actions/challenges";
import { convertLever } from "../../utility/Utils";

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
  const [dataChallenges, setDataChallenges] = useState([]);
  const dispatch = useDispatch();
  const { data: listChallenges, status } = useSelector(
    (store) => store.list_challenges
  );

  useEffect(() => {
    dispatch(challengesInHome());
  }, [dispatch]);
  useEffect(() => {
    if (status === "success" && listChallenges.length > 0) {
      const result = listChallenges?.map((item, idx) => ({
        stt: idx + 1,
        key: idx,
        ...item,
        text: item.title,
        places: convertLever(item.score),
        point: item.score,
        cup: 0,
        comment: 0,
        save: 0,
        answer: 0,
      }));
      setDataChallenges(result);
    }
  }, [status, listChallenges]);

  return (
    <>
      {/* <Row>
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
      </Row> */}

      {/* list card */}
      <Row style={{ marginTop: 28 }}>
        <Typography.Title level={3} style={{ color: "#575d63" }}>
          Khám phá thử thách
        </Typography.Title>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <CustomCard
            title="Thăng hạng"
            ranks={[...dataChallenges]
              .sort((a, b) => b.score - a.score)
              .slice(0, 5)}
            textBtn="Tiếp tục"
          />
        </Col>
        <Col span={12}>
          <CustomCard
            title="Thử thách mới nhất"
            ranks={[...dataChallenges]
              .sort((a, b) => b.key - a.key)
              .slice(0, 5)}
            textBtn="Tiếp tục"
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
