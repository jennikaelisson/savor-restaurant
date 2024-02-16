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

      <button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Make a new booking
			</button>
      <div
				className="modal fade"
				id="exampleModal"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								New booking
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body"><Book /></div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
    </>
  );
};
