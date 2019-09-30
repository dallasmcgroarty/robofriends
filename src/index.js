import React from 'react'; // react view library
import ReactDOM from 'react-dom'; // used for websites, reactnative for mobile apps
import './index.css'; // ./ means same folder
import App from './App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
