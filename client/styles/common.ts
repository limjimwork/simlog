import styled from "styled-components";
import { mixin } from "./mixin";

export const Head = {
  Wrap: styled.header`
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;
    > .flex {
      ${mixin.flexBox}
      ${mixin.justifyContent("space-between")}
      ${mixin.alignItems("center")}
      padding: 20px 10px;
      box-sizing: border-box;
    }
  `,

  Menu: styled.div`
    width: 20px;
    height: 15px;
    position: relative;
    margin: 10px auto;
    ${mixin.transform("rotate(0deg)")}
    ${mixin.transition("0.5s ease-in-out")}
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: #000;
      border-radius: 3px;
      opacity: 1;
      left: 0;
      ${mixin.transform("rotate(0deg)")}
      ${mixin.transition("0.25s ease-in-out")}
    }

    span:nth-child(1) {
      top: 0px;
    }

    span:nth-child(2),
    span:nth-child(3) {
      top: 6px;
    }

    span:nth-child(4) {
      top: 12px;
    }

    &.open span:nth-child(1) {
      top: 6px;
      width: 0%;
      left: 50%;
    }

    &.open span:nth-child(2) {
      ${mixin.transform("rotate(45deg)")}
    }

    &.open span:nth-child(3) {
      ${mixin.transform("rotate(-45deg)")}
    }

    &.open span:nth-child(4) {
      top: 6px;
      width: 0%;
      left: 50%;
    }
  `,
};
