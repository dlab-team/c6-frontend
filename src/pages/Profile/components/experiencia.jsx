import React, { useContext, useState } from 'react';
import { Edit, Edu, Add, Bin } from '../../../assets/SVG/profile';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import ModalExperiencia from './modal/ModalExperiencia';
import ExperienciaForm from './modal/ExperienciaForm';

function Experiencia(data) {
  const [openModal, setOpenModal] = useState(false);
  const { token, decodedToken } = useContext(AuthContext);

  document.body.style.overflow = `${openModal ? 'hidden' : 'visible'}`;

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const EditarExperiencia = () => {
    return (
      <button
        onClick={handleOpenModal}
        className="justify-items-end text-black text-lg p-1 border-black rounded-md"
      >
        <img src={Add} alt="edit" className="-mt-2" />
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
            Experiencia
          </h2>
        </div>
        <div className="flex flex-col ml-80 justify-end items-end">
          <>
            <EditarExperiencia />
            {openModal && (
              <ModalExperiencia handleCloseModal={handleCloseModal} />
            )}
          </>
          <ul className="text-black text-right mt-5">
            <li className="font-semibold flex flex-row">
              {data.data.yearsOfExperiencie} años de experiencia
            </li>
            <li className="font-semibold flex flex-row justify-self-end">
              Disponibilidad: {data.data.availability}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
