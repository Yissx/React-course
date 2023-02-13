import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './AppCounter';
import { HelloWorld } from './FirstApp';
import './styles.css';

const root = ReactDOM.createRoot( document.getElementById('root') )

//root.render(<HelloWorld/>)
root.render(<CounterApp value={23}/>)
