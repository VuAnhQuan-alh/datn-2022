import { Card, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userGetChallengesJoined } from "../../../../redux/actions/challenges";

const columns = [
  {
    title: "Tên challenge",
    dataIndex: "name",
    align: "left",
    key: "name",
  },
  {
    title: "Điểm",
    dataIndex: "score",
    align: "center",
    key: "score",
  },
  {
    title: "Thời gian",
    dataIndex: "time_join",
    key: "time",
    align: "left",
  },
];

const ChallengesJoined = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.challenges_joined);
  const [dataChallenges, setDataChallenges] = useState([]);

  useEffect(() => {
    dispatch(userGetChallengesJoined());
  }, [dispatch]);
  useEffect(() => {
    setDataChallenges(data);
  }, [data]);

  return (
    <Card className="custom-card" title="Thử thách của tôi">
      <Table columns={columns} dataSource={dataChallenges} />
    </Card>
  );
};

export default ChallengesJoined;
