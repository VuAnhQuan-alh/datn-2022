import React, { useState } from 'react'
import { Card, Tabs, Row, Col } from 'antd'
import { ContributeChallenges } from './components';

const Users = () => {
  const [defaultKey, setDefaultKey] = useState('contribute-challenges');

  return (
    <Col span={24}>
      <Row>
        <Card style={{ width: "100%" }}>
          User detail component
        </Card>
      </Row>
      <Row>
        <Card style={{ width: "100%" }}>
          <Tabs defaultActiveKey={defaultKey}>
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
              components my challenges
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đóng góp thử thách" key="contribute-challenges">
              <ContributeChallenges />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Row>
    </Col>
  )
}

export default Users