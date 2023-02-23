import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  &.html-viewer {
    margin: 0 auto;
    max-width: ${(props) => props.width ?? "100%"};
  }

  .fr-wrapper {
    border-radius: 0 0 6px 6px;
    overflow: inherit;
  }

  .fr-toolbar {
    border-radius: 6px 6px 0 0;

    + div > * {
      margin: 0 auto;
      max-width: ${(props) => props.width ?? "100%"};
    }
  }

  .fr-second-toolbar {
    display: none;
  }

  .fr-box.fr-basic .fr-element {
    padding: 24px;
    font-family: inherit;
    font-size: 1rem;
    color: inherit;
    line-height: inherit;
  }

  .html-editor-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .html-editor-body details,
  .html-editor-body figcaption,
  .html-editor-body figure {
    display: block;
  }

  .html-editor-body summary {
    display: list-item;
  }

  .html-editor-body [hidden] {
    display: none !important;
  }

  .html-editor-body a {
    background-color: transparent;
    color: #4329a6;
    text-decoration: underline;
  }

  .html-editor-body abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  .html-editor-body b,
  .html-editor-body strong {
    font-weight: 600;
  }

  .html-editor-body dfn {
    font-style: italic;
  }

  .html-editor-body h1 {
    margin: 0.67rem 0;
    font-weight: 600;
    padding-bottom: 0.3rem;
    font-size: 2rem;
  }

  .html-editor-body mark {
    background-color: #fff8c5;
    color: #24292f;
  }

  .html-editor-body small {
    font-size: 90%;
  }

  .html-editor-body sub,
  .html-editor-body sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  .html-editor-body sub {
    bottom: -0.25rem;
  }

  .html-editor-body sup {
    top: -0.5rem;
  }

  .html-editor-body img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: #ffffff;
  }

  .html-editor-body code,
  .html-editor-body kbd,
  .html-editor-body pre,
  .html-editor-body samp {
    font-family: monospace;
    font-size: 1rem;
  }

  .html-editor-body figure {
    margin: 1rem 40px;
  }

  .html-editor-body hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);
    height: 0.25rem;
    padding: 0;
    margin: 24px 0;
    background-color: #d0d7de;
    border: 0;
  }

  .html-editor-body a:hover {
    text-decoration: underline;
  }

  .html-editor-body hr::before {
    display: table;
    content: "";
  }

  .html-editor-body hr::after {
    display: table;
    clear: both;
    content: "";
  }

  .html-editor-body table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  .html-editor-body td,
  .html-editor-body th {
    padding: 0;
  }

  .html-editor-body details summary {
    cursor: pointer;
  }

  .html-editor-body details:not([open]) > *:not(summary) {
    display: none !important;
  }

  .html-editor-body a:focus {
    outline: 2px solid #0969da;
    outline-offset: -2px;
    box-shadow: none;
  }

  .html-editor-body a:focus:not(:focus-visible) {
    outline: solid 1px transparent;
  }

  .html-editor-body a:focus-visible {
    outline: 2px solid #0969da;
    outline-offset: -2px;
    box-shadow: none;
  }

  .html-editor-body a:not([class]):focus,
  .html-editor-body a:not([class]):focus-visible {
    outline-offset: 0;
  }

  .html-editor-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    line-height: 10px;
    color: #24292f;
    vertical-align: middle;
    background-color: #f6f8fa;
    border: solid 1px rgba(175, 184, 193, 0.2);
    border-bottom-color: rgba(175, 184, 193, 0.2);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 rgba(175, 184, 193, 0.2);
  }

  .html-editor-body h1,
  .html-editor-body h2,
  .html-editor-body h3,
  .html-editor-body h4,
  .html-editor-body h5,
  .html-editor-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .html-editor-body h2 {
    font-weight: 600;
    padding-bottom: 0.3rem;
    font-size: 1.5rem;
  }

  .html-editor-body h3 {
    font-weight: 600;
    font-size: 1.25rem;
  }

  .html-editor-body h4 {
    font-weight: 600;
    font-size: 1rem;
  }

  .html-editor-body h5 {
    font-weight: 600;
    font-size: 0.875rem;
  }

  .html-editor-body h6 {
    font-weight: 600;
    font-size: 0.85rem;
    color: #57606a;
  }

  .html-editor-body p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .html-editor-body blockquote {
    margin: 0;
    padding: 0 1rem;
    color: #57606a;
    border-left: 0.25rem solid #d0d7de;
  }

  .html-editor-body ul,
  .html-editor-body ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2rem;
  }

  .html-editor-body ol ol,
  .html-editor-body ul ol {
    list-style-type: lower-roman;
  }

  .html-editor-body ul ul ol,
  .html-editor-body ul ol ol,
  .html-editor-body ol ul ol,
  .html-editor-body ol ol ol {
    list-style-type: lower-alpha;
  }

  .html-editor-body dd {
    margin-left: 0;
  }

  .html-editor-body tt,
  .html-editor-body code,
  .html-editor-body samp {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    font-size: 12px;
  }

  .html-editor-body pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    font-size: 12px;
    word-wrap: normal;
  }

  .html-editor-body::before {
    display: table;
    content: "";
  }

  .html-editor-body::after {
    display: table;
    clear: both;
    content: "";
  }

  .html-editor-body .fr-view > *:first-child {
    margin-top: 0 !important;
  }

  .html-editor-body .fr-view > *:last-child {
    margin-bottom: 0 !important;
  }

  .html-editor-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .html-editor-body p,
  .html-editor-body blockquote,
  .html-editor-body ul,
  .html-editor-body ol,
  .html-editor-body dl,
  .html-editor-body table,
  .html-editor-body pre,
  .html-editor-body details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .html-editor-body blockquote > :first-child {
    margin-top: 0;
  }

  .html-editor-body blockquote > :last-child {
    margin-bottom: 0;
  }

  .html-editor-body h1 tt,
  .html-editor-body h1 code,
  .html-editor-body h2 tt,
  .html-editor-body h2 code,
  .html-editor-body h3 tt,
  .html-editor-body h3 code,
  .html-editor-body h4 tt,
  .html-editor-body h4 code,
  .html-editor-body h5 tt,
  .html-editor-body h5 code,
  .html-editor-body h6 tt,
  .html-editor-body h6 code {
    padding: 0 0.2rem;
    font-size: inherit;
  }

  .html-editor-body summary h1,
  .html-editor-body summary h2,
  .html-editor-body summary h3,
  .html-editor-body summary h4,
  .html-editor-body summary h5,
  .html-editor-body summary h6 {
    display: inline-block;
  }

  .html-editor-body summary h1,
  .html-editor-body summary h2 {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .html-editor-body ol[type="a"] {
    list-style-type: lower-alpha;
  }

  .html-editor-body ol[type="A"] {
    list-style-type: upper-alpha;
  }

  .html-editor-body ol[type="i"] {
    list-style-type: lower-roman;
  }

  .html-editor-body ol[type="I"] {
    list-style-type: upper-roman;
  }

  .html-editor-body ol[type="1"] {
    list-style-type: decimal;
  }

  .html-editor-body div > ol:not([type]) {
    list-style-type: decimal;
  }

  .html-editor-body ul ul,
  .html-editor-body ul ol,
  .html-editor-body ol ol,
  .html-editor-body ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .html-editor-body li {
    list-style: initial;
  }

  .html-editor-body li > p {
    margin-top: 16px;
  }

  .html-editor-body li + li {
    margin-top: 0.25rem;
  }

  .html-editor-body dl {
    padding: 0;
  }

  .html-editor-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1rem;
    font-style: italic;
    font-weight: 600;
  }

  .html-editor-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .html-editor-body table th {
    font-weight: 600;
  }

  .html-editor-body table th,
  .html-editor-body table td {
    padding: 6px 13px;
    border: 1px solid #d0d7de;
  }

  .html-editor-body table tr {
    background-color: #ffffff;
    border-top: 1px solid hsla(210, 18%, 87%, 1);
  }

  .html-editor-body table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  .html-editor-body table img {
    background-color: transparent;
  }

  .html-editor-body img[align="right"] {
    padding-left: 20px;
  }

  .html-editor-body img[align="left"] {
    padding-right: 20px;
  }

  .html-editor-body .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }

  .html-editor-body code,
  .html-editor-body tt {
    padding: 0.2rem 0.4rem;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: rgba(175, 184, 193, 0.2);
    border-radius: 6px;
  }

  .html-editor-body code br,
  .html-editor-body tt br {
    display: none;
  }

  .html-editor-body del code {
    text-decoration: inherit;
  }

  .html-editor-body samp {
    font-size: 85%;
  }

  .html-editor-body pre code {
    font-size: 100%;
  }

  .html-editor-body pre > code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .html-editor-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 6px;
  }

  .html-editor-body pre code,
  .html-editor-body pre tt {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .html-editor-body g-emoji {
    display: inline-block;
    min-width: 1ch;
    font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    font-style: normal !important;
    font-weight: 400;
    line-height: 1;
    vertical-align: -0.075rem;
  }

  .html-editor-body g-emoji img {
    width: 1rem;
    height: 1rem;
  }
`;

const HtmlEditorWrapper = ({ className, width, children }) => (
  <Wrapper className={className} width={width}>
    <div className="html-editor-body">{children}</div>
  </Wrapper>
);

HtmlEditorWrapper.defaultProps = {
  className: "html-editor-body",
};

HtmlEditorWrapper.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default HtmlEditorWrapper;
