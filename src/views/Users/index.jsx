import { Card, Col, Row, Tabs } from 'antd';
import React, { useState } from 'react';
import { ContributeChallenges, MyChallenges } from './components';

const Users = () => {
  const [activeKey, setActiveKey] = useState('user-statistic')

  return (
    <Col span={24}>
      <Row>
        <Card style={{ width: "100%" }}>
          User detail component
        </Card>
      </Row>
      <Row>
        <Card style={{ width: "100%" }}>
          <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
            <Tabs.TabPane tab="Thống kê" key="user-statistic">
              components my statistic
            </Tabs.TabPane>
            <Tabs.TabPane tab="Thử thách đã tham gia" key="joined-challenges">
              components my joined challenges
            </Tabs.TabPane>
            <Tabs.TabPane tab="Bài giải" key="user-lessons">
              components my lessons
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
  )
}

export default Users