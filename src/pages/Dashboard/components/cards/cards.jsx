import React from 'react';
import { Link } from 'react-router-dom';

function cards({ title, subTitle, id, path }) {
  console.log(path);
  return (
    <Link to={`/user/${path}`}>
      <button className='text-xl w-48 h-48 mt-3 flex flex-col text-black bg-[#E2F2FE] p-3 mr-4 rounded-lg drop-shadow-md'>
        <p className='text-white flex justify-center items-center border-solid border-2 rounded-full w-10 h-10 bg-black my-1'>
          {id}
        </p>
        <p className='w-40'>
          <span className='font-semibold'>{title}</span> {subTitle}
        </p>
      </button>
    </Link>
  );
}

export default cards;
