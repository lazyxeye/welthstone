import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-obsidian text-text-primary font-sans antialiased">
        <Header />
        <Hero />
        <Philosophy />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;