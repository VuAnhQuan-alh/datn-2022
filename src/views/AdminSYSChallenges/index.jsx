import {
  Avatar,
  Button,
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
import { Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  adminAcceptChallenge,
  adminDelAChallenge,
  adminGetChallenges,
} from "../../redux/actions/challenges";
import "./index.scss";

const SysChallenges = () => {
  const dispatch = useDispatch();
  const { data: listChallenges, status } = useSelector(
    (store) => store.list_challenges
  );
  const { status: statusAction } = useSelector(
    (store) => store.action_challenge
  );

  const [dataChallenge, setDataChallenge] = useState([]);

  useEffect(() => {
    dispatch(adminGetChallenges());
  }, [dispatch]);
  useEffect(() => {
    if (status === "success" && listChallenges.length) {
      const result = listChallenges?.map((item, idx) => ({
        key: idx,
        stt: ++idx,
        ...item,
      }));
      setDataChallenge(result);
    }
  }, [status, listChallenges]);

  const handleAcceptChallenges = (id) => {
    dispatch(adminAcceptChallenge(id))
      .then(() => {
        if (statusAction === "success") {
          message.success("Cập nhật thử thách thành công.");
          dispatch(adminGetChallenges());
        } else {
          message.error("Cập nhật thất bại.");
        }
      })
      .catch(() => message.error("Cập nhật thất bại."));
  };

  const handleDeleteChallenge = (id) => {
    dispatch(adminDelAChallenge(id)).then(() => {
      if (statusAction === "success") {
        message.success("Xoá thử thách thành công.");
        dispatch(adminGetChallenges());
      } else {
        message.error("Xoá thử thách thất bại.");
      }
    });
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      align: "center",
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
      render: (_, record) => (
        <Row gutter={8}>
          <Col>
            <Avatar
              src={
                <Image
                  src={
                    record.created_by?.avatar ||
                    `https://joeschmoe.io/api/v1/${record.stt}`
                  }
                  alt="icon user"
                />
              }
              size={36}
            />
          </Col>
          <Col>{record.created_by?.name}</Col>
        </Row>
      ),
    },
    {
      title: "Điểm",
      dataIndex: "score",
      key: "score",
      align: "center",
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      align: "center",
    },
    {
      title: "Thao tác",
      dataIndex: "",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Row gutter={12} justify="center" align="middle">
          <Col>
            <Popconfirm
              title="Bạn muốn xoá thử thách này?"
              onConfirm={() => handleDeleteChallenge(record._id)}
              okText="Đồng ý"
              cancelText="Huỷ"
            >
              <Button icon={<Trash2 size={16} />} />
            </Popconfirm>
          </Col>
          <Col>
            <Popconfirm
              title="Cập nhật trạng thái ẩn hiện của thử thách này?"
              onConfirm={() => handleAcceptChallenges(record._id)}
              okText="Có"
              cancelText="Huỷ"
            >
              <Switch checked={record.status === 1} />
            </Popconfirm>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <Card className="custom-card" title="Quản lý thử thách">
      <Table columns={columns} dataSource={dataChallenge} />
    </Card>
  );
};

export default SysChallenges;
