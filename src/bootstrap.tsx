import React from 'react';
import HostApp from "./HostApp.tsx";
import './index.css';
import ReactDOM, { render } from 'react-dom'

window.React = React
window.ReactDOM = ReactDOM
window.remotes = window.remotes || {};
window.remotes.appearancePage = '2024-10-31-12-08.PR-184-450c371';

render(<HostApp />, document.getElementById('root'));