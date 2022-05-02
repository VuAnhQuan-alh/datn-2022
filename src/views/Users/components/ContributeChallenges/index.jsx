import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { Button, Col, Form, Input, message, Row, Select, Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Send, X, Trash2, Plus } from 'react-feather'
import { useHistory, useLocation } from 'react-router-dom'
import { CustomButton } from '../../../../@core/components'
import ChallengesAPI from '../../../../api/challengesApi'
import './index.scss'

const { Option } = Select;

const ContributeChallenge = () => {
  const [form] = Form.useForm()
  const [description, setDescription] = useState(null)
  const [suggestion, setSuggestion] = useState(null)
  const [detailChallenge, setDetailChallenge] = useState({})

  const history = useHistory()
  const { pathname } = useLocation()
  const urlSplit = pathname.split('/')
  const id = urlSplit.length > 3 ? urlSplit[2] : null

  const getDetailChallenge = async (_id) => {
    await ChallengesAPI.getDetailChallenge(_id)
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data
          setDetailChallenge(result)
          form.setFieldsValue({
            title: result?.title,
            score: result?.score,
          })
          setDescription(result?.description)
          setSuggestion(result?.suggestion)
          console.log(response)
        }
      })
  }

  useEffect(() => {
    if (id) getDetailChallenge(id)
  }, [id])

  const handleSubmit = (e) => {
    form.validateFields().then(data => {
      const result = {
        title: data.title,
        description: description,
        description_en: description,
        suggestion: suggestion,
        suggestion_en: suggestion,
        name_function: "converString",
        output_type: "1",
        params: [
          {
            name: data.params_name,
            type: data.params_type,
            index: 1
          }
        ],
        score: data.score,
        rank: 1,
        run_limit_seconds: 5,
        run_limit_memory: 2000,
        test_case: data.test_case.map(item => ({
          input: [{
            name: item.name,
            value: JSON.stringify(item.value.split(" "))
          }],
          expect: item.expect,
          hidden: false
        }))
      }
      if (id) {
        ; (async () => {
          await ChallengesAPI.updateChallenge(id, result)
            .then(response => {
              if (response.status === 200) {
                message.success("Cập nhật thành công")
                history.push('/my-challenges')
              } else {
                message.error("Cập nhật thất bại")
              }
            })
        })();
      } else {
        ; (async () => {
          await ChallengesAPI.createChallenge(result)
            .then(response => {
              if (response.status === 200) {
                message.success("Tạo mới thành công!")
                history.push('/my-challenges')
              } else {
                message.error("Tạo mới thất bại")
              }
            })
        })();
      }
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
              data={detailChallenge?.description || "Mo ta"}
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
              data={detailChallenge?.suggestion || "loi giai"}
              onBlur={(event, editor) => {
                const data = editor.getData()
                setSuggestion(data)
              }}
            />
          </Form.Item>
        </Row>
        <Row>
          <Col>
            <Form.Item label="Điểm" name="score">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Typography.Title level={5}>Kiểu dự liệu đầu vào</Typography.Title>
        <Row gutter={16}>
          <Col>
            <Form.Item label="Tên biến" name="params_name">
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Kiểu dự liệu" name="params_type">
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
                  {fields.map((field) => (
                    <Space key={field.key}>
                      <Row gutter={16} align="middle">
                        <Col span={20}>
                          <Row gutter={16}>
                            <Col span={7}>
                              <Form.Item
                                {...field}
                                name={[field.name, "name"]}
                                label="Tên biến"
                              >
                                <Input placeholder='Điền tên biến' />
                              </Form.Item>
                            </Col>
                            <Col span={16}>
                              <Form.Item
                                {...field}
                                name={[field.name, "value"]}
                                label="Giá trị"
                              >
                                <Input placeholder='Điền giá trị truyền vào' />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row gutter={16}>
                            <Col span={23}>
                              <Form.Item name={[field.name, "expect"]} label="Kết quả mong muốn">
                                <Input.TextArea />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={4}>
                          <Trash2 onClick={() => remove(field.name)} />
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