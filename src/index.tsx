import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import "./fonts/index.css"
import { PhoneZone } from "./phone-zone";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<PhoneZone/>);
