'use client';

import { useState, useEffect } from 'react';
import PageLoader from '@/components/PageLoader';
import BackgroundCircles from '@/components/BackgroundCircles';
import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Page() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMainVisible, setIsMainVisible] = useState(false);

  useEffect(() => {
    // Show main content after page loads
    const timer = setTimeout(() => {
      setIsMainVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (section: string) => {
    const currentSection = document.querySelector('section.active');
    if (currentSection) {
      currentSection.classList.add('fade-out');
      currentSection.classList.remove('active');
    }

    setTimeout(() => {
      const targetSection = document.querySelector(`#${section}`) as HTMLElement;
      if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.remove('fade-out');
        window.scrollTo(0, 0);
      }
      setActiveSection(section);
    }, 500);
  };

  return (
    <>
      <PageLoader />
      <BackgroundCircles />

      <div className={`main ${!isMainVisible ? 'hidden' : ''}`}>
        <Header onNavigate={handleNavigate} />
        <Home onNavigate={handleNavigate} />
        <About onNavigate={handleNavigate} />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
