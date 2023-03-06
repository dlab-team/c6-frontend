import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { dataUserNavbar } from '../../utils/index';
import { JobIcon } from '../../assets/SVG/userNavBar';
import '../../styles/UserNavBar.css';

function UserNavbar() {
  const [isExpanded, setIsExpanded] = useState(localStorage.getItem('isExpanded') === 'true');

  const toggleMenu = () => {
    setIsExpanded((prevState) => {
      localStorage.setItem('isExpanded', !prevState);
      return !prevState;
    });
  };

  useEffect(() => {
    const storedIsExpanded = localStorage.getItem('isExpanded') === 'true';
    setIsExpanded(storedIsExpanded);
  }, []);

  return (
    <section 
      className="sidebar text-white bg-[#E2F2FE] rounded-r-3xl flex-col justify-center z-40" 
      style={{ left: isExpanded ? 0 : '-200px', transition: '0.5s' }} 
      onClick={toggleMenu}
    >
      <div className='justify-center mt-8 mb-12'>
        <button className='flex flex-row w-46 bg-white text-[#2738F5] text-base font-bold mt-5 mb-10 py-4 px-6 ml-7 border-solid border-2 border-[#2738f5] rounded-3xl' onClick={(e) => e.stopPropagation()}>
          <img className='pr-2 w-[30px]' src={JobIcon} alt='job icon'/> JOB READY
        </button>
        <ul className='-ml-14'>
          {dataUserNavbar.map((item) => (
            <NavLink to={item.path} key={item.name}>
              {({ isActive }) => (
                <li
                  className={`flex flex-row justify-center hover:bg-blue-300 ${
                    isActive ? 'bg-[#008FF7]' : 'text-[#2738f5]'
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={`flex flex-row grid grid-cols-2 gap-4 py-4 ml-12 pl-8 items-right w-56 `}>
                    <div>
                      {item.name}
                    </div>
                    <div className='ml-16'>
                      <img
                        className='pr-1'
                        src={isActive ? item.icon2 : item.icon}
                        alt={item.name}
                      />
                    </div>
                  </div>
                </li>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UserNavbar;