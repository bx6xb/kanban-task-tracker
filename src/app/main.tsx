import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import '../shared/styles/style.scss'
import '@fontsource-variable/inter'

import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
