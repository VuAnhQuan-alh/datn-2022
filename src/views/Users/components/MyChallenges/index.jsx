import React, { useEffect, useState } from 'react'
import { Table, Switch, Card, Row, Col, Button } from 'antd'
import { Edit, Trash2 } from 'react-feather'
import { ChallengesAPI } from '../../../../api'
import { useHistory } from 'react-router-dom'


const MyChallenge = () => {
  const [dataChallenges, setDataChallenges] = useState([])
  const history = useHistory()
  const getDataListChallenge = async () => {
    await ChallengesAPI.getChallengeUser()
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data.map((item, idx) => ({ key: idx, stt: ++idx, ...item }))
          setDataChallenges(result)
        }
      })
  }

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
            onClick={() => { history.push(`/contribute-challenges/${_id}/update`) }}
          />
        </Col>
        <Col>
          <Button icon={<Trash2 size={16} />} />
        </Col>
      </Row>,
      key: "action"
    }
  ]
  useEffect(() => {
    getDataListChallenge()
  }, [])
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