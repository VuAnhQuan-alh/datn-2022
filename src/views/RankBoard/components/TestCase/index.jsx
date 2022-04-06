import { Col, Card, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { Filter, Terminal } from 'react-feather'
import './index.scss'

const TestCase = ({ result }) => {
  const [activeTab, setActiveTab] = useState('tab-1')
  const TabList = [
    {
      key: 'tab-1',
      tab: <Row justify='center' gutter={6} align='middle'>
        <Col>
          <Filter size={16} />
        </Col>
        <Col>
          <Typography>Test Cases</Typography>
        </Col>
      </Row>
    },
    {
      key: 'tab-2',
      tab: <Row gutter={6} justify='center' align='middle'>
        <Col>
          <Terminal size={16} />
        </Col>
        <Col>
          <Typography>Đầu ra</Typography>
        </Col>
      </Row>
    }
  ]
  const ContentList = {
    'tab-1': <Typography.Text>Test cases pro</Typography.Text>,
    'tab-2': <Typography.Text>{result}</Typography.Text>
  }
  return (
    <Card
      className='custom-card-test'
      tabList={TabList}
      activeTabKey={activeTab}
      onTabChange={(key) => setActiveTab(key)}
    >
      {ContentList[activeTab]}
    </Card>
  )
}

export default TestCase