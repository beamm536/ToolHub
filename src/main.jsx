import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import githubBtn from './components/githubBtn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <githubBtn />
  </StrictMode>,
)
