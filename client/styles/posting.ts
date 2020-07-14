import styled from "styled-components";

export const Post = {
  Wrap: styled.div`
    margin: 114px auto 25px;
    max-width: 857px;
    padding: 0 20px;
    box-sizing: border-box;
    .category-section {
      position: relative;
      width: 125px;
      select {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 30px;
        font-size: 16px;
        color: #4d4d4d;
        text-transform: capitalize;
        line-height: 30px;
        padding: 0 10px;
        border: none;
        border-bottom: 1px solid #f1f1f1;
        border-radius: 2px;
        background-color: transparent;
        cursor: pointer;
        box-sizing: border-box;
      }
    }
    .title-section {
      #title {
        width: 100%;
        font-size: 30px;
        color: #000;
        margin-right: 5%;
        margin: 25px 0;
        border-bottom: 1px solid #f1f1f1;
      }
    }
    .editor-wrapper {
      .editor-editor {
        height: 500px !important;
        padding: 5px !important;
        border: 1px solid #f1f1f1 !important;
        border-radius: 2px !important;
        box-sizing: border-box;
      }
      .rdw-history-dropdown {
        margin-bottom: 6px;
      }
      img {
        width: auto;
        height: auto;
      }
    }
  `,
};
