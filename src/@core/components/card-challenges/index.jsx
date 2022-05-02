import {
  Avatar,
  Card,
  Col,
  Divider,
  Image,
  Row,
  Tooltip,
  Typography,
} from "antd";
import React from "react";
import {
  Archive,
  Award,
  Bookmark,
  Check,
  MessageSquare,
  Star,
  Sun,
} from "react-feather";
import { CustomButton, CustomIconChallenge } from "..";
import "./index.scss";

const sizeIcon = 20;

const CardChallenge = ({ data }) => {
  console.log(data)
  return (
    <>
      {data?.map((item, idx) => (
        <Card className="custom-card-challenge">
          <Row gutter={16}>
            <Col>
              <Avatar
                src={<Image src={`https://joeschmoe.io/api/v1/random${idx}`} />}
                size={72}
              />
            </Col>
            <Col>
              <Row>
                <Typography.Title level={5}>{item?.created_by.name}</Typography.Title>&nbsp;
                <Typography>01/12/2021</Typography>
              </Row>
              <Row>
                <Typography.Title level={3}>{item?.title}</Typography.Title>
              </Row>
            </Col>
            <Col flex="auto" align="end">
              <CustomButton text="Giải bài này" href={`/challenge/${item?._id}/detail`} />
            </Col>
          </Row>
          <Divider style={{ margin: "12px 0", borderTop: "2px solid #0000001a" }} />
          <Row gutter={26} style={{ cursor: "default" }} align="middle">
            <Col>
              <CustomIconChallenge level="B" />
            </Col>
            <Col>
              <Tooltip placement="bottom" title="Điểm">
                <Star size={sizeIcon} /> {item?.score}
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="bottom" title="Tỉ lệ hoàn thành">
                <Check size={sizeIcon} /> 8%
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="bottom" title="Tỉ lệ nhận cup">
                <Award size={sizeIcon} /> 2%
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="bottom" title="Thảo luận">
                <MessageSquare size={sizeIcon} /> 1
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="bottom" title="Bookmark">
                <Bookmark size={sizeIcon} /> 3
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="bottom" title="Lời giải">
                <Archive size={sizeIcon} /> 1
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="bottom" title="Có gợi ý lời giải">
                <Sun size={sizeIcon} color="#7367f0" />
              </Tooltip>
            </Col>
          </Row>
        </Card>
      ))}
    </>

  );
};

export default CardChallenge;
