import React, { createRef } from 'react'
import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
    <>
    <App />
    </>
)

export default createRoot;
