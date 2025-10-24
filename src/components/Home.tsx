'use client';

import Image from 'next/image';
import styles from './Home.module.css';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className={`${styles.homeSection} align-items-center active`} id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className={styles.homeText}>
            <p>Hello, I&apos;m</p>
            <h1>aravind reddy m</h1>
            <h2>front-end developer , flutter developer, freelancer</h2>
            <a
              href="#about"
              className="btn link-item"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
            >
              more about me
            </a>
            <a
              href="#portfolio"
              className="btn link-item"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('portfolio');
              }}
            >
              portfolio
            </a>
          </div>
          <div className={styles.homeImg}>
            <div className={styles.imgBox}>
              <Image
                src="/images/profile-img-1.png"
                alt="profile-img"
                width={360}
                height={360}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
