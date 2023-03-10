import React from "react";

const ModalLoginRegister = ({ children }) => {
  return (
    <div className="h-screen bg-hero bg-no-repeat bg-cover flex justify-center items-center">
      <div className="bg-white px-52 py-24 -mt-20 rounded border-8 border-black text-black">
        {children}
      </div>
    </div>
  );
};

export default ModalLoginRegister;
