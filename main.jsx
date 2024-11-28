import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import ShopContextProvider from './components/ShopContext/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
 <ShopContextProvider>
   <HashRouter>
  <StrictMode>
    <App />
  </StrictMode>
   </HashRouter>
  </ShopContextProvider>
)
