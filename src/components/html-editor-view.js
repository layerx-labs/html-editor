import React from "react";
import PropTypes from "prop-types";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

import HtmlEditorWrapper from "./html-editor-wrapper";

export const HtmlEditorView = ({ value, licenceKey }) => (
  <HtmlEditorWrapper>
    <FroalaEditorView model={value} config={{ key: licenceKey }} />
  </HtmlEditorWrapper>
);

HtmlEditorView.propTypes = {
  value: PropTypes.string,
  licenceKey: PropTypes.string,
};

export default HtmlEditorView;
