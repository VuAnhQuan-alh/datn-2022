import React, { useEffect, useState } from 'react'
import { Card, Tabs, Row, Col } from 'antd'
import { ContributeChallenges, MyChallenges } from './components';
import { useHistory, useLocation } from 'react-router-dom';

const Users = () => {
  const { pathname } = useLocation()
  const url = pathname.split('/')[1]
  const [activeKey, setActiveKey] = useState(url)
  const history = useHistory()
  useEffect(() => {
    console.log(url)
    setActiveKey(url)
  }, [pathname])

  return (
    <Col span={24}>
      <Row>
        <Card style={{ width: "100%" }}>
          User detail component
        </Card>
      </Row>
      <Row>
        <Card style={{ width: "100%" }}>
          <Tabs
            defaultActiveKey={activeKey}
            onChange={(value) => {
              if (value === "my-challenges")
                history.push(`/${value}`)
            }}
          >
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
              <ContributeChallenges />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Row>
    </Col>
  )
}

export default Users