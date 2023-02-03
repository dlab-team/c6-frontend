import React from 'react';
import { NavLink } from 'react-router-dom';
import { dataUserNavbar } from '../../utils/index';
import { JobIcon } from '../../assets/SVG/userNavBar';

function UserNavbar() {
  return (
    <section className='text-white bg-[#E2F2FE] rounded-tr-3xl w-[350px] flex-col justify-center'>
      <div className='flex justify-center mt-8 mb-12'>
        <button className='flex flex-row w-46 bg-white text-[#2738F5] text-base font-bold py-4 px-6 border-solid border-2 border-[#2738f5] rounded-3xl'>
          <img className='pr-2 w-[30px]' src={JobIcon} alt='job icon' /> JOB READY
        </button>
      </div>
      <ul>
        {dataUserNavbar.map((item) => (
          <NavLink to={item.path} key={item.name}>
            {({ isActive }) => (
              <li
                className={`flex flex-row justify-center hover:bg-blue-300 ${
                  isActive ? 'bg-[#008FF7]' : 'text-[#2738f5]'
                }`}
              >
                <div className={`flex flex-row py-4 pl-11 items-center  w-56 `}>
                  <img
                    className='pr-4'
                    src={isActive ? item.icon2 : item.icon}
                    alt={item.name}
                  />
                  {item.name}
                </div>
              </li>
            )}
          </NavLink>
        ))}
      </ul>
    </section>
  );
}

export default UserNavbar;
