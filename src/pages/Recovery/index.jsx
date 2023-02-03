import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { EmailRequest, NewPassword } from './components/index';
import { ModalCustomMessage } from '../../components/index';
import ModalLoginRegister from '../../components/modal/ModalLoginRegister';

const RecoveryPage = () => {
  const { token } = useParams();
  const [response, setResponse] = useState(null);

  return (
    <>
      {response ? (
        <ModalCustomMessage type={response.type} message={response.message} />
      ) : (
        <ModalLoginRegister>
          <h1 className='text-5xl text-center mb-11'>Recupera tu contraseña</h1>
          {
            token ?
              <NewPassword setResponse={setResponse} token={token} />
              :
              <EmailRequest setResponse={setResponse} />
          }
        </ModalLoginRegister>
      )}
    </>
  );
};

export default RecoveryPage;
