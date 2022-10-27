import React from 'react'
 import { createRoot } from 'react-dom/client'
import App from './App'
import Api from './Api'
import Chart from './Chart'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);

//root.render(<App tab="home" />);
root.render(<Api></Api>)
//root.render(<Chart></Chart>)
