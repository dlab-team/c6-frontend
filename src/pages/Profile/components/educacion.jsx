import React, { useContext, useState } from 'react';
import { Edit, Bin, School, Add } from '../../../assets/SVG/profile';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import ModalEducacion from './modal/ModalEducacion';
import EducacionForm from './modal/EducacionForm';

function Educacion({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const { token, decodedToken } = useContext(AuthContext);

  document.body.style.overflow = `${openModal ? 'hidden' : 'visible'}`;

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const EditarEducacion = () => {
    return (
      <button
        onClick={handleOpenModal}
        className="justify-items-end text-black text-lg p-1 border-black rounded-md"
      >
        <img src={Add} alt="edit" className="-mt-3" />
      </button>
    );
  };

  return (
    <section className="justify-between py-10 border-b border-[#817E7E]">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-black text-xl items-start flex flex-row text-start">
            <img
              id="edit-image"
              src={School}
              alt="Educación"
              className="w-7 mr-4"
            />
            Educación
          </h2>
        </div>
        <div className="flex flex-col ml-80 justify-self-end">
          <EditarEducacion />
          {openModal && (
            <ModalEducacion
              handleCloseModal={handleCloseModal}
              studies={data.studies}
            />
          )}
        </div>
        <div className='col-span-2 flex flex-row ml-80 mt-5 shrink justify-end items-end'>
          {data.studies.length > 0 &&
            data.studies.map((studies, index) => (
                <ul className="text-black text-right ml-20 mb-8" key={index}>
                  <li className="font-semibold flex flex-row">
                    <img src={Bin} alt="Borrar" className="mr-5" />
                    {studies.name}
                  </li>
                  <li className="font-semibold">{studies.institution.name}</li>
                  {/* <li className="font-semibold">{studies.institutionId}</li> */}
                </ul>
            ))}
        </div>
        <div className="text-right col-span-2 text-black justify-self-end">
          <span className="font-bold">Nivel de inglés:</span>{' '}
          {data.englishLevel}
        </div>
      </div>
    </section>
  );
}

export default Educacion;
