import React from "react";
import PropTypes from "prop-types";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

import HtmlEditorWrapper from "./html-editor-wrapper";

export const HtmlEditorView = ({ value }) => (
  <HtmlEditorWrapper>
    <FroalaEditorView model={value} />
  </HtmlEditorWrapper>
);

HtmlEditorView.propTypes = {
  value: PropTypes.string
};

export default HtmlEditorView;
