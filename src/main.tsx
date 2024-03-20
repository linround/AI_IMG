import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {VisualContext} from "./context/VisualContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisualContext value={{}}>
      <App />
    </VisualContext>
  </React.StrictMode>,
)
