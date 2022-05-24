import React from "react";
import { Form, Button, Col, Input, Select, Row } from "antd";
import { useDispatch } from "react-redux";
import { searchInHome } from "../../../redux/actions/challenges";

const SearchChallenges = ({ currentPage }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSearch = () => {
    form.validateFields().then((data) => {
      let url = "/challenges";
      if (data?.title) {
        url += `?title=${data.title}`;
        if (data?.rank) {
          url += `&rank=${data.rank}`;
        }
        if (currentPage) {
          url += `&page=${currentPage}`;
        }
      }
      if (data?.rank && !data?.title) {
        url += `?rank=${data.rank}`;
        if (currentPage) {
          url += `&page=${currentPage}`;
        }
      }
      if (!data?.rank && !data?.title && currentPage) {
        url += `?page=${currentPage}`;
      }
      dispatch(searchInHome(url));
    });
  };
  return (
    <Form
      layout="vertical"
      form={form}
      autoComplete="off"
      style={{ width: "100%", marginTop: 26 }}
    >
      <Row gutter={16} justify="center">
        <Col span={7}>
          <Form.Item name="title">
            <Input placeholder="Điền tên thử thách" />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item name="rank">
            <Select placeholder="Hãy chọn Rank" allowClear>
              <Select.Option value={1}>Dễ</Select.Option>
              <Select.Option value={2}>Trung bình</Select.Option>
              <Select.Option value={3}>Khó</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button onClick={handleSearch}>Tìm kiếm</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchChallenges;
