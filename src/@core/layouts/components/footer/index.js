// ** Icons Import
import { Typography } from "antd";
import { Heart, Mail } from "react-feather";

const Footer = () => {
  return (
    <p
      className="clearfix mb-0"
      style={{
        background: "#fff",
        padding: "12px 0",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)",
        borderRadius: 10,
      }}
    >
      <div
        style={{
          maxWidth: 1385,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <Typography.Title level={4}>Nội dung</Typography.Title>
            <Typography>Bảng xếp hạng</Typography>
            <Typography>Thử thách</Typography>
            <Typography>Cuộc thi</Typography>
          </div>
          <div>
            <Typography.Title level={4}>Liên hệ</Typography.Title>
            <Typography>
              <Mail size={24} />
              &nbsp;tuhd4@fpt.edu.vn
            </Typography>
          </div>
          <div className="float-md-left d-block d-md-inline-block mt-25">
            COPYRIGHT © {new Date().getFullYear()}{" "}
            <span style={{ color: "#7366F0", fontWeight: "bold" }}>
              Top Code
            </span>
          </div>
        </div>
      </div>
    </p>
  );
};

export default Footer;
