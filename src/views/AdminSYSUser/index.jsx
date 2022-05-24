import {
  Avatar,
  Card,
  Col,
  Image,
  message,
  Popconfirm,
  Row,
  Switch,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { UserAPI } from "../../api";

const SysUser = () => {
  const [dataUser, setDataUser] = useState();
  const getDataUser = async () => {
    await UserAPI.getListUser()
      .then((response) => {
        if (response.status === 200) {
          const result = response.data.data?.map((item, idx) => {
            const { avatar, email, name, rank, score, _id, verified } = item;
            return {
              stt: ++idx,
              key: idx,
              avatar,
              email,
              name,
              rank,
              score,
              _id,
              verified,
            };
          });
          setDataUser(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const acceptUser = async (id) => {
    await UserAPI.inactiveUser(id)
      .then((response) => {
        if (response.status === 200) {
          message.success("Cập nhật thành công!");
          getDataUser();
        } else {
          message.error("Cập nhật không thành công.");
        }
      })
      .catch(() => {
        message.error("Lỗi hệ thống.");
      });
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      align: "center",
    },
    {
      title: "Họ tên",
      dataIndex: "",
      key: "name",
      align: "left",
      render: (_, record) => (
        <Row gutter={8}>
          <Col>
            <Avatar
              src={
                <Image
                  src={
                    record?.avatar ||
                    `https://joeschmoe.io/api/v1/${record.stt}`
                  }
                  alt="icon user"
                />
              }
              size={36}
            />
          </Col>
          <Col>{record.name}</Col>
        </Row>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "mail",
      align: "left",
    },
    {
      title: "Level",
      dataIndex: "rank",
      key: "rank",
      align: "center",
    },
    {
      title: "Điểm",
      dataIndex: "score",
      key: "score",
      align: "center",
    },
    {
      title: "Thao tác",
      dataIndex: "",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Row gutter={16} justify="center" align="middle">
          <Col>
            <Popconfirm
              title="Thay đổi xác thực người dùng?"
              onConfirm={() => acceptUser(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <Switch checked={record.verified} />
            </Popconfirm>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <Card className="custom-card" title="Quản lý người dùng">
      <Table columns={columns} dataSource={dataUser || []} />
    </Card>
  );
};

export default SysUser;
