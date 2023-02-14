import React from 'react';

const ModalCustomMessage = ({ message, setOpenModal }) => {

  return (
    <div id='modal-backdrop' onClick={(e) => {
      if (e.target.id === 'modal-backdrop') { setOpenModal(false) }
    }}>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
        <div onClick={(e) => e.stopPropagation()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[17rem] border-stone-500 bg-sky-100 rounded-md">
          <div className="flex flex-col items-center justify-center h-full text-black">

            <button
              className="absolute top-4 right-4 text-black font-bold"
              type="button"
              onClick={() => setOpenModal(false)}
            >
              X
            </button>
            <h3 className='text-3xl text-center'>{message}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCustomMessage;
