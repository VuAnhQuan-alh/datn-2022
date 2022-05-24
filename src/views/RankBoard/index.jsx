import { Avatar, Card, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankBoard } from "../../redux/actions/user";
import "./index.scss";

const convertRank = (rank) => {
  switch (rank) {
    case 1:
      return "Basic";
    case 2:
      return "Intermediate";
    case 3:
      return "Advanced";
    case 4:
      return "Expert";
    case 5:
      return "Master";
    case 6:
      return "Grand Master";
    default:
      return "Basic";
  }
};

const RankBoard = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.rank_board);

  useEffect(() => {
    console.log("rank board");
    dispatch(getRankBoard());
  }, [dispatch]);
  const columns = [
    {
      title: "",
      dataIndex: "",
      key: "avatar",
      align: "center",
      width: 120,
      render: (_, record) => (
        <>
          <Avatar
            size={48}
            src={
              record?.avatar || `https://joeschmoe.io/api/v1/${record?.rank}`
            }
          />
        </>
      ),
    },
    {
      title: "Người chơi",
      dataIndex: "name",
      key: "name",
      align: "left",
    },
    {
      title: "Hạng",
      dataIndex: "rank",
      key: "rank",
      align: "center",
      render: (_, record) => (
        <Typography.Title level={5}>
          {convertRank(record?.rank)}
        </Typography.Title>
      ),
    },
    {
      title: "Điểm",
      dataIndex: "score",
      key: "score",
      align: "center",
    },
  ];

  return (
    <Card className="custom-card" title="Xếp hạng người chơi">
      <Table dataSource={[...data] || []} columns={columns} />
    </Card>
  );
};

export default RankBoard;
