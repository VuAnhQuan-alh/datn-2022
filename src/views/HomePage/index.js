import { Card, Row, Col, Typography } from 'antd';
import TitleCard from '../../@core/components/title-card';

const Home = () => {
  return (
    <Card>
      <Row>
        <Typography.Title level={3}>
          Tiến độ của bạn
        </Typography.Title>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Card style={{ padding: 10, background: 'white', borderRadius: '0.428rem', boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)' }}>
            <TitleCard places="F" text="Hạng F" />
          </Card>
        </Col>
        <Col span={16}>
          ok
        </Col>
      </Row>
    </Card>
  )
}

export default Home
