import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div>Side panel content</div>
  )
}

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
root.render(<App />)
