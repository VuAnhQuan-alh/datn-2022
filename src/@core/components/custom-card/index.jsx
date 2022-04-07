import { Card, Col, Divider, Row, Tooltip } from "antd";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import {
  Archive,
  Award,
  Bookmark,
  Check,
  MessageSquare,
  Star,
} from "react-feather";
import CustomButton from "../button-cus";
import CustomTitle from "../title-card";
import "./index.scss";

const CustomCard = ({
  children,
  title,
  ranks,
  sizeIcon,
  textBtn,
  ...config
}) => {
  return (
    <Card className="custom-card" {...config} title={title}>
      {!isEmpty(ranks) &&
        ranks.map((rank, idx) => (
          <Col key={idx}>
            <CustomTitle places={rank?.places} text={rank?.text} justify="start" />
            <Row style={{ alignItems: "center" }} key={idx}>
              <Col>
                <Row gutter={20} style={{ cursor: "default" }}>
                  <Col>
                    <Tooltip placement="bottom" title="Điểm">
                      <Star size={sizeIcon} /> {rank?.point}
                    </Tooltip>
                  </Col>
                  <Col>
                    <Tooltip placement="bottom" title="Tỉ lệ hoàn thành">
                      <Check size={sizeIcon} /> {rank?.pass}
                    </Tooltip>
                  </Col>
                  <Col>
                    <Tooltip placement="bottom" title="Tỉ lệ nhận cup">
                      <Award size={sizeIcon} /> {rank?.cup}
                    </Tooltip>
                  </Col>
                  <Col>
                    <Tooltip placement="bottom" title="Thảo luận">
                      <MessageSquare size={sizeIcon} /> {rank?.comment}
                    </Tooltip>
                  </Col>
                  <Col>
                    <Tooltip placement="bottom" title="Bookmark">
                      <Bookmark size={sizeIcon} /> {rank?.save}
                    </Tooltip>
                  </Col>
                  <Col>
                    <Tooltip placement="bottom" title="Lời giải">
                      <Archive size={sizeIcon} /> {rank?.answer}
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
              <Col flex="auto" style={{ textAlign: "end" }}>
                <CustomButton text={textBtn} href="/challenge/142a/detail" />
              </Col>
            </Row>
            {ranks.length > 1 && idx !== ranks.length - 1 && <Divider />}
          </Col>
        ))}
      {children}
    </Card>
  );
};

CustomCard.defaultProps = {
  title: "",
  sizeIcon: 20,
  children: <></>,
  textBtn: "Giải bài này",
  config: null,
  ranks: [],
};
CustomCard.prototype = {
  textBtn: PropTypes.string,
  sizeIcon: PropTypes.number,
  children: PropTypes.element,
  config: PropTypes.any,
  title: PropTypes.string,
  ranks: PropTypes.array,
};

export default CustomCard;
