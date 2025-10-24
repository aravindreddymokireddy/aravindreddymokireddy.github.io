'use client';

import { useState } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
    document.body.classList.toggle('hide-scrolling');
  };

  const handleNavClick = (section: string) => {
    setIsActive(false);
    document.body.classList.remove('hide-scrolling');
    onNavigate(section);
  };

  return (
    <>
      <header className={`${styles.header} ${isActive ? styles.active : ''}`}>
        <div className="container">
          <div className="row flex-end">
            <button
              type="button"
              className={`${styles.navToggler} ${isHidden ? styles.hide : ''}`}
              onClick={toggleNavbar}
            >
              <span></span>
            </button>
            <nav className={styles.nav}>
              <div className={styles.navInner}>
                <ul>
                  <li>
                    <a href="#home" className="nav-item link-item" onClick={() => handleNavClick('home')}>
                      home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="nav-item link-item" onClick={() => handleNavClick('about')}>
                      about
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" className="nav-item link-item" onClick={() => handleNavClick('portfolio')}>
                      portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="nav-item link-item" onClick={() => handleNavClick('contact')}>
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className={`${styles.overlay} ${isActive ? styles.active : ''}`}></div>
    </>
  );
}
