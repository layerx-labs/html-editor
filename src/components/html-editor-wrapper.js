import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  h2 {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.15rem;
    line-height: 1.3;
  }

  h2,
  h3 {
    margin: 0;
    font-weight: var(--bold);
    text-transform: none;
  }

  ul,
  ol {
    font-size: 1rem;
    line-height: 1.5;

    li {
      ul,
      ol {
        margin-top: 5px;
      }

      &:not(last-child) {
        margin-bottom: 5px;
      }
    }
  }

  table {
    font-size: 1rem;

    &.fr-no-borders {
      th,
      td {
        border: 0;
      }
    }
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
