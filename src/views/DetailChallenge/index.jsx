import { getAChallenge } from '@store/actions/challenges'
import { Card, Col, List, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import { Star } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { CustomButton, CustomIconChallenge } from '../../@core/components'
import { convertLever } from '../../utility/Utils'
import "./index.scss"

const DetailChallenge = () => {
  const dispatch = useDispatch()
  const { data: detailChallenge } = useSelector(store => store.list_challenges)

  const { pathname } = useLocation()
  const id = pathname.split('/')[2]

  useEffect(() => {
    dispatch(getAChallenge(id))
  }, [dispatch, id])

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
                  avatar={<CustomIconChallenge level={item.title.slice(-1)} size="little" />}
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
              <Typography.Title level={1}>{detailChallenge?.title}</Typography.Title>
            </Col>
            <Col>
              <Star size={24} />&nbsp;<Typography.Title level={4}>{detailChallenge?.score}</Typography.Title>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <CustomIconChallenge level={convertLever(detailChallenge?.score)} size="big" />
              <CustomButton href={`/challenge/${id}/solve`} />
            </Col>
            <Col span={18}>
              <div dangerouslySetInnerHTML={{ __html: detailChallenge?.description }}></div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default DetailChallenge