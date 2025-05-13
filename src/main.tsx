//import './index.css';
//import { StrictMode } from 'react';
//import { createRoot } from 'react-dom/client';
//import App from './App.tsx';
//import { ProgressProvider } from './components/ProgressContext.tsx';

//createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    //<ProgressProvider>
      //<App />
    //</ProgressProvider>
  //</StrictMode>
//);

// src/main.tsx
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'; // This will be the super simplified App
// import { ProgressProvider } from './components/ProgressContext.tsx'; // Comment out for now

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ProgressProvider> */} {/* Comment out for now */}
      <App />
    {/* </ProgressProvider> */}
  </StrictMode>
);