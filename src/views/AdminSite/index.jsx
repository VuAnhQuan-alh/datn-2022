import React from 'react'
import { Card, Row, Col, Image, Button, Table, Avatar, Switch } from 'antd'
import { Edit, Trash2 } from 'react-feather'
import './index.scss'

const AdminSite = () => {
  const fakeData = [
    {
      stt: "1",
      _id: "1",
      title: "Thử thách một",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Modi quae laudantium quas numquam molestias assumenda aliquid similique iusto praesentium maiores.Ducimus ab quia odit veritatis quidem id, pariatur dicta nostrum.",
      suggestion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      score: 100,
      rank: 0,
      create_by: {
        _id: "625cd72e271173e6c39d38e9",
        name: "Hoang Tu",
        avatar: "https://joeschmoe.io/api/v1/4"
      }
    },
    {
      stt: "2",
      _id: "2",
      title: "Thử thách hai",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Modi quae laudantium quas numquam molestias assumenda aliquid similique iusto praesentium maiores.Ducimus ab quia odit veritatis quidem id, pariatur dicta nostrum.",
      suggestion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      score: 100,
      rank: 0,
      create_by: {
        _id: "625cd72e271173e6c39d38e9",
        name: "Hoang Tu",
        avatar: "https://joeschmoe.io/api/v1/3"
      }
    },
    {
      stt: "3",
      _id: "3",
      title: "Thử thách ba",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Modi quae laudantium quas numquam molestias assumenda aliquid similique iusto praesentium maiores.Ducimus ab quia odit veritatis quidem id, pariatur dicta nostrum.",
      suggestion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      score: 100,
      rank: 0,
      create_by: {
        _id: "625cd72e271173e6c39d38e9",
        name: "Hoang Tu",
        avatar: "https://joeschmoe.io/api/v1/2"
      }
    },
    {
      stt: "4",
      _id: "4",
      title: "Thử thách bốn",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Modi quae laudantium quas numquam molestias assumenda aliquid similique iusto praesentium maiores.Ducimus ab quia odit veritatis quidem id, pariatur dicta nostrum.",
      suggestion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      score: 100,
      rank: 0,
      create_by: {
        _id: "625cd72e271173e6c39d38e9",
        name: "Hoang Tu",
        avatar: "https://joeschmoe.io/api/v1/1"
      }
    }
  ]

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
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (_, record) => <p style={{ maxWidth: "180px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{record.description}</p>
    },
    {
      title: "Giợ ý",
      dataIndex: "suggestion",
      key: "suggestion",
      render: (_, record) => <p style={{ maxWidth: "180px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{record.suggestion}</p>
    },
    {
      title: "Người tạo",
      dataIndex: "",
      key: "create_by_name",
      render: (_, record) => <Row gutter={8}>
        <Col>
          <Avatar src={<Image src={record.create_by.avatar || ""} alt="icon user" />} size={36} />
        </Col>
        <Col>
          {record.create_by.name}
        </Col>
      </Row>
    },
    {
      title: "Diểm",
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
          <Switch defaultChecked />
        </Col>
      </Row>
    }
  ]

  return (
    <Card className='custom-card' title="Quản lý thử thách">
      <Table
        columns={columns}
        dataSource={fakeData}
      />
    </Card>
  )
}

export default AdminSite