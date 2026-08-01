import React from 'react'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MatrixRain } from './components/MatrixRain';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
        <MatrixRain />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}