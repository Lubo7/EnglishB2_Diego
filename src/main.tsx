// THIS IS THE CORRECT VERSION TO USE NOW
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ProgressProvider } from './components/ProgressContext.tsx'; // Ensure this import path is correct

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ProgressProvider> {/* <--- ProgressProvider IS WRAPPING App */}
        <App />
      </ProgressProvider>
    </StrictMode>
);