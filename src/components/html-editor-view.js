import React from "react";
import PropTypes from "prop-types";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import styled from "styled-components";

const Wrapper = styled.div`
  h2,
  h3 {
    margin-bottom: 15px !important;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1rem;
  }
`;

export const HtmlEditorView = ({ value }) => (
  <Wrapper>
    <FroalaEditorView model={value} />
  </Wrapper>
);

HtmlEditorView.propTypes = {
  value: PropTypes.string,
};

export default HtmlEditorView;
