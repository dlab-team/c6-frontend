import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';
import { decodeToken } from 'react-jwt';
import profilePicture from '../../../assets/images/blank-profile-picture.png';

function UserSection() {
  const { dispatch, token } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const decodedToken = decodeToken(token);

  const user = {
    name: decodedToken.name,
    isAdmin: decodedToken.isAdmin,
  };

  const handlelogout = () => {
    dispatch({ type: 'LOGOUT' });
    sessionStorage.removeItem('userToken');
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='flex flex-row justify-center items-center px-4'>
      <p className=''>{user.name ? user.name : 'Usuario'}</p>
      <button onClick={handleDropdown} type="button" className='ml-5'>
        <img className="w-10 h-10 rounded-full" src={user.profilePicture ? user.profilePicture : profilePicture} alt="Foto de perfil" />
      </button>
      <div id="dropdown" className={(showDropdown ? " " : "hidden ") + (user.isAdmin ? "mt-64 " : "mt-56 ") + "absolute mr-10 z-10  bg-white divide-y rounded-lg shadow w-44"}>
        <ul className="py-2 text-sm text-primary">
          <li>
            <Link to={'/'} className="block px-4 py-2 hover:bg-primary hover:text-white">Inicio</Link>
          </li>
          <li>
            <Link to={'/user/dashboard'} className="block px-4 py-2 hover:bg-primary hover:text-white">Dashboard</Link>
          </li>
          <li>
            <Link to={'/user/profile'} className="block px-4 py-2 hover:bg-primary hover:text-white">Perfil</Link>
          </li>
          {
            user.isAdmin &&
            <li>
              <button className="block px-4 py-2 hover:bg-primary hover:text-white w-full text-start">Administrar</button>
            </li>
          }
          <li>
            <button onClick={handlelogout} className="block px-4 py-2 hover:bg-primary hover:text-white w-full text-start">Cerrar Sesión</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserSection;
