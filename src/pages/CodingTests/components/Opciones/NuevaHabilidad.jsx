import React, { useContext, useState } from 'react';
import { decodeToken } from 'react-jwt';
import { AuthContext } from '../../../../Context/AuthContext';
import ModalCreateSkill from './modal/ModalCreateSkill';

const NuevaHabilidad = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  document.body.style.overflow = `${openModal ? 'hidden' : 'visible'}`;

  // const token = sessionStorage.getItem('userToken');
  // let decodedToken = decodeToken(token);

  // decodedToken.isAdmin = true;

  const { token } = useContext(AuthContext);
  const user = decodeToken(token)

  const CrearSkill = () => {
    return (
      <button
        onClick={handleOpenModal}
        className="bg-[#89CFD9] text-black rounded p-2"
      >
        + Agregar habilidad
      </button>
    );
  };

  return (
    <div>
      {user.isAdmin && (
        <>
          <CrearSkill></CrearSkill>

          {openModal && (
            <ModalCreateSkill handleCloseModal={handleCloseModal} />
          )}
        </>
      )}
    </div>
  );
};

export default NuevaHabilidad;
