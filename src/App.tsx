import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-obsidian text-text-primary font-sans antialiased">
        <Header />
        <Hero />
        <ValueProposition />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;