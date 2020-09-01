import React from "react";
import PropTypes from "prop-types";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

export const HtmlEditorView = ({ value }) => <FroalaEditorView model={value} />;

HtmlEditorView.propTypes = {
  value: PropTypes.string
};

export default HtmlEditorView;
