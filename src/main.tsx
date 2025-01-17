import { createRoot } from 'react-dom/client'

import '@/shared/styles/style.scss'
import '@fontsource-variable/inter'

import { App } from './app/App'

createRoot(document.getElementById('root')!).render(<App />)
