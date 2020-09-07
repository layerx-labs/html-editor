import React from "react";
import PropTypes from "prop-types";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

import HtmlEditorWrapper from "./html-editor-wrapper";

export const HtmlEditorView = ({ value, licenseKey }) => (
  <HtmlEditorWrapper>
    <FroalaEditorView model={value} config={{ key: licenseKey }} />
  </HtmlEditorWrapper>
);

HtmlEditorView.propTypes = {
  value: PropTypes.string,
  licenseKey: PropTypes.string
};

export default HtmlEditorView;
