import styled from "styled-components";
import { mixin } from "./mixin";

export const Info = {
  Wrap: styled.div`
    ${mixin.flexBox}
    ${mixin.justifyContent("center")}
    ${mixin.alignItems("center")}
    margin: 114px 0 50px;
    .info-photo {
      width: 100px;
      height: 100px;
      margin-right: 50px;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
    }
  `,
};

export const List = {
  Wrap: styled.div`
    .card {
      padding: 30px 0;
      border-bottom: 1px solid #eee;
      &-title {
        font-size: 22px;
        margin-bottom: 15px;
      }
      &-text {
        font-size: 16px;
        color: #666;
        margin-bottom: 15px;
      }
      &-info {
        > span {
          font-size: 12px;
          color: #aaa;
          margin-right: 5px;
        }
      }
    }
  `,
};
