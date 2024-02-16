import { useEffect, useState } from 'react';
import './FadeInComponent.css';

const FadeInComponent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in-container ${isVisible ? 'visible' : ''}`}>
     
    </div>
  );
};

export default FadeInComponent;
