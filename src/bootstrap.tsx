import React from 'react';
import HostApp from "./HostApp.tsx";
import './index.css';
import ReactDOM, { render } from 'react-dom'

window.React = React
window.ReactDOM = ReactDOM

render(<HostApp />, document.getElementById('root'));