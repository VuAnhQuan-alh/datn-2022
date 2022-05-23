import { getAChallenge } from "@store/actions/challenges";
import { Card, Col, List, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { Star } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { CustomButton, CustomIconChallenge } from "../../@core/components";
import { convertRank } from "../../utility/Utils";
import "./index.scss";

const DetailChallenge = () => {
  const dispatch = useDispatch();
  const { data: detailChallenge } = useSelector(
    (store) => store.list_challenges
  );
  const { data: dataUser, status } = useSelector(
    (store) => store.user_reducers
  );
  const history = useHistory();
  if (dataUser && status === null) {
    history.push("/login");
  }

  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  useEffect(() => {
    dispatch(getAChallenge(id));
  }, [dispatch, id]);

  const Rank = (rank) => {
    switch (rank) {
      case 1:
        return "Dễ";
      case 2:
        return "TB";
      case 3: 
        return "Khó"
      default:
        return "TB";
    }
  };

  const data = [
    {
      id: 1,
      title: "Dễ",
    },
    {
      id: 2,
      title: "Trung bình",
    },
    {
      id: 3,
      title: "Khó",
    },
  ];

  return (
    <Row gutter={24}>
      <Col span={4}>
        <Card className="custom-card-detail-challenge">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <CustomIconChallenge
                      level={Rank(item.id)}
                      fontSize="little"
                    />
                  }
                  title={<Link to="/">Xem ngay</Link>}
                />
              </List.Item>
            )}
          />
        </Card>
      </Col>
      <Col span={20}>
        <Card className="custom-card-header-challenge">
          <Row gutter={24}>
            <Col>
              <Typography.Title level={1}>
                {detailChallenge?.title}
              </Typography.Title>
            </Col>
            <Col>
              <Star size={24} />
              &nbsp;
              <Typography.Title level={4}>
                {detailChallenge?.score}
              </Typography.Title>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <CustomIconChallenge
                level={convertRank(detailChallenge?.rank)}
                size="small"
                fontSize="little"
              />
              <CustomButton href={`/challenge/${id}/solve`} />
            </Col>
            <Col span={18}>
              <div
                dangerouslySetInnerHTML={{
                  __html: detailChallenge?.description,
                }}
              ></div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default DetailChallenge;
