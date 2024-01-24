import React, { useState } from 'react';
import close from '../icons/close-circle.svg'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOnClose = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  window.addEventListener('keydown', handleOnClose);

  const handleOverlyClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

   return (
     <div className="App">

      {(isModalOpen) && (
        <div className="modalOverly" onClick={handleOverlyClick}></div>
      )}

       <button onClick={openModal} className="open-button">Open modal</button>

       {isModalOpen && (
           <>
            <div className="modalUserContent">
              <img src={close} alt="close svg" onClick={closeModal} className="svg-close"/>
            </div>
           </>
          )}

     </div>
   );
 }
 
 export default App;