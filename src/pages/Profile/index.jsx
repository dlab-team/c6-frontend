import React, { useContext, useEffect, useState } from 'react';
import {
  Edit,
  Email,
  Doc,
  Linkedin,
  Github,
  Phone,
} from '../../assets/SVG/profile/index';
import profileimg from '../../assets/images/square-xxl.png';
import { Educacion, Habilidades, Experiencia, Disponibilidad, Salario } from './components';
import { AuthContext } from '../../Context/AuthContext';
import { decodeToken } from 'react-jwt';

function Profile() {
  
  const url = process.env.REACT_APP_BACKEND_URL + '/profiles/me';
  const { token } = useContext(AuthContext);
  const decodedToken = decodeToken(token);
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  const initialCurrentUser = {
    name: decodedToken.name,
    email: decodedToken.email,
  };
   
  const [currentUser, setCurrentUser] = useState(initialCurrentUser);

  const getUser = async () => {
      const response = await fetch(url, config);
      console.log("response:", response);
      const data = await response.json();
      console.log("data:", data);
      setCurrentUser({
        ...currentUser,
        profile: data.body.profile,
      })
  }

  console.log("currentUser: ", currentUser);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main className='bg-white my-14 md:ml-80 m-20'>
      <section className='flex flex-row justify-between mb-24'>
        <h1 className='text-black text-4xl font-semibold'>Bienvenido!</h1>
        <button className='text-black text-lg border-solid border p-1 border-black rounded-md'>
          <div className='flex flex-row items-start'>
            <img src={Edit} alt='edit' className='pr-2' />
            Editar
          </div>
        </button>
      </section>
      <section className='flex flex-row justify-between pb-10 border-b border-[#817E7E]'>
        <div className='text-black flex flex-row items-start'>
          <img src={Doc} alt='document' className='pr-2' />
          <h2 className='text-xl'>Sube tu CV</h2>
        </div>
        <button className='text-blue-600'>curriculum.pdf</button>
      </section>
      <section className='py-10 border-b border-[#817E7E]'>
        <ul className='grid grid-rows-2 grid-cols-2 w-2/5 items-center text-black'>
          <li className='row-span-2'>
            <img
              src={profileimg}
              alt='profile url'
              className='w-24 rounded-full'
            />
          </li>
          <li className='align-middle font-semibold text-2xl'>{currentUser.name}</li>
          <li className='align-middle text-xl'>{currentUser?.profile.cityId}</li>
        </ul>
        <ul className='flex flex-row items-center gap-8 mt-8 text-black'>
          <li className='flex flex-row items-center gap-3'>
            <img src={Email} alt='email' />
            <p className='text-black text-base'>{currentUser.email}</p>
          </li>
          <li className='flex flex-row items-center gap-3 mr-2 text-black'>
            <img src={Phone} alt='phone' />
            <p className='text-base'>{currentUser?.profile.phone}</p>
          </li>
          <li className='flex flex-row items-center mr-6'>
            <img src={Linkedin} alt='linkedin'/>
            <p className='text-base'>{currentUser?.profile.workProfile.linkedinUrl}</p>
          </li>
          <li className='flex flex-row items-center'>
            <img src={Github} alt='github' />
          </li>
        </ul>
      </section>
      <Educacion data = { currentUser?.profile.educationalProfile } />
      <Experiencia />
      <Disponibilidad />
      <Salario />
      <Habilidades />
    </main>
  );
}

export default Profile;
