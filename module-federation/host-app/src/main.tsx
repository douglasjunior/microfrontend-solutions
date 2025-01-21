/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
window.process = window.process || {}; 
// @ts-ignore
window.process.env = window.process.env || {};

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
