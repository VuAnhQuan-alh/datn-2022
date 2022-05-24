import { Col, Divider, Menu, Row, Typography } from "antd";
import React, { useState } from "react";
import {
  Award,
  Bookmark,
  Box,
  Check,
  Code,
  FileText,
  HelpCircle,
  MessageCircle,
  MessageSquare,
  Share2,
  Star,
  Sun,
  User,
} from "react-feather";
import { CustomIconChallenge } from "../../../../@core/components";
import { convertRank } from "../../../../utility/Utils";
import "./index.scss";

const TabListCase = ({ detail }) => {
  const [subKey, setSubKey] = useState("sub-1");
  const contentSubs = {
    "sub-1": (
      <div dangerouslySetInnerHTML={{ __html: detail?.description }}></div>
    ),
    // "sub-2": <>Lorem, ipsum.</>,
    // "sub-3": <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>,
    // "sub-4": (
    //   <>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis
    //     tempore vero.
    //   </>
    // ),
    "sub-5": (
      <div dangerouslySetInnerHTML={{ __html: detail?.suggestion }}></div>
    ),
    "sub-6": <>Lorem ipsum dolor sit amet consectetur.</>,
    "sub-7": <>Lorem</>,
    "sub-8": (
      <>
        <Typography>
          Hệ thống sẽ chấm điểm dựa trên giá trị trả về của hàm cho trước, đầu
          vào và đầu ra chính là các tham số và giá trị trả về của hàm. Do đó,
          bạn chỉ cần hoàn thiện hàm cho trước, không cần phải thực hiện nhập
          xuất dữ liệu. Ví dụ nếu bài tập yêu cầu viết hàm trả về tổng 2 số
          nguyên thì bạn có thể làm như sau:
        </Typography>
        <Typography>
          - Đối với ngôn ngữ Javascript: <br />
          {`function sumNum(a, b){ return a+b; }`}
        </Typography>
        <Typography>
          - Đối với ngôn ngữ PHP: <br />
          {`function sumNum($a, $b){return $a+$b;}`}
        </Typography>
        <Typography>
          - Đối với ngôn ngữ Python3: <br />
          {`def sumNum(a, b){return a+b;`}
        </Typography>
        <Typography>
          - Đối với ngôn ngữ Java: <br />
          {`int sumNum(int a, int b){return a + b;}`}
        </Typography>
      </>
    ),
  };

  return (
    <Row gutter={8}>
      <Col span={5}>
        <Menu
          defaultSelectedKeys={["sub-1"]}
          mode="inline"
          inlineCollapsed={true}
          onSelect={({ key }) => {
            setSubKey(key);
          }}
        >
          <Menu.Item key="sub-1" icon={<FileText size={18} />}>
            Mô tả
          </Menu.Item>
          {/* <Menu.Item key="sub-2" icon={<MessageCircle size={18} />}>
            Thảo luận
          </Menu.Item>
          <Menu.Item key="sub-3" icon={<Code size={18} />}>
            Bài giải của bạn
          </Menu.Item>
          <Menu.Item key="sub-4" icon={<Share2 size={18} />}>
            Bài giải được chia sẻ
          </Menu.Item> */}
          <Menu.Item key="sub-5" icon={<Sun size={18} />}>
            Giợi ý lời giải
          </Menu.Item>
          {/* <Menu.Item key="sub-6" icon={<Box size={18} />}>
            Lời giải
          </Menu.Item>
          <Menu.Item key="sub-7" icon={<User size={18} />}>
            Lời giải
          </Menu.Item> */}
          <Menu.Item key="sub-8" icon={<HelpCircle size={18} />}>
            Trợ giúp
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={19}>
        <Row gutter={10} align="middle" className="custom-header-tab">
          <Col>
            <CustomIconChallenge
              level={convertRank(detail?.rank)}
              size="small"
              fontSize="little"
            />
          </Col>
          <Col>
            <Typography.Title level={5}>{detail?.title}</Typography.Title>
          </Col>
        </Row>
        <Row gutter={8} align="middle">
          <Col>
            <Star size={14} /> {detail?.score}
          </Col>
          <Col>
            <Check size={14} /> 0%
          </Col>
          <Col>
            <Award size={14} /> 0%
          </Col>
          <Col>
            <MessageSquare size={14} /> 0
          </Col>
          <Col>
            <Bookmark size={14} /> 0
          </Col>
        </Row>
        <Divider style={{ margin: "6px 0px 10px" }} />
        {contentSubs[subKey]}
      </Col>
    </Row>
  );
};

export default TabListCase;
