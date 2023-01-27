import React from 'react';

function cards({ title, subTitle, id }) {
  return (
    <div className='text-xl w-48 h-48 flex flex-col text-black bg-[#E2F2FE] p-3 mr-4 rounded-lg drop-shadow-md'>
      <p className='text-white flex justify-center items-center border-solid border-2 rounded-full w-10 h-10 bg-black my-1'>
        {id}
      </p>
      <p className='w-40'>
        <span className='font-semibold'>{title}</span> {subTitle}
      </p>
    </div>
  );
}

export default cards;
