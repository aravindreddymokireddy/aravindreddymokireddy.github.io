'use client';

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className="contact-section sec-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>contact me</h2>
          </div>
        </div>
        <div className="row">
          <div className={styles.contactForm}>
            <form action="https://getform.io/f/e247ac0b-d2f5-4ae8-bf97-cf7e2d779b8d" method="post">
              <div className="row">
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Name"
                    className={styles.inputControl}
                    name="name"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Email"
                    className={styles.inputControl}
                    name="email"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Subject"
                    className={styles.inputControl}
                    name="subject"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <textarea
                    placeholder="Message"
                    className={styles.inputControl}
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="btn">
                    send message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoItem}>
              <h3>Email</h3>
              <p>aravindreddy.mokireddy@gmail.com</p>
            </div>
            <div className={styles.contactInfoItem}>
              <h3>Follow Me</h3>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/aravindreddymokireddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/aravindreddy-m/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/aravindreddy.mokireddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/M_Aravindreddy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
