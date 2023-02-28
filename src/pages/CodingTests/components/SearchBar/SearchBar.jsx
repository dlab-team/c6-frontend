import React from 'react';

function SearchInput({ value, onChange }) {
  return (
    <>
      <h2 className='text-black text-xl mb-3'>Habilidades</h2>
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
