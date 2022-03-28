import React from "react";
import { Button } from "antd";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import "./index.scss";

const CustomButton = ({ text, icon }) => {
  return (
    <Button className="custom-button" icon={icon}>
      {text}
    </Button>
  );
};

CustomButton.defaultProps = {
  text: "Giải bài này",
  icon: <ChevronRight />,
};
CustomButton.prototype = {
  text: PropTypes.string,
  icon: PropTypes.element,
};

export default CustomButton;
