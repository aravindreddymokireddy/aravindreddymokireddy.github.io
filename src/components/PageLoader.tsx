'use client';

import { useEffect, useState } from 'react';
import styles from './PageLoader.module.css';

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.pageLoader} ${styles.fadeOut}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
