import React from "react";
import { Button } from "antd";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

const CustomButton = ({ text, icon, href }) => {
  const RenderButton = href === '' ? (
    <Button className="custom-button" icon={icon}>
      {text}
    </Button>
  ) : (
    <Link to={href}>
      <Button className="custom-button" icon={icon}>
        {text}
      </Button>
    </Link>
  );
  return RenderButton;
};

CustomButton.defaultProps = {
  text: "Giải bài này",
  icon: <ChevronRight />,
  href: "",
};
CustomButton.prototype = {
  text: PropTypes.string,
  icon: PropTypes.element,
  href: PropTypes.string,
};

export default CustomButton;
