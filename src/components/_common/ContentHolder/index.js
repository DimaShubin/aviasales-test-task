import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const propTypes = {};

const ContentHolder = props => {
  return <div className={"content-holder"}>{props.children}</div>;
};

ContentHolder.propTypes = propTypes;

export default ContentHolder;
