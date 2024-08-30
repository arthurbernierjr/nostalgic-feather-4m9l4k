import { StrictMode } from "react"; // require
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


/*








const express = require('express')

const Schema = require('mongoose').Schema
const { Schema } = require('mongoose')

module.exports = ThingIWantToExport
*/

