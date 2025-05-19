// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Dashboard from './pages/dashboard.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LaunchDetails from './components/LaunchDetails.tsx';
import LaunchFavorite from './components/LaunchFavorite.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/dashboard/:id" element={<LaunchDetails />} />
      <Route path="/dashboard/favorites" element={<LaunchFavorite />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>,
)
