import { Button, Form, Input, message, Row } from "antd";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleSignIn } from "../../../redux/actions/user";
import "./index.scss";

const Login = () => {
  const localData = window.localStorage.getItem("top-code");
  if (localData) {
    console.log(JSON.parse(localData));
  }

  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const { data, status } = useSelector((store) => store.user_reducers);
  const handleLogin = () => {
    form
      .validateFields()
      .then((data) => {
        dispatch(handleSignIn(data));
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    if (status === "error")
      message.error("Thông tin đăng nhập sai hoặc không tồn tại.");
    if (status === "success" && !isEmpty(data)) {
      message.success("Chào mừng bạn đến với Top-code");
      history.push("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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
          <Button onClick={handleLogin}>Đăng nhập</Button>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
