import { Card, Table } from "antd";
import React from "react";
import "./index.scss";

const columns = [
  {
    title: "Người chơi",
    dataIndex: "name",
    key: "name",
    align: "left",
  },
  {
    title: "Hạng",
    dataIndex: "",
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
  return (
    <Card className="custom-card" title="Xếp hạng người chơi">
      <Table columns={columns} dataSource={[]} />
    </Card>
  );
};

export default RankBoard;
