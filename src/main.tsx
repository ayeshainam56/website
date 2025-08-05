import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles.css'
import { BrowserRouter } from "react-router-dom"
import 'swiper/css'
import 'swiper/css/autoplay'

// Polyfills
import { Buffer } from "buffer"

// ✅ Minimal process shim for browser
const processShim = {
  env: {
    NODE_ENV: import.meta.env.MODE || "development"
  }
} as const

// Extend window with Buffer and process types
declare global {
  interface Window {
    Buffer: typeof Buffer
    process: typeof processShim
  }
}

if (typeof window !== "undefined") {
  window.Buffer = Buffer
  window.process = processShim
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
