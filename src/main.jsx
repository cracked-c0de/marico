import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/marico'>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
