import { Card, Col, List, Row, Typography } from 'antd'
import React from 'react'
import { Star } from 'react-feather'
import { Link } from 'react-router-dom'
import { CustomButton, CustomIconChallenge } from '../../@core/components'
import "./index.scss"

const DetailChallenge = () => {
  const data = [
    { title: 'Hạng S' },
    { title: 'Hạng A' },
    { title: 'Hạng B' },
    { title: 'Hạng C' },
    { title: 'Hạng D' },
    { title: 'Hạng E' },
    { title: 'Hạng F' },
  ]

  return (
    <Row gutter={24}>
      <Col span={4}>
        <Card className="custom-card-detail-challenge">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<CustomIconChallenge level="F" size="little" />}
                  title={<Link to="/">{item.title}</Link>}
                />
              </List.Item>
            )}
          />
        </Card>
      </Col>
      <Col span={20}>
        <Card className='custom-card-header-challenge'>
          <Row gutter={24}>
            <Col>
              <Typography.Title level="3">Lazy Eater</Typography.Title>
            </Col>
            <Col>
              <Star size={24} />&nbsp;<Typography.Title level={4}>100</Typography.Title>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <CustomIconChallenge level="E" size="big" />
              <CustomButton href="/challenge/76hys/solve" />
            </Col>
            <Col span={18}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, excepturi nulla. Inventore quia facilis esse. Magnam, debitis quos eos maxime architecto porro, ratione, recusandae quo rerum vero expedita. Aspernatur, magnam?
              Perspiciatis facere cupiditate ipsum magnam neque natus fugiat, quod nobis eaque enim aut, quam animi tempore tenetur atque modi in vitae, qui praesentium ex molestias ipsa laborum dolorum? Quis, consequatur!
              Eveniet, eligendi autem facere ea ducimus nemo sequi officiis rem debitis dolores, exercitationem explicabo illum reprehenderit harum. Tempore assumenda porro velit vitae similique quas, eaque quasi facere, esse nostrum quod?
              Facilis atque, ab sunt est, cumque dolore consequatur pariatur fugit maxime tempore quos quod. Ut odit nostrum quod? Dolorem deleniti accusantium autem perspiciatis ratione, reprehenderit suscipit quae modi quasi nisi!
              Ea dolore culpa nemo optio nulla. Quia molestiae sapiente nisi blanditiis consequatur ullam odio quam illum repudiandae voluptates maxime, similique harum distinctio architecto provident nulla rerum magnam impedit. Sit, omnis!
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default DetailChallenge