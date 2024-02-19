import { useState } from 'react';
import Book from '../pages/Book';

export const AdminCreateBooking = () => {
  const [isBookVisible, setBookVisibility] = useState(false);
  const [isButtonVisible, setButtonVisibility] = useState(true);

  const handleButtonClick = () => {
    setBookVisibility(true);
    setButtonVisibility(false);
  };

  return (
    <>
      {isButtonVisible && (
        <button className="btn btn-outline-primary" onClick={handleButtonClick}>
          Make a new booking
        </button>
      )}
      {isBookVisible && <Book />}

     
    </>
  );
};
