import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// @ts-ignore
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
// @ts-ignore
import Counters from './components/counters.tsx'

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();

