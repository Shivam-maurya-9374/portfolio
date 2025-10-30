import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Achievements from './components/Sections/Achievements';
import Blog from './components/Sections/Blog';
import Contact from './components/Sections/Contact';
import AIChatbot from './components/AIChatbot/AIChatbot';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/UI/ScrollToTop';
import LoadingScreen from './components/UI/LoadingScreen';
import './styles/App.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Blog />
            <Contact />
          </main>
          <Footer />
          <AIChatbot />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;