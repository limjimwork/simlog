import styled from "styled-components";
import { mixin } from "./mixin";

export const DetailPage = {
  Wrap: styled.div`
    .detail-title {
      font-size: 30px;
      margin: 114px 0 25px;
    }
    .detail-top {
      ${mixin.flexBox}
      ${mixin.justifyContent("space-between")}
      ${mixin.alignItems("center")}
      padding-bottom: 25px;
      border-bottom: 1px solid #eee;
    }
    .detail-mid {
      >p {
        font-size: 16px;
        word-break: break-all;
        white-space: normal;
        padding-top:20px;
        overflow: hidden;
      }
    }
  `,
};
