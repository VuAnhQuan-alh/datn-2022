import { Button, Form, Input, message, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { UserAPI } from "../../../api";
import "./index.scss";

const Register = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const handleRegis = () => {
    form
      .validateFields()
      .then((data) => {
        console.log(data);
        // (async (data) => {
        //   await UserAPI.Login(data)
        //     .then(response => {
        //       if (response.status !== 200) {
        //         message.error("Thông tin đăng nhập sai hoặc không tồn tại.");
        //         form.resetFields();
        //       }
        //       if (response.status === 200) {
        //         const { data: { data: { infoUser: { _id, is_admin, name, rank, score }, token } } } = response;
        //         const result = { id: _id, isAdmin: is_admin, name, rank, score, token };
        //         window.localStorage.setItem("top-code", JSON.stringify(result));
        //         history.push("/home");
        //       }
        //     })
        //     .catch(() => {
        //       message.error('Thông tin đăng nhập sai hoặc không tồn tại.');
        //     })
        // })(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  return (
    <div className="custom-form-regis">
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
            label="Username"
            name="name"
            rules={[
              {
                required: true,
                message: "Vui lòng điền username.",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng điền mật khẩu.",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item
            label="Nhập lại mật khẩu"
            name="re_password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại mật khẩu.",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
        </Row>
        <Row>
          <Button onClick={handleRegis}>Đăng ký</Button>
        </Row>
      </Form>
    </div>
  );
};

export default Register;
