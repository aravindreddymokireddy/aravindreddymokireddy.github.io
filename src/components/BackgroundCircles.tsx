import styles from './BackgroundCircles.module.css';

export default function BackgroundCircles() {
  return (
    <div className={styles.bgCircles}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
    </div>
  );
}
