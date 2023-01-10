import React from "react";
import logo from "../assets/images/Logo-horizontal.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="flex items-center h-20 text-white justify-between px-2 py-3 bg-[#2738F5]">
        <Link to={"/"}>
          <img className="w-40 h-12 ml-28" src={logo} alt="Logo" />
        </Link>

        <ul className="hidden md:flex gap-4">
          <li className="w-28 h-7 mt-4">
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li className="w-52 h-7 mt-4">
            <Link to="/">Administra la Página</Link>
          </li>

          <button
            type="button"
            className="hidden md:block border-solid border-zinc-100 border py-4 px-4 rounded-md  hover:opacity-80 "
          >
            <Link to="/register">Registrate</Link>
          </button>

          <button
            type="button"
            className="hidden md:block bg-zinc-100 py-4 px-4 mr-4 rounded-md hover:opacity-80 text-[#2738F5] "
          >
            Contáctanos
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Header;
