import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ImageSlideshow from './components/ImageSlideshow';
import LearningSection from './components/LearningSection';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <ImageSlideshow />
              <LearningSection />
              <ImpactSection />
            </>
          } />
          {/* Add more routes for feature pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;