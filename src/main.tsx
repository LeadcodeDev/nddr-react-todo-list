import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app.tsx'
import { TaskProvider } from './contexts/task_context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
)
