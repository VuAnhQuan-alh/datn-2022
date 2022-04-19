import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { Button, Col, Form, Input, Row, Select, Typography } from 'antd'
import React from 'react'
import { Send, X } from 'react-feather'
import { CustomButton } from '../../../../@core/components'
import './index.scss'

const { Option } = Select;

const ContributeChallenge = () => {
  const [form] = Form.useForm()
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
            rules={[
              {
                required: true,
                message: "Hãy điền nội dung của thuật toán"
              }
            ]}
          >
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello world!</p>"
              onBlur={(event, editor) => {
                const data = editor.getData()
                console.log(data)
              }}
            />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Gợi ý lời giải">
            <CKEditor
              editor={ClassicEditor}
              data="<p>Lesson!</p>"
              onBlur={(event, editor) => {
                const data = editor.getData()
                console.log(data)
              }}
            />
          </Form.Item>
        </Row>
        <Row>
          <Col>
            <Form.Item label="Điểm" name="pointer">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Typography.Title level={5}>Kiểu dự liệu đầu vào</Typography.Title>
        <Row gutter={16}>
          <Col>
            <Form.Item label="Tên biến" name="name">
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Kiểu dự liệu" name="type">
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
        <Typography.Title level={5}>Test Cases</Typography.Title>
        <Row>
          {/* <Form.List name="test_case">
            
          </Form.List> */}
        </Row>
        <Form.Item>
          <Row justify='center' gutter={16}>
            <Col>
              <CustomButton icon={<Send size={14} />} text="Gửi để duyệt" />
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