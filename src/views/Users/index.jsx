import { Avatar, Card, Col, Row, Tabs, Typography } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ContributeChallenges, MyChallenges } from "./components";

const Users = () => {
  const [activeKey, setActiveKey] = useState("my-challenges");
  const { data } = useSelector((store) => store.user_reducers);

  return (
    <Col span={24}>
      <Row style={{ marginBottom: 22 }}>
        <Card style={{ width: "100%" }}>
          <Row gutter={56}>
            <Col>
              <Avatar src="https://joeschmoe.io/api/v1/random" size={128} />
            </Col>
            <Col>
              <Typography.Title level={2}>{data?.name}</Typography.Title>
              <Typography.Title level={4}>Điểm: {data?.score}</Typography.Title>
            </Col>
          </Row>
        </Card>
      </Row>
      <Row>
        <Card style={{ width: "100%" }}>
          <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
            <Tabs.TabPane tab="Thử thách đã tham gia" key="joined-challenges">
              components my joined challenges
            </Tabs.TabPane>
            <Tabs.TabPane tab="Thử thách của tôi" key="my-challenges">
              <MyChallenges setActiveKey={setActiveKey} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đóng góp thử thách" key="contribute-challenges">
              <ContributeChallenges setActiveKey={setActiveKey} />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Row>
    </Col>
  );
};

export default Users;
