import React from "react"
import {Provider, connect} from 'react-redux';
import ReactDOM from "react-dom"
//import store from './store/store';
import store from './store/index';
import App from "./components/App"

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"))
//make sure "root" is right or change it
