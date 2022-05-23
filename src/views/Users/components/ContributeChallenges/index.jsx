import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { createAChallenge, getAChallenge } from "@store/actions/challenges";
import { handleIdChallenge } from "@store/actions/id";
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Plus, Send, Trash2, X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../../@core/components";
import "./index.scss";

const { Option } = Select;

const ContributeChallenge = ({ setActiveKey }) => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((store) => store.list_challenges);
  const { id, active } = useSelector((store) => store.handle_id);

  const [form] = Form.useForm();
  const [description, setDescription] = useState(null);
  const [suggestion, setSuggestion] = useState(null);

  const [scopePoint, setScopePoint] = useState({ min: 1, max: 50 });

  useEffect(() => {
    if (active && status) {
      dispatch(getAChallenge(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    if (id && typeof data === "object") {
      console.log(data);
      form.setFieldsValue({
        title: data?.title,
        score: data?.score,
        rank: data?.rank,
        run_limit_seconds: data?.run_limit_seconds,
        run_limit_memory: data?.run_limit_memory,
      });
      setScopePoint({
        min: data?.rank === 1 ? 1 : data?.rank === 2 ? 51 : 101,
        max: data?.rank === 1 ? 50 : data?.rank === 2 ? 100 : 150,
      });
      setDescription(data?.description);
      setSuggestion(data?.suggestion);
    }
    return function () {
      form.resetFields();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, data]);

  const handleSubmit = (e) => {
    form.validateFields().then((data) => {
      const { test_case, list_params, ...argus } = data;
      const params = list_params.map((item, idx) => ({
        name: item.name,
        type: item.type,
        index: idx + 1,
      }));

      const mapTest = test_case.map((item, idx) => {
        const input = params.map((_, index) => {
          const name = item[`name${index + 1}`];
          const value = item[`value${index + 1}`];
          return { name, value };
        });
        return {
          input,
          expect: item.expect,
          hidden: item.hidden ? true : false,
        };
      });
      const result = {
        test_case: mapTest,
        ...argus,
        params: params,
        description: description,
        description_en: description,
        suggestion: suggestion,
        suggestion_en: suggestion,
      };
      // console.log(result);

      dispatch(createAChallenge(result))
        .then(() => {
          message.success("Thêm mới thử thách thành công!");
          if (active) dispatch(handleIdChallenge(null, false));
          setActiveKey("my-challenges");
        })
        .catch(() => {
          message.error("Thêm mới thử thách thất bại!");
        });
    });
  };

  return (
    <Row className="custom-contribute-challenges">
      <Form layout="vertical" autoComplete="off" form={form}>
        <Row>
          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[
              {
                required: true,
                message: "Hãy điền tiêu đề của thuật toán",
              },
            ]}
          >
            <Input placeholder="Hãy nhập tiêu đề" />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Mô tả">
            <CKEditor
              editor={ClassicEditor}
              data={description || ""}
              onBlur={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
            />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Gợi ý lời giải">
            <CKEditor
              editor={ClassicEditor}
              data={suggestion || ""}
              onBlur={(event, editor) => {
                const data = editor.getData();
                setSuggestion(data);
              }}
            />
          </Form.Item>
        </Row>

        <Typography.Title level={5}>Dữ liệu đầu vào</Typography.Title>
        <Form.List name={"list_params"}>
          {(fields, { add: add_pr, remove: remove_pr }) => (
            <>
              <Row gutter={16}>
                <Col span={9}></Col>
                <Col>
                  <Button onClick={add_pr}>Thêm argument</Button>
                </Col>
              </Row>
              {fields.map(({ key: key_pr, name: name_pr }) => (
                <Col span={24} key={key_pr}>
                  <Row gutter={16} align="middle">
                    <Col span={4}>
                      <Form.Item name={[name_pr, "name"]} label="Tên biến">
                        <Input placeholder="Điền tên biến" />
                      </Form.Item>
                    </Col>
                    <Col span={5}>
                      <Form.Item label="Kiểu dự liệu" name={[name_pr, "type"]}>
                        <Select>
                          <Option value="1">Integer</Option>
                          <Option value="2">Long</Option>
                          <Option value="3">Float</Option>
                          <Option value="4">Char</Option>
                          <Option value="5">String</Option>
                          <Option value="6">Boolean</Option>
                          <Option value="7">Array Of Integers</Option>
                          <Option value="8">Array Of Longs</Option>
                          <Option value="9">Array Of Floats</Option>
                          <Option value="10">Array Of Chars</Option>
                          <Option value="11">Array Of Strings</Option>
                          <Option value="12">Array Of Booleans</Option>
                          <Option value="13">Matrix Of Integers</Option>
                          <Option value="14">Matrix Of Longs</Option>
                          <Option value="15">Matrix Of Floats</Option>
                          <Option value="16">Matrix Of Chars</Option>
                          <Option value="17">Matrix Of Strings</Option>
                          <Option value="18">Matrix Of Booleans</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col style={{ margin: "0 18px" }}>
                      <Trash2 onClick={() => remove_pr(name_pr)} />
                    </Col>
                  </Row>
                </Col>
              ))}
            </>
          )}
        </Form.List>

        <Typography.Title level={5}>Dữ liệu đầu ra</Typography.Title>
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item label="Kiểu dự liệu" name="output_type">
              <Select>
                <Option value="1">Integer</Option>
                <Option value="2">Long</Option>
                <Option value="3">Float</Option>
                <Option value="4">Char</Option>
                <Option value="5">String</Option>
                <Option value="6">Boolean</Option>
                <Option value="7">Array Of Integers</Option>
                <Option value="8">Array Of Longs</Option>
                <Option value="9">Array Of Floats</Option>
                <Option value="10">Array Of Chars</Option>
                <Option value="11">Array Of Strings</Option>
                <Option value="12">Array Of Booleans</Option>
                <Option value="13">Matrix Of Integers</Option>
                <Option value="14">Matrix Of Longs</Option>
                <Option value="15">Matrix Of Floats</Option>
                <Option value="16">Matrix Of Chars</Option>
                <Option value="17">Matrix Of Strings</Option>
                <Option value="18">Matrix Of Booleans</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="Tên function" name="name_function">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={4}>
            <Form.Item label="Rank" name="rank" initialValue={1}>
              <Select
                onChange={(value) =>
                  setScopePoint({
                    min: value === 1 ? 1 : value === 2 ? 51 : 101,
                    max: value === 1 ? 50 : value === 2 ? 100 : 150,
                  })
                }
              >
                <Option value={1}>Dễ</Option>
                <Option value={2}>Trung bình</Option>
                <Option value={3}>Khó</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="Điểm" name="score">
              <InputNumber
                style={{ width: "100%" }}
                min={scopePoint.min}
                max={scopePoint.max}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              label="Giới hạn CPU"
              initialValue={5}
              name="run_limit_seconds"
            >
              <Input addonAfter={<>Giây</>} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              label="Giới hạn bộ nhớ"
              initialValue={256}
              name="run_limit_memory"
            >
              <Input addonAfter={<>MB</>} />
            </Form.Item>
          </Col>
        </Row>
        <Row className="custom-test-case">
          <Form.List name="test_case">
            {(fields, { add, remove }) => (
              <>
                <Row>
                  <Form.Item>
                    <CustomButton
                      onClick={add}
                      icon={<Plus size={14} />}
                      text="Thêm mới test case"
                    />
                  </Form.Item>
                </Row>
                <Row>
                  {fields.map(({ key, name }) => (
                    <Col span={24} key={key}>
                      {form.getFieldValue()?.list_params?.map((item, idx) => (
                        <Row gutter={16}>
                          <Col span={4}>
                            <Form.Item
                              label="Biến đầu vào"
                              name={[name, `name${idx + 1}`]}
                              initialValue={item.name}
                            >
                              <Input disabled />
                            </Form.Item>
                          </Col>
                          <Col span={5}>
                            <Form.Item
                              label="Giá trị"
                              name={[name, `value${idx + 1}`]}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                      ))}

                      <Row gutter={16} align="bottom">
                        <Col span={14}>
                          <Row gutter={16}>
                            <Col span={16}>
                              <Form.Item
                                name={[name, "expect"]}
                                label="Kết quả mong muốn"
                              >
                                <Input.TextArea rows={1} />
                              </Form.Item>
                            </Col>
                            <Col span={4}>
                              <Form.Item
                                style={{ textAlign: "center" }}
                                label="Ẩn test case"
                                name={[name, "hidden"]}
                                valuePropName="checked"
                              >
                                <Checkbox />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={4}>
                          <Button onClick={() => remove(name)}>
                            Xoá test case
                          </Button>
                        </Col>
                      </Row>
                      <Divider />
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </Form.List>
        </Row>
        <Form.Item>
          <Row justify="center" gutter={16} style={{ marginTop: 36 }}>
            <Col>
              <CustomButton
                icon={<Send size={14} />}
                text="Gửi để duyệt"
                onClick={handleSubmit}
                // onClick={() => console.log(form.getFieldValue())}
              />
            </Col>
            <Col>
              <Button icon={<X size={14} />}>Huỷ bỏ</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default ContributeChallenge;
