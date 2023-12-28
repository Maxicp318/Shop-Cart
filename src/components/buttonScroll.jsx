import { useState, useEffect } from "react";
import styles from './buttonScroll.module.css'

function BtnScroll() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 20);
  };

  const handleButtonClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <button
      className={`${styles.btn} scroll-btn ${isVisible ? '' : 'hidden'}`}
      onClick={handleButtonClick}
      >volver
      </button>
  )
}

export default BtnScroll;
