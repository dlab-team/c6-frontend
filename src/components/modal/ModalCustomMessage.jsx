import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { VscError } from "react-icons/vsc";

export const ModalCustomMessage = ({ message = "", type = "" }) => {
  const icons = {
    success: <AiFillCheckCircle className="text-6xl text-blue-700" />,
    warning: <RiErrorWarningFill className="text-6xl text-blue-700" />,
    error: <VscError className="text-6xl text-blue-700" />,
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-700">
      <div className="px-24 py-12 bg-white border border-black rounded-md ">
        <h3 className="text-3xl">{message}</h3>
        <div className="flex justify-center">{icons[type]}</div>
      </div>
    </div>
  );
};
