import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import KidsBooking from './pages/KidsBooking';
import ManagementSystem from './pages/ManagementSystem';
import TestPage from './pages/TestPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './styles/global.css';

import NavMenu from './components/NavMenu';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-container">
        <a href="#main-content" className="sr-only focus-visible:not-sr-only skip-link">
          본문 바로가기
        </a>
        
        <Routes>
          <Route path="/" element={<><Header /><NavMenu /><Home /><Footer /></>} />
          <Route path="/booking" element={<><Header /><NavMenu /><Booking /><Footer /></>} />
          <Route path="/management-system" element={<><Header /><NavMenu /><ManagementSystem /><Footer /></>} />
          <Route path="/test-page" element={<><Header /><NavMenu /><TestPage /><Footer /></>} />
          <Route path="/privacy" element={<><Header /><NavMenu /><PrivacyPolicy /><Footer /></>} />
          <Route path="/terms" element={<><Header /><NavMenu /><TermsOfService /><Footer /></>} />
          <Route path="/booking/kids" element={<KidsBooking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

