import React from "react";
import { render } from "react-dom";
import App from './components/App';
import Header from './components/Header';
import StorePicker from './components/StorePicker';
import './css/style.css';

render(<Header/>, document.querySelector('#main'));
// render(<StorePicker/>, document.querySelector('#main'));