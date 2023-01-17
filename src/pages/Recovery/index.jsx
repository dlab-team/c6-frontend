import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { EmailRequest, NewPassword } from './components/index';
import { ModalCustomMessage } from '../../components/index';

const RecoveryPage = () => {
  const { token } = useParams();
  const [response, setResponse] = useState(null);

  return (
    <>
      {response ? (
        <ModalCustomMessage type={response.type} message={response.message} />
      ) : (
        <section
          id='password-recovery'
          className='bg-gradient-to-b from-[#2738F5] to-[#1E239A] stops-[#140B34] min-w-screen min-h-screen flex justify-center align-middle'
        >
          <div className='container m-auto mx-48 bg-white rounded-2xl border-8 border-[#140B34] p-12'>
            <h3 className='text-center text-black text-5xl font-bold mb-12'>
              Recuperación de contraseña
            </h3>
            <div className='container flex flex-col justify-enter items-stretch'>
              {token ? (
                <NewPassword setResponse={setResponse} token={token} />
              ) : (
                <EmailRequest setResponse={setResponse} />
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RecoveryPage;
