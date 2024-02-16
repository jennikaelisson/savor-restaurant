import React, { useState, useRef, useEffect } from 'react';
import './SlideUpComponent.css';

const SlideUpComponent: React.FC = () => {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (slideRef.current) {
          const slideRect = slideRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          if (slideRect.top < viewportHeight) {
            setShouldAnimate(true);
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="slide-up-container" ref={slideRef}>
      <div className={`content ${shouldAnimate ? 'open' : ''}`}>
      </div>
    </div>
  );
};

export default SlideUpComponent;
