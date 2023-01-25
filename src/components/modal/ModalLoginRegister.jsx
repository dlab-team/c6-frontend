import React from "react";

const ModalLoginRegister = ({ children }) => {
  return (
    <div className=" h-[calc(100vh-80px)] flex justify-center items-center minH bg-center bg-cover bg-no-repeat bg-hero">
      <div className="px-20 pt-10 pb-24 text-black bg-white border-4 border-black rounded-md ">
        {children}
      </div>
    </div>
  );
};

export default ModalLoginRegister;
