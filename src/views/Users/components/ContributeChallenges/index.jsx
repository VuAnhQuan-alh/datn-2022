import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { Button, Checkbox, Col, Form, Input, message, Row, Select, Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Plus, Send, Trash2, X } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { CustomButton } from '../../../../@core/components'
import { getAChallenge, createAChallenge } from '@store/actions/challenges'
import { handleIdChallenge } from '@store/actions/id'
import './index.scss'

const { Option } = Select;

const ContributeChallenge = ({ setActiveKey }) => {
  const dispatch = useDispatch()
  const { data, status } = useSelector(store => store.action_challenge)
  const { id, active } = useSelector(store => store.handle_id)

  const [form] = Form.useForm()
  const [description, setDescription] = useState(null)
  const [suggestion, setSuggestion] = useState(null)

  useEffect(() => {
    if (active && status) {
      dispatch(getAChallenge(id))
      form.setFieldsValue({
        title: data?.title,
        score: data?.score
      })
      setDescription(data?.description)
      setSuggestion(data?.suggestion)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const handleSubmit = (e) => {
    form.validateFields().then(data => {
      const result = {
        title: data.title,
        description: description,
        description_en: description,
        suggestion: suggestion,
        suggestion_en: suggestion,
        name_function: data.name_function,
        output_type: data.output_type,
        params: data.params.map((item, idx) => ({
          name: item.name,
          type: item.type,
          index: ++idx
        })),
        score: +data.score,
        rank: Math.ceil(+data.score / 100),
        run_limit_seconds: +data.run_limit_seconds,
        run_limit_memory: +data.run_limit_memory,
        test_case: data.test_case.map(item => ({
          input: [{
            name: item.name,
            value: JSON.stringify(item.value.split(" "))
          }],
          expect: item.expect,
          hidden: item.hidden ? true : false
        }))
      }
      dispatch(createAChallenge(result))
        .then(() => {
          message.success('Thêm mới thử thách thành công!')
          if (active) dispatch(handleIdChallenge(null, false))
          setActiveKey('my-challenges')
        })
        .catch(() => {
          message.error('Thêm mới thử thách thất bại!')
        })
    })
  }

  return (
    <Row className='custom-contribute-challenges'>
      <Form layout='vertical' autoComplete='off' form={form}>
        <Row>
          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[
              {
                required: true,
                message: "Hãy điền tiêu đề của thuật toán"
              }
            ]}
          >
            <Input placeholder='Hãy nhập tiêu đề bằng tiếng Anh' />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item
            label="Mô tả"
          >
            <CKEditor
              editor={ClassicEditor}
              data={description || ''}
              onBlur={(event, editor) => {
                const data = editor.getData()
                setDescription(data)
              }}
            />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Gợi ý lời giải">
            <CKEditor
              editor={ClassicEditor}
              data={suggestion || ''}
              onBlur={(event, editor) => {
                const data = editor.getData()
                setSuggestion(data)
              }}
            />
          </Form.Item>
        </Row>
        <Row>

        </Row>
        <Row gutter={32}>
          <Col>
            <Typography.Title level={5}>Dữ liệu đầu vào</Typography.Title>
            <Form.List name="params">
              {(fields, { add, remove }) => (
                <>
                  <Row>
                    <Form.Item>
                      <CustomButton onClick={add} icon={<Plus size={14} />} text="Thêm mới arguments" />
                    </Form.Item>
                  </Row>
                  <Row>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space key={key}>
                        <Row gutter={16} align="middle">
                          <Col span={10}>
                            <Form.Item label="Tên biến" name={[name, "name"]} {...restField}>
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={10}>
                            <Form.Item label="Kiểu dự liệu" name={[name, "type"]} {...restField}>
                              <Select style={{ width: "180px" }}>
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
                          <Col span={4}>
                            &nbsp;<Trash2 onClick={() => remove(name)} />
                          </Col>
                        </Row>
                      </Space>
                    ))}
                  </Row>
                </>
              )}
            </Form.List>

          </Col>

        </Row>
        <Row>
          <Col>
            <Typography.Title level={5}>Dữ liệu đầu ra</Typography.Title>
            <Row gutter={16}>
              <Col>
                <Form.Item label="Kiểu dự liệu" name="output_type">
                  <Select style={{ width: "180px" }}>
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
              <Col>
                <Form.Item label="Điểm" name="score">
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Tên function" name="name_function">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={9}>
            <Form.Item label="Giới hạn CPU" initialValue={5} name="run_limit_seconds">
              <Input addonAfter={<>Giây</>} />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item label="Giới hạn bộ nhớ" initialValue={256} name="run_limit_memory">
              <Input addonAfter={
                <Select defaultValue="MB" style={{ width: 70 }}>
                  <Select.Option value="MB">MB</Select.Option>
                  <Select.Option value="KB">KB</Select.Option>
                </Select>
              } />
            </Form.Item>
          </Col>
        </Row>
        <Row className='custom-test-case'>
          <Form.List name="test_case">
            {(fields, { add, remove }) => (
              <>
                <Row>
                  <Typography.Title level={5}>Test Cases</Typography.Title>
                  <Form.Item>
                    <CustomButton onClick={add} icon={<Plus size={14} />} text="Thêm mới test case" />
                  </Form.Item>
                </Row>
                <Row>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key}>
                      <Row gutter={16} align="middle">
                        <Col span={20}>
                          <Row gutter={16}>
                            <Col span={4}>
                              <Form.Item
                                {...restField}
                                name={[name, "name"]}
                                label="Tên biến"
                              >
                                <Input placeholder='Điền tên biến' />
                              </Form.Item>
                            </Col>
                            <Col span={16}>
                              <Form.Item
                                {...restField}
                                name={[name, "value"]}
                                label="Giá trị"
                              >
                                <Input placeholder='Điền giá trị truyền vào' />
                              </Form.Item>
                            </Col>
                            <Col span={3}>
                              <Form.Item label="Test case ẩn" name={[name, "hidden"]} valuePropName="checked">
                                <Checkbox />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row gutter={16}>
                            <Col span={23}>
                              <Form.Item name={[name, "expect"]} label="Kết quả mong muốn">
                                <Input.TextArea />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={4}>
                          <Trash2 onClick={() => remove(name)} />
                        </Col>
                      </Row>
                    </Space>
                  ))}
                </Row>
              </>
            )}
          </Form.List>
        </Row>
        <Form.Item>
          <Row justify='center' gutter={16} style={{ marginTop: 36 }}>
            <Col>
              <CustomButton icon={<Send size={14} />} text="Gửi để duyệt" onClick={handleSubmit} />
            </Col>
            <Col>
              <Button icon={<X size={14} />}>Huỷ bỏ</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Row>
  )
}

export default ContributeChallenge