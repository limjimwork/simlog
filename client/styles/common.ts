import styled from "styled-components";
import { mixin } from "./mixin";

interface HeadProps {
  isOpen: boolean;
}

export const Head = {
  Wrap: styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;
    background: #fff;
    > .flex {
      ${mixin.flexBox}
      ${mixin.justifyContent("space-between")}
      ${mixin.alignItems("center")}
      padding: 20px;
      box-sizing: border-box;
      >h1{
        font-size: 24px;
      }
      >.btn-login{
        color: #fff;
      }
    }
  `,

  Menu: styled.div`
    position: relative;
    z-index: 120;
    width: 20px;
    height: 15px;
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

    &.open span {
      background: #fff;
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

  Nav: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 110;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.55);
    visibility: ${(props: HeadProps) =>
      !!props.isOpen ? "visible" : "hidden"};
    opacity: ${(props: HeadProps) => (!!props.isOpen ? "1" : "0")};
    ${mixin.transition("0.25s ease-in-out")}
    >ul {
      width: 100%;
      > li {
        width: 100%;
        text-align: center;
        a {
          display: block;
          font-size: 24px;
          text-transform: capitalize;
          color: #fff;
          padding: 15px 0;
        }
      }
    }
  `,
};

export const Login = {
  Wrap: styled.div`
    margin-top: 110px;
    text-align: center;
    > form {
      display: inline-block;
      > * {
        display: block;
        margin-bottom: 15px;
      }
      > input {
        border-bottom: 1px solid #333;
      }
      > button {
        border: 1px solid #333;
      }
    }
  `,
};

export const Btn = {
  Confirm: styled.div`
    text-align: center;
    margin: 25px 0;
    > button {
      height: 35px;
      line-height: 35px;
      font-size: 16px;
      border-radius: 4px;
      padding: 0 20px;
      &.cancle {
        margin-right: 10px;
        border: 1px solid #f1f1f1;
        background-color: #fff;
        &:hover {
          background-color: #f1f1f1;
        }
      }
      &.confirm {
        color: #fff;
        border: 1px solid #2671c4;
        background-color: #2671c4;
        &:hover {
          border: 1px solid #2361a5;
          background-color: #2361a5;
        }
      }
    }
  `,
};
