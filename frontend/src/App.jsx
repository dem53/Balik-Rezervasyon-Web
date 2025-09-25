import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import TourProgramPage from './pages/TourProgramPage';
import AdminPage from './pages/AdminPage';
import TrollingPage from './pages/TrollingPage';
import JiggingPage from './pages/JiggingPage';
import DeepDropFishingPage from './pages/DeepDropFishingPage';
import FAQPage from './pages/FAQ'

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/tour_program' element={<TourProgramPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/faq' element={<FAQPage />} />

          <Route path='/fishing_tour/trolling' element={<TrollingPage />} />
          <Route path='/fishing_tour/jigging' element={<JiggingPage />} />
          <Route path='/fishing_tour/deepdrop_fishing' element={<DeepDropFishingPage />} />

          <Route path='/admin/dashboard/login' element={<AdminLoginPage />} />
          <Route path='/admin/panel' element={<AdminPage />} />

        </Routes>
      </Router>

    </>
  )
}

export default App