import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
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
  Space,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Plus, Send, Trash2, X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../../@core/components";
import { getAChallenge, createAChallenge } from "@store/actions/challenges";
import { handleIdChallenge } from "@store/actions/id";
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
    if (id && data.length === 1) {
      console.log(data);
      form.setFieldsValue({
        title: data?.title,
        score: data?.score,
      });
      setDescription(data?.description);
      setSuggestion(data?.suggestion);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, data]);

  const handleSubmit = (e) => {
    form.validateFields().then((data) => {
      const { test_case, ...argus } = data;

      let params = [];
      const mapTestCase = test_case.map((item) => {
        const { list_params, hidden, expect } = item;
        const input = list_params.map((param) => {
          const { name, type } = param;
          const value = JSON.stringify(param.value.split(" "));
          return { name, type, value };
        });
        const param = [...input].map((i, idx) => ({
          index: idx + 1,
          name: i.name,
          type: i.type,
        }));
        params = param.reduce((prev, curr) => {
          if (prev.length === 0) return [curr];
          if (
            prev.some(
              (item) =>
                item.index === curr.index &&
                item.name === curr.name &&
                item.type === curr.type
            )
          )
            return [curr];
          const result = [...prev].concat(curr);
          return result;
        }, []);
        return { input, expect, hidden: hidden === true ? true : false };
      });
      const result = {
        ...argus,
        test_case: mapTestCase,
        params,
        description: description,
        description_en: description,
        suggestion: suggestion,
        suggestion_en: suggestion,
      };

      dispatch(createAChallenge(result))
        .then(() => {
          message.success("Th??m m???i th??? th??ch th??nh c??ng!");
          if (active) dispatch(handleIdChallenge(null, false));
          setActiveKey("my-challenges");
        })
        .catch(() => {
          message.error("Th??m m???i th??? th??ch th???t b???i!");
        });
    });
  };

  return (
    <Row className="custom-contribute-challenges">
      <Form layout="vertical" autoComplete="off" form={form}>
        <Row>
          <Form.Item
            label="Ti??u ?????"
            name="title"
            rules={[
              {
                required: true,
                message: "H??y ??i???n ti??u ????? c???a thu???t to??n",
              },
            ]}
          >
            <Input placeholder="H??y nh???p ti??u ?????" />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="M?? t???">
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
          <Form.Item label="G???i ?? l???i gi???i">
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

        <Typography.Title level={5}>D??? li???u ?????u ra</Typography.Title>
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item label="Ki???u d??? li???u" name="output_type">
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
            <Form.Item label="T??n function" name="name_function">
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
                <Option value={1}>D???</Option>
                <Option value={2}>Trung b??nh</Option>
                <Option value={3}>Kh??</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="??i???m" name="score">
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
              label="Gi???i h???n CPU"
              initialValue={5}
              name="run_limit_seconds"
            >
              <Input addonAfter={<>Gi??y</>} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              label="Gi???i h???n b??? nh???"
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
                      text="Th??m m???i test case"
                    />
                  </Form.Item>
                </Row>
                <Row>
                  {fields.map(({ key, name }) => (
                    <Col span={24} key={key}>
                      <Row gutter={16} align="bottom">
                        <Col span={20}>
                          <Form.List name={[name, "list_params"]}>
                            {(fields, { add: add_pr, remove: remove_pr }) => (
                              <>
                                <Row gutter={16}>
                                  <Col span={17}></Col>
                                  <Col>
                                    <Button onClick={add_pr}>
                                      Th??m argument
                                    </Button>
                                  </Col>
                                </Row>
                                {fields.map(
                                  ({ key: key_pr, name: name_pr }) => (
                                    <Space key={key_pr}>
                                      <Row gutter={16} align="middle">
                                        <Col span={5}>
                                          <Form.Item
                                            name={[name_pr, "name"]}
                                            label="T??n bi???n"
                                          >
                                            <Input placeholder="??i???n t??n bi???n" />
                                          </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                          <Form.Item
                                            label="Ki???u d??? li???u"
                                            name={[name_pr, "type"]}
                                          >
                                            <Select>
                                              <Option value="1">Integer</Option>
                                              <Option value="2">Long</Option>
                                              <Option value="3">Float</Option>
                                              <Option value="4">Char</Option>
                                              <Option value="5">String</Option>
                                              <Option value="6">Boolean</Option>
                                              <Option value="7">
                                                Array Of Integers
                                              </Option>
                                              <Option value="8">
                                                Array Of Longs
                                              </Option>
                                              <Option value="9">
                                                Array Of Floats
                                              </Option>
                                              <Option value="10">
                                                Array Of Chars
                                              </Option>
                                              <Option value="11">
                                                Array Of Strings
                                              </Option>
                                              <Option value="12">
                                                Array Of Booleans
                                              </Option>
                                              <Option value="13">
                                                Matrix Of Integers
                                              </Option>
                                              <Option value="14">
                                                Matrix Of Longs
                                              </Option>
                                              <Option value="15">
                                                Matrix Of Floats
                                              </Option>
                                              <Option value="16">
                                                Matrix Of Chars
                                              </Option>
                                              <Option value="17">
                                                Matrix Of Strings
                                              </Option>
                                              <Option value="18">
                                                Matrix Of Booleans
                                              </Option>
                                            </Select>
                                          </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                          <Form.Item
                                            name={[name_pr, "value"]}
                                            label="Gi?? tr???"
                                          >
                                            <Input placeholder="??i???n gi?? tr??? truy???n v??o" />
                                          </Form.Item>
                                        </Col>
                                        <Col style={{ margin: "0 18px" }}>
                                          <Trash2
                                            onClick={() => remove_pr(name_pr)}
                                          />
                                        </Col>
                                      </Row>
                                    </Space>
                                  )
                                )}
                              </>
                            )}
                          </Form.List>

                          <Row gutter={16}>
                            <Col span={11}>
                              <Form.Item
                                name={[name, "expect"]}
                                label="K???t qu??? mong mu???n"
                              >
                                <Input.TextArea rows={1} />
                              </Form.Item>
                            </Col>
                            <Col span={3}>
                              <Form.Item
                                style={{ textAlign: "center" }}
                                label="???n test case"
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
                            Xo?? test case
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
                text="G???i ????? duy???t"
                onClick={handleSubmit}
                // onClick={() => console.log(form.getFieldValue())}
              />
            </Col>
            <Col>
              <Button icon={<X size={14} />}>Hu??? b???</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default ContributeChallenge;
