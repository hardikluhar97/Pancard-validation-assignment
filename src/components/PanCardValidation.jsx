import { useState } from "react";
import Modal from "react-modal";
import "./../App.css";

// Img Importes
import PanCard from "./../assets/pan.jpg";
import Cancel from "./../assets/cancel.svg";
import LockIcon from "./../assets/lock-icon.png";

import PropTypes from "prop-types";

const PanCardValidation = ({ isOpen, onRequestClose }) => {
  const [panNumber, setPanNumber] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const validatePanCard = () => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return panRegex.test(panNumber);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value.toUpperCase();
    setPanNumber(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(validatePanCard());
    setIsSubmitClicked(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="modal  rounded-lg md:rounded-md"
      overlayClassName="overlay"
    >
      <button onClick={onRequestClose} className="closeIcon">
        <img src={Cancel} alt="Close Icon" />
      </button>

      <section>
        <header className="mb-7">
          <img className="lockIcon" src={LockIcon} alt="Lock Icon" />
          <div>
            <h2 className="text-2xl font-semibold"> Pan Verification</h2>
            <p className="text-base font-light font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              expedita.
            </p>
          </div>
        </header>

        <main className="flex flex-wrap columns-1 md:columns-2 lg:columns-2">
          <div className="w-full sm:w-full  md:w-1/2 lg:w-1/2 panImg p-2">
            <img src={PanCard} alt="Pan card" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-full  md:w-1/2 lg:w-1/2 panForm p-2"
          >
            <div className="inputBox">
              <input
                name="email"
                type="text"
                id="textPanNo"
                maxLength={10}
                value={panNumber}
                onChange={handleChange}
                required
              />
              <label>Enter 10 Digit Pin</label>
            </div>
            <p className="ml-auto w-100 mb-2 text-neutral-500">
              {panNumber.length}/10
            </p>
            <button
              type="submit"
              className="ml-auto w-full outline-none bg-green-700 rounded-md text-white px-4 py-2 shrink-0"
            >
              Validate
            </button>

            {isSubmitClicked && isValid !== null && (
              <p className={isValid ? "text-green-400" : "text-red-400 mt-2"}>
                {isValid ? "PAN Card is valid!" : "Invalid PAN Card format"}
              </p>
            )}
          </form>
        </main>
      </section>
    </Modal>
  );
};

PanCardValidation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};


export default PanCardValidation;
