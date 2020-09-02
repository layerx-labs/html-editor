import React, { useState } from "react";

import HtmlEditor from "../components/html-editor";

export default {
  title: "HTML Editor/Editor",
  component: HtmlEditor
};

export const HtmlEditorComponent = () => {
  const [model, setModel] = useState("");

  const handleModelChange = model => {
    setModel(model);
  };

  return (
    <HtmlEditor
      placeholder="Yo, write something!"
      value={model}
      onChange={handleModelChange}
      paragraph={true}
      backgroundColor={true}
      inlineClass={true}
      align={true}
      indent={true}
      quote={true}
      link={true}
      image={true}
      imageEditButtons={[
        "imageAlt",
        "imageDisplay",
        "imageAlign",
        "imageCaption",
        "imageLink",
        "linkEdit",
        "linkRemove",
        "imageSize",
        "imageRemove"
      ]}
      video={true}
      emoticons={true}
      help={true}
      imageUploadPlugin={{
        beforeUpload: (editor, images) => {
          console.log("Uploading");
        }
      }}
      linkList={[
        {
          text: "TAIKAI",
          href: "https://taikai.network",
          target: "_blank",
          rel: "nofollow noopener noreferrer"
        }
      ]}
      autofocus={true}
    />
  );
};

HtmlEditorComponent.story = {
  name: "HTML Editor"
};
