import React, { useState } from "react";

import HtmlEditor from "../components/html-editor";

export default {
  title: "Editor",
  component: HtmlEditor,
};

export const Editor = () => {
  const [model, setModel] = useState(
    "<h2>Title test</h2><h3>Subtitle testing</h3><p><br><strong>Project Description</strong></p><p><br></p><p>Let&#39;s get him. <a href='#0'>Well looky</a> what we have here. No no no, you&#39;re staying right here with me. No no no no no, Marty, both you and Jennifer turn out fine. It&#39;s your kids, Marty, something has got to be done about your kids. God dammit, I&#39;m late. Never mind that, never mind that now, never mind that, never mind-<br><br>Quiet. Yeah, I&#39;m- mayor. Now that&#39;s a good idea. I could run for mayor. Why am I always the last one to know about these things. One point twenty-one gigawatts. One point twenty-one gigawatts. Great Scott. The way I see it, if you&#39;re gonna build a time machine into a car why not do it with some style. Besides, the stainless, steel construction made the flux dispersal- look out.<br><br>Good. Have a good trip Einstein, watch your head. Marty, are you alright? Alright, c&#39;mon, I think we&#39;re safe. Hey not too early I sleep in Sunday&#39;s, hey McFly, you&#39;re shoe&#39;s untied, don&#39;t be so gullible, McFly. Huh?<br><br><img src='https://taikai.azureedge.net/3srTut4G_wl2MX5N_8myW91OwWnEXdC-DXo6va7VOSk/rs:fit:640:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy8xYTc3M2Q0MC1kYmJmLTExZWEtYTI1ZS0xM2ZiZWQ3NzY5ODVjb3ZpZC1pbXBhY3QuanBn' style='width: 500px;' class='fr-fic fr-dib'></p><p><br></p><p>Well uh, good, fine. You have this thing hooked up to the car? No wait, Doc, the bruise, the bruise on your head, I know how that happened, you told me the whole story. you were standing on your toilet and you were hanging a clock, and you fell, and you hit your head on the sink, and that&#39;s when you came up with the idea for the flux capacitor, which makes time travel possible. Hello, hello, anybody home? Think, McFly, think. I gotta have time to get them re-typed. Do you realize what would happen if I hand in my reports in your handwriting. <span style='background-color: rgb(239, 87, 102);'>I&#39;ll get fired.</span> You wouldn&#39;t want that to happen would you? Would you? Okay, alright, Saturday is good, Saturday&#39;s good, I could spend a week in 1955. I could hang out, you could show me around.</p><p><br></p><p>What did your mother ever see in that kid? Yes, definitely, god-dammit George, swear. Okay, so now, you come up, you punch me in the stomach, I&#39;m out for the count, right? And you and <span class='fr-class-highlighted'>Lorraine</span> live happily ever after. Now, of course not, Biff, now, I wouldn&#39;t want that to happen. Hey, hey listen guys. Look, I don&#39;t wanna mess with no reefer addicts, okay? yes, Joey just loves being in his playpen. he cries whenever we take him out so we just leave him in there all the time. Well Marty, I hope you like meatloaf.</p><p><br></p><table style='width: 100%;'><tbody><tr><td style='width: 33.3333%;'>Col 1</td><td style='width: 33.3333%;'>Col 2</td><td style='width: 33.3333%;'>Col 2</td></tr><tr><td style='width: 33.3333%;'>Desc 1</td><td style='width: 33.3333%;'>Desc 1</td><td style='width: 33.3333%;'>Desc 1</td></tr><tr><td style='width: 33.3333%;'>Desc 2</td><td style='width: 33.3333%;'>Desc 2</td><td style='width: 33.3333%;'>Desc 2</td></tr></tbody></table><p><br>I guarantee it. Sam, here&#39;s the young man you hit with your car out there. He&#39;s alright, thank god. George: you ever think of running for class president? Good, I&#39;ll see you tonight. Don&#39;t forget, now, 1:15 a.m., Twin Pines Mall. Hey George, heard you laid out Biff, nice going.</p><p><br></p><p><span class='fr-class-code'>&lt;HtmlEditorView&gt;</span></p><p><br></p><ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>"
  );

  const handleModelChange = (model) => {
    setModel(model);
  };

  return (
    <HtmlEditor
      contentWidth="800px"
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
        "imageRemove",
      ]}
      video={true}
      emoticons={true}
      help={true}
      imageUploadPlugin={{
        beforeUpload: (editor, images) => {
          console.log("Uploading");
        },
      }}
      linkList={[
        {
          text: "TAIKAI",
          href: "https://taikai.network",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
        },
      ]}
      autofocus={true}
    />
  );
};
