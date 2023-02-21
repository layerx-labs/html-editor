import React from "react";
import PropTypes from "prop-types";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import HtmlEditorWrapper from "./html-editor-wrapper";

export const HtmlEditorView = (props) => {
  const { contentWidth, value, licenseKey } = props;

  return (
    <HtmlEditorWrapper className="html-viewer" width={contentWidth}>
      <FroalaEditorView model={value} config={{ key: licenseKey }} />
    </HtmlEditorWrapper>
  );
};

HtmlEditorView.propTypes = {
  contentWidth: PropTypes.string,
  value: PropTypes.string,
  licenseKey: PropTypes.string,
};

export default HtmlEditorView;
