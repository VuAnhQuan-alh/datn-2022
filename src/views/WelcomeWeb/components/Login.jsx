import { Button, Form, Input, message, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { UserAPI } from "../../../api";

const Login = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const handleLogin = () => {
    form.validateFields().then(data => {
      (async (data) => {
        await UserAPI.Login(data)
          .then(response => {
            if (response.status !== 200) {
              message.error("Thông tin đăng nhập sai hoặc không tồn tại.");
              form.resetFields();
            }
            if (response.status === 200) {
              const { data: { data: { infoUser: { _id, is_admin, name, rank, score }, token } } } = response;
              const result = { id: _id, isAdmin: is_admin, name, rank, score, token };
              window.localStorage.setItem("top-code", JSON.stringify(result));
              history.push("/home");
            }
          })
          .catch(() => {
            message.error('Thông tin đăng nhập sai hoặc không tồn tại.');
          })
      })(data);
    }).catch(error => {
      console.log("Error: ", error);
    })
  };
  return (
    <div className="custom-form-login">
      <Form layout="vertical" form={form}>
        <Row>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng điền email theo đúng định dạng.",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng điền password."
              }
            ]}
          >
            <Input type="password" />
          </Form.Item>
        </Row>
        <Row>
          <Button onClick={handleLogin}>
            Đăng nhập
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
