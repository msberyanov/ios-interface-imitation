import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import "./fonts/index.css"
import { Body } from "./body";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Body/>
  </React.StrictMode>
);
