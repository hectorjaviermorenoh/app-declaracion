import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from "react-router-dom";

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/base/base.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
