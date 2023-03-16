import React, { useContext, useState } from 'react';
import { Edit, Edu, Add, Bin } from '../../../assets/SVG/profile';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import ModalDisponibilidad from './modal/ModalDisponibilidad';
import DisponibilidadForm from './modal/DisponibilidadForm';

function Disponibilidad(data) {
  const [openModal, setOpenModal] = useState(false);
  const { token, decodedToken } = useContext(AuthContext);

  document.body.style.overflow = `${openModal ? 'hidden' : 'visible'}`;

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const EditarDisponibilidad = () => {
    return (
      <button
        onClick={handleOpenModal}
        className="justify-items-end text-black text-lg p-1 border-black rounded-md"
      >
        <img src={Edit} alt="edit" className="-mt-2" />
      </button>
    );
  };

  return (
    <section className="justify-between py-10 border-b border-[#817E7E]">
      <div className="grid grid-cols-2">
        <div className="flex flex-row">
          <h2 className="text-black text-xl items-start flex flex-row text-start">
            <img
              id="edit-image"
              src={Edu}
              alt="Experiencia"
              className="w-7 mr-4"
            />
            Disponibilidad
          </h2>
        </div>
        <div className="flex flex-col ml-80 justify-end items-end">
          <>
            <EditarDisponibilidad />
            {openModal && (
              <ModalDisponibilidad handleCloseModal={handleCloseModal} />
            )}
          </>
          <ul className="text-black text-right mt-5">
            <li className="font-semibold flex flex-row justify-self-end justify-end items-end">
              Disponibilidad {data.data.availability}-time 
            </li>
            <li className="font-semibold flex flex-row justify-self-end justify-end items-end">
              Disponibilidad inmediata
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Disponibilidad;