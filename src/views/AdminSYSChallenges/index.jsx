import React, { useEffect, useState } from 'react'
import { Popconfirm, Card, Row, Col, Image, Button, Table, Avatar, Switch, message } from 'antd'
import { Edit, Trash2 } from 'react-feather'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { adminAcceptChallenge, adminGetChallenges } from '../../redux/actions/challenges'

const SysChallenges = () => {
  const dispatch = useDispatch()
  const { data: listChallenges, status } = useSelector(store => store.list_challenges)
  const { status: statusAccept } = useSelector(store => store.action_challenge)

  const [dataChallenge, setDataChallenge] = useState([])
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    dispatch(adminGetChallenges())
  }, [dispatch])
  useEffect(() => {
    if (status === 'success') {
      const result = listChallenges?.map((item, idx) => ({ key: idx, stt: ++idx, ...item }))
      setDataChallenge(result)
    }
  }, [status, listChallenges, accepted])

  const handleAcceptChallenges = (id) => {
    dispatch(adminAcceptChallenge(id))
      .then(() => {
        if (statusAccept === 'success') {
          message.success('Cập nhật thử thách thành công.')
          dispatch(adminGetChallenges())
          setAccepted(!accepted)
        } else {
          message.error('Cập nhật thất bại.')
        }
      })
      .catch(() => message.error('Cập nhật thất bại.'))
  }
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      align: "center"
    },
    {
      title: "Tên Thử thách",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Người tạo",
      dataIndex: "",
      key: "create_by_name",
      render: (_, record) => <Row gutter={8}>
        <Col>
          <Avatar src={<Image src={record.created_by?.avatar || `https://joeschmoe.io/api/v1/${record.stt}`} alt="icon user" />} size={36} />
        </Col>
        <Col>
          {record.created_by?.name}
        </Col>
      </Row>
    },
    {
      title: "Điểm",
      dataIndex: "score",
      key: "score",
      align: "center"
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      align: "center"
    },
    {
      title: "Thao tác",
      dataIndex: "",
      key: "action",
      align: "center",
      render: (_, record) => <Row gutter={12} justify="center" align='middle'>
        <Col>
          <Button icon={<Edit size={16} />} />
        </Col>
        <Col>
          <Button icon={<Trash2 size={16} />} />
        </Col>
        <Col>
          <Popconfirm
            title="Cập nhật trạng thái ẩn hiện challenges?"
            onConfirm={() => handleAcceptChallenges(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Switch checked={record.status === 1} />
          </Popconfirm>
        </Col>
      </Row>
    }
  ]

  return (
    <Card className='custom-card' title="Quản lý thử thách">
      <Table
        columns={columns}
        dataSource={dataChallenge}
      />
    </Card>
  )
}

export default SysChallenges