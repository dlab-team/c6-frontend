import React from "react";
import Header from "../components/Header";
import { ModalCustomMessage } from "../components/modal";
import ModalLoginRegister from "../components/modal/ModalLoginRegister";

export const Register = () => {
  return (
    <>
      <Header />
      <ModalLoginRegister>
        <h1 className="text-5xl text-center mb-11">Regístrate</h1>
        <form className="flex flex-col gap-y-6">
          <div className="flex gap-5 ">
            <div className="flex items-center gap-3">
              <label>Nombre: </label>
              <div className="">
                <input
                  type="text"
                  className="px-3 py-1 border rounded-md border-stone-500 bg-sky-100"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <label>Apellido: </label>
              <div className="">
                <input
                  type="text"
                  className="px-3 py-1 border rounded-md border-stone-500 bg-sky-100"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <span className="block grow">Ingresa tu correo:</span>
            <input
              type="email"
              className="w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100"
            />
          </div>
          <div className="flex items-center ">
            <span className="block grow">Crea tu contraseña:</span>
            <input
              type="email"
              className="w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100"
            />
          </div>{" "}
          <div className="flex items-center ">
            <span className="block grow">Crea tu contraseña::</span>
            <input
              type="email"
              className="w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100"
            />
          </div>
        </form>
      </ModalLoginRegister>
    </>
  );
};
