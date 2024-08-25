import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import { QuizzProvider } from './context/Quizz.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QuizzProvider>
        <App />
      </QuizzProvider>
    </BrowserRouter>
  </StrictMode>,
)
