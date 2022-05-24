import { Avatar, Card, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankBoard } from "../../redux/actions/user";
import "./index.scss";

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
          src={record?.avatar || `https://joeschmoe.io/api/v1/${record?.rank}`}
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
  },
  {
    title: "Điểm",
    dataIndex: "score",
    key: "score",
    align: "center",
  },
];

const RankBoard = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.rank_board);

  useEffect(() => {
    dispatch(getRankBoard());
  }, [dispatch]);

  return (
    <Card className="custom-card" title="Xếp hạng người chơi">
      <Table columns={columns} dataSource={data || []} />
    </Card>
  );
};

export default RankBoard;
