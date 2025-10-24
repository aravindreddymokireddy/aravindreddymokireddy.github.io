'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

interface PortfolioItem {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  created: string;
  technologies: string;
  role: string;
  viewOnline: {
    text: string;
    url: string;
  };
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    thumbnail: '/images/portfolio/1.jpg',
    title: 'personal website',
    description: 'My personal portfolio website that showcases my works and my details.',
    created: '16 Sept 2021',
    technologies: 'html, css, javascript',
    role: 'Frontend',
    viewOnline: {
      text: 'https://www.armr.tech',
      url: 'https://armr.tech',
    },
  },
  {
    id: 2,
    thumbnail: '/images/portfolio/3.jpg',
    title: 'Flutter App',
    description:
      'Developed an Android app using flutter to take registrations for Technical Fest 2021 @ IARE.',
    created: '20 june 2021 - 20 july 2021',
    technologies: 'flutter and firebase',
    role: 'Frontend',
    viewOnline: {
      text: 'playstore',
      url: 'https://play.google.com/store/apps/details?id=com.iare.eventx',
    },
  },
  {
    id: 3,
    thumbnail: '/images/portfolio/4.jpg',
    title: 'interior designing company website',
    description:
      'Develped a website for a Home interior designing company to showcase thir services and works.',
    created: 'May 2020',
    technologies: 'html, css, javascript',
    role: 'Frontend',
    viewOnline: {
      text: 'View Website',
      url: 'http://aravindreddy.me/Happy_Homes_website/',
    },
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const openPopup = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.classList.add('hide-scrolling');
  };

  const closePopup = () => {
    setSelectedItem(null);
    document.body.classList.remove('hide-scrolling');
  };

  return (
    <>
      <section className={`${styles.portfolioSection} sec-padding`} id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>recently worked</h2>
            </div>
          </div>
          <div className="row">
            {portfolioItems.map((item) => (
              <div className={styles.portfolioItem} key={item.id}>
                <div className={styles.portfolioItemThumbnail}>
                  <Image
                    src={item.thumbnail}
                    alt={`portfolio item thumbnail ${item.id}`}
                    width={400}
                    height={300}
                  />
                </div>
                <h3 className="portfolio-item-title">{item.title}</h3>
                <a
                  href="#"
                  className="btn view-project-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    openPopup(item);
                  }}
                >
                  view project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Popup */}
      <div className={`${styles.portfolioPopup} ${selectedItem ? styles.open : ''}`}>
        <div
          className={styles.ppInner}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closePopup();
            }
          }}
        >
          <div className={styles.ppContent}>
            <div className={styles.ppHeader}>
              <button type="button" className="btn pp-close" onClick={closePopup}>
                <i className="fas fa-times"></i>
              </button>
              {selectedItem && (
                <>
                  <div className={styles.ppThumbnail}>
                    <Image
                      src={selectedItem.thumbnail}
                      alt="portfolio image"
                      width={840}
                      height={600}
                    />
                  </div>
                  <h3>{selectedItem.title}</h3>
                </>
              )}
            </div>
            {selectedItem && (
              <div className={styles.ppBody}>
                <div className={styles.description}>
                  <p>{selectedItem.description}</p>
                </div>
                <div className={styles.generalInfo}>
                  <ul>
                    <li>
                      Created - <span>{selectedItem.created}</span>
                    </li>
                    <li>
                      technologies used - <span>{selectedItem.technologies}</span>
                    </li>
                    <li>
                      Role - <span>{selectedItem.role}</span>
                    </li>
                    <li>
                      View online -{' '}
                      <span>
                        <a href={selectedItem.viewOnline.url} target="_blank" rel="noopener noreferrer">
                          {selectedItem.viewOnline.text}
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
