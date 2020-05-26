import React from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
// import ConfirmBtn from "../components/confirmBtn";
import { Post } from "../styles/posting";

const Editor = dynamic(
  (import("react-draft-wysiwyg") as any).then((mod: any) => mod.Editor),
  { ssr: false }
);

type PostProps = {
  children?: React.ReactNode;
};

export default function Posting({ children }: PostProps) {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return (
    <Post.Wrap>
      <div className="category-section">
        <select name="category">
          <option value="">카테고리</option>
          <option value="project">project</option>
          <option value="dev">dev</option>
        </select>
        <div className="rdw-dropdown-carettoopen"></div>
      </div>
      <div className="title-section">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="제목을 입력하세요."
        />
      </div>
      <div className="editor-section">
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName={"editor-wrapper"}
          editorClassName={"editor-editor"}
          placeholder={"내용을 입력하세요."}
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
      {/* <ConfirmBtn /> */}
    </Post.Wrap>
  );
}
