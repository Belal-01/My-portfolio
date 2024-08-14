import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
     <StrictMode>

      <App />


     </StrictMode>
)
