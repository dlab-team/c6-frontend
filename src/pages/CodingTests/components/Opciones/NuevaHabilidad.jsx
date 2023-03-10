import React, {useState} from 'react';
import { decodeToken } from 'react-jwt';
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
  
    //const { token } = useContext(AuthContext);
    const token = sessionStorage.getItem('userToken');
    let decodedToken = decodeToken(token);
  
    decodedToken.isAdmin = true;
  
  
    const CrearSkill = () => {
      return (
        <div className='text-white font-bold border-solid border rounded-lg p-2 mr-4 mb-7 border-[#2738F5] justify-end bg-[#2738F5] '>
          <button onClick={handleOpenModal}>
            Agregar habilidad
          </button>
        </div>
      )
    };

    return (
        <div>
             {
          decodedToken.isAdmin && (
            <>
            <CrearSkill></CrearSkill>
            
            {openModal && (
            <ModalCreateSkill handleCloseModal={handleCloseModal}/>)}    
            
          </>
          )
        }
        </div>
    );
}

export default NuevaHabilidad;
