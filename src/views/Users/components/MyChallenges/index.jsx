import { userGetChallenges } from '@store/actions/challenges'
import { handleIdChallenge } from '@store/actions/id'
import { Button, Card, Col, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { Edit, Trash2 } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'

const MyChallenge = ({ setActiveKey }) => {
  const dispatch = useDispatch()
  const { data: listChallenges, status } = useSelector(store => store.list_challenges)

  const [dataChallenges, setDataChallenges] = useState([])

  useEffect(() => {
    dispatch(userGetChallenges())
  }, [dispatch])
  useEffect(() => {
    if (status === 'success') {
      const result = listChallenges.map((item, idx) => ({ key: idx, stt: ++idx, ...item }))
      setDataChallenges(result)
    }
  }, [status, listChallenges])


  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: 'stt'
    },
    {
      title: "Tên challenge",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Điểm",
      dataIndex: "score",
      key: "score"
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank"
    },
    {
      title: "Thao tác",
      align: "center",
      dataIndex: "_id",
      render: (_id) => <Row gutter={12} justify="center" align='middle'>
        <Col>
          <Button
            icon={<Edit size={16} />}
            onClick={() => {
              dispatch(handleIdChallenge(_id, true))
              setActiveKey('contribute-challenges')
            }}
          />
        </Col>
        <Col>
          <Button icon={<Trash2 size={16} />} />
        </Col>
      </Row>,
      key: "action"
    }
  ]

  return (
    <Card className='custom-card' title="Thử thách của tôi">
      <Table
        columns={columns}
        dataSource={dataChallenges}
      />
    </Card>
  )
}

export default MyChallenge