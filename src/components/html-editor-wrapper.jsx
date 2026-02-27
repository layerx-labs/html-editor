import React from "react";
import PropTypes from "prop-types";
import "./html-editor-wrapper.css";

const HtmlEditorWrapper = ({ className, width, children }) => (
  <div className={className} style={width ? { "--editor-width": width } : undefined}>
    <div className="html-editor-body">{children}</div>
  </div>
);

HtmlEditorWrapper.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default HtmlEditorWrapper;
