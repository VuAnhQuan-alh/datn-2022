import { useSkin } from "@hooks/useSkin";
import "@styles/base/pages/page-auth.scss";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import { CardText, CardTitle, Col, Row } from "reactstrap";
import { Login, Register } from "./components";
import "./index.scss";
import logo from "@src/assets/images/logo/topcode-01.png";

const WelcomeWebsite = () => {
  const [skin, setSkin] = useSkin();

  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  return (
    <div className="auth-wrapper auth-v2">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/home">
          <img width={78} src={logo} alt="logo" />
          <h2 className="brand-text text-primary ml-1">Top code | Xin chào</h2>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login V2" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="font-weight-bold mb-1">
              Chào mừng bạn đến với Top code! 👋
            </CardTitle>
            <CardText className="mb-2">
              Đăng nhập để bắt đầu sử dụng các tính năng của Top code.
            </CardText>
            <Tabs defaultActiveKey="login">
              <Tabs.TabPane tab="Đăng nhập" key="login">
                <Login />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đăng kí" key="register">
                <Register />
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default WelcomeWebsite;
