import { css } from "styled-components";
const imagePath = "/assets/img";

export const mixin = {
  flexBox: css`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  `,

  flex: (value: number | string) => ({
    "-webkit-box-flex": value,
    "-moz-box-flex": value,
    "-webkit-flex": value,
    "-ms-flex": value,
    flex: value,
  }),

  flexDirection: (direction: string) => ({
    "-webkit-flex-direction": direction,
    "-moz-flex-direction": direction,
    "-ms-flex-direction": direction,
    "flex-direction": direction,
  }),

  flexWrap: (wrap: string) => ({
    "-webkit-flex-wrap": wrap,
    "-moz-flex-wrap": wrap,
    "-ms-flex-wrap": wrap,
    "flex-wrap": wrap,
  }),

  flexGrow: (grow: number | string) => ({
    "-webkit-flex-grow": grow,
    "-moz-flex-grow": grow,
    "-ms-flex-grow": grow,
    "-ms-flex-positive": grow,
    "flex-grow": grow,
  }),

  flexShrink: (shrink: number | string) => ({
    "-webkit-flex-shrink": shrink,
    "-moz-flex-shrink": shrink,
    "-ms-flex-shrink": shrink,
    "-ms-flex-negative": shrink,
    "flex-shrink": shrink,
  }),

  flexBasis: (width: string) => ({
    "-webkit-flex-basis": width,
    "-moz-flex-basis": width,
    "-ms-flex-basis": width,
    "flex-basis": width,
  }),

  justifyContent: (justify: string) => ({
    "-webkit-justify-content": justify,
    "-moz-justify-content": justify,
    "-ms-justify-content": justify,
    "justify-content": justify,
    "-ms-flex-pack": justify,
  }),

  alignContent: (align: string) => ({
    "-webkit-align-content": align,
    "-moz-align-content": align,
    "-ms-align-content": align,
    "align-content": align,
  }),

  alignItems: (align: string) => ({
    "-webkit-align-items": align,
    "-moz-align-items": align,
    "-ms-align-items": align,
    "align-items": align,
  }),

  transition: (transition: string) => ({
    " -webkit-transition": transition,
    "-moz-transition": transition,
    "-o-transition": transition,
    transition: transition,
  }),

  transform: (transforms: string) => ({
    "-webkit-transform": transforms,
    "-moz-transform": transforms,
    "-ms-transform": transforms,
    transform: transforms,
  }),

  transformText: (transforms: string) => {
    return `
      "-webkit-transform": ${transforms},
      "-moz-transform":${transforms},
      "-ms-transform": ${transforms},
      transform: ${transforms}
    `;
  },

  bgi: (path: string, imageName: string, type = "png") => ({
    "background-image": `url(${imagePath}/${path}/${imageName}.${type})`,
    "background-repeat": "no-repeat",
  }),

  ellipsis: (lines = 1) => {
    if (lines === 1) {
      return {
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
      };
    } else {
      return {
        display: "-webkit-box",
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "-webkit-line-clamp": "lines",
        "-webkit-box-orient": "vertical",
      };
    }
  },

  fontMain: (weight = 400) => ({
    "font-family": '"Noto Sans Korean", sans-serif, Helvetica;',
    "font-weight": `${weight};`,
  }),

  pointerNone: {
    "-moz-pointer-events": "none",
    "-webkit-pointer-events": "none",
    "-o-pointer-events": "none",
    "-ms-pointer-events": "none",
    "pointer-events": "none",
  },

  selectNone: {
    "-webkit-touch-callout": "none",
    "-webkit-user-select": "none",
    "-khtml-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",
  },

  placeholder: `
    &::-webkit-input-placeholder {
      @content;
    }
    &:-moz-placeholder {
      @content;
    }
    &::-moz-placeholder {
      @content;
    }
    &:-ms-input-placeholder {
      @content;
    }
  }`,
};
