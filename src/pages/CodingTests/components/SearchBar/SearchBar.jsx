import React from 'react';
import {
  Edit,
  Bin
} from '../../../../assets/SVG/profile/index';

function SearchInput({ value, onChange }) {
  return (
    <>
      <div className='flex justify-between mb-3'>
        <h2 className='text-black text-xl mb-3'>Habilidades</h2>
        <div className='flex gap-2'>
          <button className='bg-[#89CFD9] text-black rounded px-2'>+ Agregar tag</button>
          <button className='bg-[#89CFD9] text-black rounded p-2 flex items-center'>
            <img src={Edit} alt='edit' className='pr-2 h-4' />
            Editar tag
          </button>
          <button className='bg-[#AC231B] text-white rounded p-2 flex items-center'>
            <img src={Bin} alt='edit' className='pr-2 h-4' />
            Eliminar tag
          </button>
        </div>
      </div>
      <input
        type='text'
        placeholder='Buscar habilidades'
        value={value}
        onChange={onChange}
        className='text-[#575253] w-[60%] p-2 border-solid border-2 rounded-lg bg-[#E2F2FE] border-[#b5abad] bg-no-repeat bg-[url("https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg")] bg-[length:20px] bg-[center_right_1rem] mb-8'
      />
    </>
  );
}

export default SearchInput;
