import { useState } from "react";
import "./App.css";
import PanCardValidation from "./components/PanCardValidation";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div>
        <button
          onClick={openModal}
          className="mx-auto w-100 outline-none rounded-md bg-blue-700 text-white px-4 pt-2 pb-3 shrink-0 text-sm/[3]  md:text-2xl"
        >
          Please Click to Verify PanCard
        </button>
        <PanCardValidation isOpen={modalIsOpen} onRequestClose={closeModal} />
      </div>
    </div>
  );
}

export default App;
