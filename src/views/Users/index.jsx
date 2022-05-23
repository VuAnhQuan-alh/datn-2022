import {
  Button,
  Input,
  Avatar,
  Card,
  Col,
  Row,
  Tabs,
  Typography,
  Modal,
  Form,
} from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ContributeChallenges, MyChallenges } from "./components";
import ChallengesJoined from "./components/ChallengesJoined";

const Users = () => {
  const [activeKey, setActiveKey] = useState("joined-challenges");
  const { data } = useSelector((store) => store.user_reducers);
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    setOpenModal(false);
  };
  const handleUpdate = () => {
    form.validateFields().then((data) => {
      console.log(data);
    });
  };

  return (
    <Col span={24}>
      <Row style={{ marginBottom: 22 }}>
        <Card style={{ width: "100%" }}>
          <Row gutter={56}>
            <Col>
              <Avatar src="https://joeschmoe.io/api/v1/random" size={128} />
            </Col>
            <Col>
              <Typography.Title level={2}>{data?.name}</Typography.Title>
              <Typography.Title level={4}>Điểm: {data?.score}</Typography.Title>
            </Col>
            <Col flex="auto" style={{ textAlign: "end" }}>
              <Button onClick={() => setOpenModal(true)}>Chỉnh sửa</Button>
            </Col>
          </Row>
        </Card>
      </Row>
      <Modal
        title="Profile"
        visible={openModal}
        onOk={handleUpdate}
        onCancel={handleCancel}
      >
        <Form layout="vertical" autoComplete="off" form={form}>
          <Form.Item
            label="Tên người dùng"
            name="name"
            rules={[{ required: true, message: "Điền tên đầy đủ!" }]}
            initialValue={data?.name}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Row>
        <Card style={{ width: "100%" }}>
          <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
            <Tabs.TabPane tab="Thử thách đã tham gia" key="joined-challenges">
              <ChallengesJoined />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Thử thách của tôi" key="my-challenges">
              <MyChallenges setActiveKey={setActiveKey} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đóng góp thử thách" key="contribute-challenges">
              <ContributeChallenges setActiveKey={setActiveKey} />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Row>
    </Col>
  );
};

export default Users;
