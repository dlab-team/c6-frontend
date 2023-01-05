import React from 'react'
import { useParams } from 'react-router-dom';
import EmailRequest from './EmailRequest';
import NewPassword from './NewPassword';

const FormCard = () => {

    const { token } = useParams();

    return (
        <div className='container m-auto mx-48 bg-white rounded-2xl border-8 border-[#140B34] p-12'>
            <h3 className='text-center text-black text-5xl font-bold mb-12'>
                Recuperación de contraseña
            </h3>
            <div className='container flex flex-col justify-enter items-stretch'>
                {
                    token ?
                        <NewPassword />
                        :
                        <EmailRequest />
                }
            </div>
        </div>
    )
}

export default FormCard