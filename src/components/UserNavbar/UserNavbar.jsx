import React from 'react';
import { NavLink } from 'react-router-dom';
import { dataUserNavbar } from '../../utils/index';
import { JobIcon } from '../../assets/SVG/userNavBar';

function UserNavbar() {
  return (
    <section className='text-white bg-[#E2F2FE] rounded-tr-3xl w-96 flex-col'>
      <div className='flex justify-center my-8'>
        <button className='flex flex-row w-52 bg-white text-[#2738F5] text-base font-bold py-4 px-6 border-solid border-2 border-[#2738f5] rounded-3xl'>
          <img className='pr-2' src={JobIcon} alt='job icon' /> JOB READY
        </button>
      </div>
      <ul>
        {dataUserNavbar.map((item, index) => (
          <li>
            <NavLink to={item.path}>
              {({ isActive }) => (
                <div
                  className={`flex flex-row p-4 items-center ${
                    isActive ? 'bg-[#008FF7]' : 'text-[#2738f5]'
                  }`}
                >
                  <img className='pr-4' src={item.icon} alt={item.name} />
                  {item.name}
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserNavbar;
