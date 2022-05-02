import React from "react";
import { Button } from "antd";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

const CustomButton = ({ text, icon, href, onClick, ...rest }) => {
  const RenderButton = href === '' ? (
    <Button className="custom-button" icon={icon} onClick={onClick} {...rest}>
      {text}
    </Button>
  ) : (
    <Link to={href}>
      <Button className="custom-button" icon={icon} {...rest}>
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
  onClick: () => { }
};
CustomButton.prototype = {
  text: PropTypes.string,
  icon: PropTypes.element,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default CustomButton;
