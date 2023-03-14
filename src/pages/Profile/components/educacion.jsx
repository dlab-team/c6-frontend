import React, { useContext, useState } from 'react';
import { Edit, Bin } from '../../../assets/SVG/profile';
import { School } from '../../../assets/SVG/profile';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import ModalEducacion from './modal/ModalEducacion';
import EducacionForm from './modal/EducacionForm';

function Educacion({data}) {
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
        className='justify-items-end text-black text-lg p-1 border-black rounded-md'>
        <img src={Edit} alt='edit' className='pr-2' />
      </button>
    );
  };
  console.log("data:", data);

  return (
    <section className='justify-between py-10 border-b border-[#817E7E]'>
    <div className='grid grid-cols-2'>
      <div>
        <h2 className='text-black text-xl items-start flex flex-row text-start'>
          <img id='edit-image' src={School} alt='Educación' className='w-7 mr-4' />
          Educación
        </h2>
      </div>
      <>
          <EditarEducacion className='flex flex-col ml-80 justify-items-end justify-self-end'/>
          {openModal && (
            <ModalEducacion handleCloseModal={handleCloseModal} />
          )}
        </>
      {data.studies.map((studies) => (
        <div className='flex flex-col ml-80 shrink justify-end items-end'>
          <ul className='text-black text-right' key={studies.id}>
            <li className='font-semibold flex flex-row'><img src={Bin} alt="Borrar" className='mr-5'/>{studies.name}</li>
            <li className='font-semibold'>{studies.institutionId}</li>
            <li className='font-semibold'>{studies.institutionId}</li>
          </ul>
        </div>
      ))}
    </div>
  </section>
  
  );
}

export default Educacion;