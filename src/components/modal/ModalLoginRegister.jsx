import React from "react";
import "../../styles/modalRegister.css";

const ModalLoginRegister = ({ children }) => {
  return (
    <div className="minH">
      <div className="px-20 pt-10 pb-24 text-black bg-white border border-4 border-black rounded-md ">
        {children}
      </div>
    </div>
  );
};

export default ModalLoginRegister;
