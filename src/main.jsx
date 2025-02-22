import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import App from './App.jsx'
import { HashRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename='/marico'>
      <App />
    </Router>
  </StrictMode>,
)
