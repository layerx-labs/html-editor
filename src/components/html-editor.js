import React from "react";
import PropTypes from "prop-types";
import FroalaEditor from "react-froala-wysiwyg";

import HtmlEditorWrapper from "./html-editor-wrapper";

import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

/**
 * **paragraphFormat** is an object with the options that will appear in the paragraph dropdown. Full example:
 *
 * ```
 * {
 *   N: "Normal",
 *   H1: "Heading 1",
 *   H2: "Heading 2",
 *   H3: "Heading 3",
 *   H4: "Heading 4",
 *   PRE: "Code"
 * }```
 *
 * **colorPallete** is an array of colors used in the colors popup for background. Passing `REMOVE` as a value in the array will display the clear formatting button for colors:
 *
 * `["#F9C543", "#EF5766", "#55CAD7", "#5031A9", "#D8D8D8", "#7A7A7A", "REMOVE"]`
 *
 * **inlineClasses** is a set of custom classes for the selected text. Full example:
 *
 * ```
 * {
 *   "fr-class-code": "Code",
 *   "fr-class-highlighted": "Highlighted",
 *   "fr-class-transparency": "Transparent"
 * }```
 *
 * **imageAllowedTypes** is a list of image types that are allowed to be uploaded. Full example:
 *
 * ```
 * ["jpeg", "jpg", "png", "gif", "svg", "webp"]```
 *
 * **imageEditButtons** is the list of buttons that appear in the edit image popup, when an image is selected. Full example:
 *
 * ```
 * [
 *   "imageAlt",
 *   "imageDisplay",
 *   "imageAlign",
 *   "imageCaption",
 *   "imageLink",
 *   "linkEdit",
 *   "linkRemove",
 *   "imageSize",
 *   "imageRemove"
 * ]```
 *
 * **direction** sets the direction of the text. Possible values are: `auto`, `ltr` and `rtl`. When the option is set to `auto` the editor automatically detects if the keyboard input is `RTL` or `LTR`. However only the text inside the editing box changes direction, the toolbar remains the same. The `rtl` and `ltr` values also change the toolbar's direction.
 *
 * **linkList** set a predefined list of links to select from when inserting or editing a link. Full example:
 *
 * ```
 * {
 *   text: "TAIKAI",
 *   href: "https://taikai.network",
 *   target: "_blank",
 *   rel: "nofollow noopener noreferrer"
 * }```
 */

export const HtmlEditor = props => {
  const {
    licenseKey,
    editorHeight,
    placeholder,
    value,
    onChange,
    charMax,
    paragraph,
    paragraphFormat,
    bold,
    italic,
    underline,
    strikeThrough,
    subscript,
    superscript,
    paragraphStyle,
    backgroundColor,
    inlineClass,
    inlineClasses,
    clearFormatting,
    align,
    list,
    indent,
    quote,
    link,
    linkEditButtons,
    image,
    imageInsertButtons,
    imageAllowedTypes,
    imageSize,
    imageEditButtons,
    video,
    videoInsertButtons,
    videoAllowedProviders,
    file,
    pastePlain,
    table,
    tableStyles,
    emoticons,
    specialCharacters,
    hr,
    undo,
    fullscreen,
    print,
    help,
    markdown,
    trackChanges,
    linkList,
    toolbarSticky,
    toolbarStickyOffset,
    autofocus,
    direction,
    colorPallete,
    allowHex,
    imageUploadPlugin
  } = props;

  const beforeUploadHook = (editor, images) => {
    if (imageUploadPlugin) {
      return imageUploadPlugin.beforeUpload(editor, images);
    }
    return true;
  };

  const config = {
    placeholderText: placeholder,
    key: licenseKey,
    attribution: false,
    charCounterCount: charMax > 0 ? true : false,
    charCounterMax: charMax,
    toolbarButtons: {
      moreText: {
        buttons: [
          paragraph && "paragraphFormat",
          bold && "bold",
          italic && "italic",
          underline && "underline",
          strikeThrough && "strikeThrough",
          subscript && "subscript",
          superscript && "superscript",
          paragraphStyle && "paragraphStyle",
          backgroundColor && "backgroundColor",
          inlineClass && "inlineClass",
          clearFormatting && "clearFormatting"
        ],
        buttonsVisible: 3
      },
      moreParagraph: {
        buttons: [
          align && "alignLeft",
          align && "alignCenter",
          align && "alignRight",
          list && "formatOL",
          list && "formatUL",
          indent && "outdent",
          indent && "indent",
          quote && "quote"
        ],
        buttonsVisible: 2
      },
      moreRich: {
        buttons: [
          link && "insertLink",
          image && "insertImage",
          video && "insertVideo",
          file && "insertFile",
          table && "insertTable",
          emoticons && "emoticons",
          specialCharacters && "specialCharacters",
          hr && "insertHR"
        ],
        buttonsVisible: 2
      },
      moreMisc: {
        buttons: [
          undo && "undo",
          undo && "redo",
          fullscreen && "fullscreen",
          print && "print",
          help && "help",
          markdown && "markdown",
          trackChanges && "trackChanges"
        ],
        align: "right",
        buttonsVisible: 2
      }
    },
    toolbarSticky: toolbarSticky,
    toolbarStickyOffset: toolbarStickyOffset,
    zIndex: 999,
    autofocus: autofocus,
    direction: direction,
    colorsBackground: colorPallete,
    colorsHEXInput: allowHex,
    paragraphFormat: paragraphFormat,
    inlineClasses: inlineClasses,
    dragInline: false,
    linkAlwaysBlank: true,
    linkList: linkList,
    linkEditButtons: linkEditButtons,
    paragraphFormatSelection: false,
    tableStyles: tableStyles,
    imageUpload: image,
    imageInsertButtons: imageInsertButtons,
    imageAllowedTypes: imageAllowedTypes,
    imageMaxSize: imageSize * 1024 * 1024,
    imageEditButtons: imageEditButtons,
    videoInsertButtons: videoInsertButtons,
    videoAllowedProviders: videoAllowedProviders,
    videoResponsive: true,
    fileUpload: file,
    pastePlain: pastePlain,
    imagePaste: false,
    height: editorHeight,
    quickInsertEnabled: false,
    events: {
      "image.beforeUpload": function(images) {
        return beforeUploadHook(this, images);
      }
    }
  };

  return (
    <HtmlEditorWrapper>
      <FroalaEditor
        tag="textarea"
        config={config}
        model={value}
        onModelChange={onChange}
      />
    </HtmlEditorWrapper>
  );
};

