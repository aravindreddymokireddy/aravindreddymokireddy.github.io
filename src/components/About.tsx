'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

interface AboutProps {
  onNavigate: (section: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="about-section sec-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="row">
          <div className={styles.aboutImg}>
            <div className={styles.imgBox}>
              <Image
                src="/images/profile-img-1.png"
                alt="about img"
                width={380}
                height={380}
              />
            </div>
          </div>
          <div className={styles.aboutText}>
            <p></p>
            <h3>skills</h3>
            <div className={styles.skills}>
              <div className={styles.skillItem}>html</div>
              <div className={styles.skillItem}>css</div>
              <div className={styles.skillItem}>JavaScript</div>
              <div className={styles.skillItem}>c</div>
              <div className={styles.skillItem}>python</div>
              <div className={styles.skillItem}>dbms</div>
              <div className={styles.skillItem}>Flutter</div>
              <div className={styles.skillItem}>Firebase</div>
              <div className={styles.skillItem}>data structures</div>
              <div className={styles.skillItem}>oops concepts</div>
              <div className={styles.skillItem}>computer networking concepts</div>
              <div className={styles.skillItem}>operating systems concepts</div>
              <div className={styles.skillItem}>MongoDB Basics</div>
            </div>
            <div className={styles.aboutTab}>
              <button
                type="button"
                className={`${styles.tabItems} ${activeTab === 'education' ? styles.active : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button
                type="button"
                className={`${styles.tabItems} ${activeTab === 'experience' ? styles.active : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
            </div>

            {/* Education */}
            <div
              className={`${styles.tabContent} ${activeTab === 'education' ? styles.active : ''}`}
              id="education"
            >
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <span className={styles.date}>2018 - 2022</span>
                  <h4>
                    bachelors of technology - <span>IARE</span>
                  </h4>
                  <p></p>
                </div>

                <div className={styles.timelineItem}>
                  <span className={styles.date}>2016 - 2018</span>
                  <h4>
                    Intermediate - <span>Sri Chaitanya Jr. College</span>
                  </h4>
                  <p></p>
                </div>

                <div className={styles.timelineItem}>
                  <span className={styles.date}>2015 - 2016</span>
                  <h4>
                    SSC - <span>Siddartha High School</span>
                  </h4>
                  <p></p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div
              className={`${styles.tabContent} ${activeTab === 'experience' ? styles.active : ''}`}
              id="experience"
            >
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <span className={styles.date}>June 2021 - July 2021</span>
                  <h4>
                    Android App Developer - <span>IARE</span>
                  </h4>
                  <p>
                    Worked as an Android app developer and developed an app for IARE to take
                    registrations for technical fest 2021.
                  </p>
                  <a
                    href="https://github.com/aravindreddymokireddy/IARE-Fest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    github
                  </a>
                </div>

                <div className={styles.timelineItem}>
                  <span className={styles.date}>June 2020 - August 2020</span>
                  <h4>
                    Full Stack Web Developer Intern - <span>Verzeo.in</span>
                  </h4>
                  <p>
                    Worked as a Fullstack Webdeveloper Intern and developed a website for a
                    construction company.
                  </p>
                  <a
                    href="https://github.com/aravindreddymokireddy/Happy_Homes_website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    github
                  </a>
                </div>

                <div className={styles.timelineItem}>
                  <span className={styles.date}>April 2020 - May 2020</span>
                  <h4>
                    ML/DL Developer Intern - <span>Smart Bridge Educational Pvt. Ltd.</span>
                  </h4>
                  <p>
                    Worked as a ML/DL Developer intern and developed a prototype that detects the
                    heart diseases using ECG graphs.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="btn link-item"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
            >
              contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
