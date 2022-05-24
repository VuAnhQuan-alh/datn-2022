import { Button, Form, Input, message, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { UserAPI } from "../../../api";
import { handleSignUp } from "../../../redux/actions/user";
import "./index.scss";

const Register = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const { data, status } = useSelector((store) => store.user_reducers);

  const handleRegis = () => {
    form
      .validateFields()
      .then((data) => {
        dispatch(handleSignUp(data)).then(() => {
          if (localStorage.getItem("top-code")) {
            message.success("Chào mừng bạn đến với Top-code");
            history.push("/home");
          } else {
            message.error("Thông tin đăng đăng ký đã tồn tại.");
          }
        });
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
