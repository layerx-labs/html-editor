import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  ul,
  ol {
    font-size: 1rem;
    line-height: 1.5;

    li:not(last-child) {
      margin-bottom: 5px;
    }
  }

  table {
    font-size: 1rem;
  }

  pre {
    border: 1px solid var(--grey);
    border-radius: 4px;
    background-color: var(--lightGrey);
    padding: 15px;
  }

  blockquote {
    border-left: 4px solid var(--default);
    padding-left: 15px;
    color: var(--default);
  }

  span.fr-class-code {
    border: 1px solid var(--grey) !important;
    border-radius: 4px !important;
    background-color: var(--lightGrey) !important;
    padding: 2px !important;
  }

  .fr-box.fr-basic .fr-element {
    line-height: 1.5;
  }
`;

const HtmlEditorWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

HtmlEditorWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default HtmlEditorWrapper;
