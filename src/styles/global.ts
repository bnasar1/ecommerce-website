// src/styles/global.ts
import { createGlobalStyle } from "styled-components";
import { colors } from "../utils/colors";

const {OxfordBlue, white} = colors;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    color: ${white};
    font-family: 'Arial', sans-serif;
    min-height: 100vh;
  }

  /* 🔧 Override Ant Design Pro Layout backgrounds */
  .ant-layout,
  .ant-pro-layout,
  .ant-pro-layout-bg-list,
  .ant-pro-page-container,
  .ant-pro-grid-content,
  .ant-pro-grid-content-children,
  .ant-pro-page-container-children-container {
    background-color: ${OxfordBlue} !important;
  }

  .ant-pro-layout-header::after {
  content: '';
  display: block;
  height: 1px;
  background-color: ${white};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

footer::before {
  content: '';
  display: block;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
}

/* Remove default horizontal padding from layout containers */
.ant-pro-grid-content,
.ant-pro-page-container,
.ant-pro-grid-content-children,
.ant-pro-page-container-children-container {
  padding: 0 !important;
  padding-top: 0
  max-width: 100% !important;
}

/* Hide the empty header inserted before your custom one */
.ant-layout-header:first-of-type {
  display: none !important;
}


`;



export const theme = {
  colors: {
    primary: "#0070f3",
    background: "#1c2237",
    text: "#ffffff", // Updated for contrast
  },
};