HtmlEditor.defaultProps = {
  editorHeight: 300,
  placeholder: "",
  value: "",
  onChange: () => {},
  charMax: 0,
  paragraph: false,
  paragraphFormat: {
    N: "Normal",
    H2: "Heading 1",
    H3: "Heading 2",
    PRE: "Code"
  },
  bold: true,
  italic: true,
  underline: true,
  strikeThrough: true,
  subscript: true,
  superscript: true,
  paragraphStyle: true,
  backgroundColor: false,
  colorPallete: [
    "#F9C543",
    "#EF5766",
    "#55CAD7",
    "#5031A9",
    "#D8D8D8",
    "#7A7A7A",
    "REMOVE"
  ],
  inlineClass: false,
  inlineClasses: {
    "fr-class-code": "Code",
    "fr-class-highlighted": "Highlighted"
  },
  clearFormatting: true,
  align: false,
  list: true,
  indent: false,
  quote: false,
  link: true,
  linkEditButtons: ["linkOpen", "linkEdit", "linkRemove"],
  image: false,
  imageInsertButtons: ["imageUpload", "imageByURL"],
  imageAllowedTypes: ["jpeg", "jpg", "png", "webp"],
  imageSize: 5,
  imageEditButtons: [
    "imageAlt",
    "imageDisplay",
    "imageAlign",
    "imageCaption",
    "imageLink",
    "linkEdit",
    "linkRemove",
    "imageSize",
    "imageRemove"
  ],
  video: false,
  videoInsertButtons: ["videoByURL", "videoEmbed"],
  videoAllowedProviders: [".*"],
  file: false,
  pastePlain: true,
  table: true,
  tableStyles: {
    "fr-no-borders": "No Borders",
    "fr-dashed-borders": "Dashed Borders",
    "fr-alternate-rows": "Alternate Rows"
  },
  emoticons: false,
  specialCharacters: true,
  hr: false,
  undo: true,
  fullscreen: true,
  print: false,
  help: true,
  markdown: true,
  trackChanges: false,
  linkList: [],
  toolbarSticky: false,
  toolbarStickyOffset: 0,
  autofocus: false,
  direction: "auto",
  allowHex: true
};

HtmlEditor.propTypes = {
  licenseKey: PropTypes.string,
  editorHeight: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  charMax: PropTypes.number,
  paragraph: PropTypes.bool,
  paragraphFormat: PropTypes.object,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  strikeThrough: PropTypes.bool,
  subscript: PropTypes.bool,
  superscript: PropTypes.bool,
  paragraphStyle: PropTypes.bool,
  backgroundColor: PropTypes.bool,
  inlineClass: PropTypes.bool,
  inlineClasses: PropTypes.object,
  clearFormatting: PropTypes.bool,
  align: PropTypes.bool,
  list: PropTypes.bool,
  indent: PropTypes.bool,
  quote: PropTypes.bool,
  link: PropTypes.bool,
  linkEditButtons: PropTypes.array,
  image: PropTypes.bool,
  imageInsertButtons: PropTypes.array,
  imageAllowedTypes: PropTypes.array,
  imageSize: PropTypes.number,
  imageEditButtons: PropTypes.array,
  video: PropTypes.bool,
  videoInsertButtons: PropTypes.array,
  videoAllowedProviders: PropTypes.array,
  file: PropTypes.bool,
  pastePlain: PropTypes.bool,
  table: PropTypes.bool,
  tableStyles: PropTypes.object,
  emoticons: PropTypes.bool,
  specialCharacters: PropTypes.bool,
  hr: PropTypes.bool,
  undo: PropTypes.bool,
  fullscreen: PropTypes.bool,
  print: PropTypes.bool,
  help: PropTypes.bool,
  markdown: PropTypes.bool,
  trackChanges: PropTypes.bool,
  linkList: PropTypes.array,
  toolbarSticky: PropTypes.bool,
  toolbarStickyOffset: PropTypes.number,
  autofocus: PropTypes.bool,
  direction: PropTypes.oneOf(["auto", "ltr", "rtl"]),
  colorPallete: PropTypes.array,
  allowHex: PropTypes.bool,
  imageUploadPlugin: PropTypes.object
};

export default HtmlEditor;
