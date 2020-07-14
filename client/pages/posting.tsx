import React, { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import ConfirmBtn from "../components/confirmBtn";
import { Post } from "../styles/posting";

const Editor = dynamic(
  async () => {
    const mod = await import("react-draft-wysiwyg");
    return mod.Editor;
  },
  { ssr: false }
);

type PostProps = {
  children?: React.ReactNode;
};

export default function Posting({ children }: PostProps) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [uploadImages, setUploadImages] = useState([{}]);

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const onClickCancle = () => {
    console.log("취소");
  };

  const onClickConfirm = () => {
    console.log("등록", convertToRaw(editorState.getCurrentContent()));
  };

  const uploadImageCallBack = (file: any) => {
    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    };
    uploadImages.push(imageObject);
    setUploadImages(uploadImages);
    return new Promise((resolve, reject) => {
      resolve({ data: { link: imageObject.localSrc } });
    });
  };

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
          onEditorStateChange={onEditorStateChange}
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
            image: {
              uploadCallback: uploadImageCallBack,
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
            },
          }}
        />
      </div>
      <ConfirmBtn
        onClickCancle={onClickCancle}
        onClickConfirm={onClickConfirm}
      />
    </Post.Wrap>
  );
}
