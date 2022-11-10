import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Maderoom } from './maderoom'

import './css/estilo.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Maderoom/>
    </BrowserRouter>
  </React.StrictMode>
)
