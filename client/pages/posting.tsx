import React from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import { Post } from "../styles/posting";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default function Posting(this: any) {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return (
    <Post.Wrap>
      <div>
        <p>카테고리</p>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="제목을 입력하세요."
        />
      </div>
      <div className="demo-section">
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          localization={{
            locale: "ko",
          }}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </div>
    </Post.Wrap>
  );
}
