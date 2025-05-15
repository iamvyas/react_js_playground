import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'


//createRoot comes from react-dom/client , render-> renders react app in DOM mode
//you need to install router to use it "npm install react-router-dom" to use BrowserRouter tag
createRoot(document.getElementById('root')).render(
  //Strict mode is wrapper from react , checks for unsafe life cycle methods and doule render issues
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
