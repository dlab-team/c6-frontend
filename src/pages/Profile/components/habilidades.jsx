import React, { useContext, useState } from 'react';
import { Edit } from '../../../assets/SVG/profile';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import { decodeToken } from 'react-jwt';

function Habilidades({ data }) {
  const habilidades3 = data.filter((skill) => skill.SkillWorkProfile.level === 3)
  const habilidades2 = data.filter((skill) => skill.SkillWorkProfile.level === 2)
  const habilidades1 = data.filter((skill) => skill.SkillWorkProfile.level === 1)
  return (
    <section className='py-10 border-b border-[#817E7E]'>
      <h2 className='text-black text-2xl mb-10'>Habilidades</h2>
      <div className='grid grid-cols-[190px_minmax(150px,1fr)]'>
        <h3 className='text-black items-center py-2 text-xl'>Avanzado</h3>
        <ul className='text-base flex flex-row flex-wrap'>
        {habilidades3.map((skill, index) => (
          <li key={index} className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            {skill.name}
          </li>
        ))}
      </ul>
      </div>
      <div className='grid grid-cols-[190px_minmax(150px,1fr)]'>
        <h3 className='text-black items-center py-2 text-xl'>Experimentado</h3>
        <ul className='flex flex-row flex-wrap text-base'>
          {habilidades2.map((skill, index) => (
            <li key={index} className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='grid grid-cols-[190px_minmax(150px,1fr)]'>
        <h3 className='text-black items-center py-2 text-xl'>Principiante</h3>
        <ul className='flex flex-row flex-wrap text-base'>
        {habilidades1.map((skill, index) => (
          <li key={index} className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            {skill.name}
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
}

export default Habilidades;

 {/* <section className="justify-between py-10 border-b border-[#817E7E]">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-black text-xl items-start flex flex-row text-start">
            <img
              id="edit-image"
              src={School}
              alt="Educación"
              className="w-7 mr-4"
            />
            Educación
          </h2>
        </div>
        <div className="flex flex-col ml-80 justify-self-end">
          <EditarEducacion />
          {openModal && (
            <ModalEducacion
              handleCloseModal={handleCloseModal}
              studies={data.studies}
            />
          )}
        </div>
        {data.studies.length > 0 &&
          data.studies.map((studies) => (
            <div className="flex flex-col ml-80 mt-5 shrink justify-end items-end">
              <ul className="text-black text-right" key={studies.id}>
                <li className="font-semibold flex flex-row">
                  <img src={Bin} alt="Borrar" className="mr-5" />
                  {studies.name}
                </li>
                <li className="font-semibold">{studies.institutionId}</li>
                <li className="font-semibold">{studies.institutionId}</li>
              </ul>
            </div>
          ))}
      </div>
    </section> */}






/* import React from 'react';

function Habilidades() {
  return (
    <section className='py-10 border-b border-[#817E7E]'>
      <h2 className='text-black text-2xl mb-10'>Habilidades</h2>
      <div className='grid grid-cols-[190px_minmax(150px,1fr)]'>
        <h3 className='text-black items-center py-2 text-xl'>Avanzado</h3>
        <ul className='text-base flex flex-row flex-wrap'>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            HTML
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-3 mb-3 border-[#2738F5]'>
            React js
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-3 mb-3 border-[#2738F5]'>
            Java
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-3 mb-3 border-[#2738F5]'>
            JavaScript
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-3 mb-3 border-[#2738F5]'>
            Swift
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-3 mb-3 border-[#2738F5]'>
            Kotlin
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-3 mb-3 border-[#2738F5]'>
            Flutter
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-3 mb-3 border-[#2738F5]'>
            Bootstrap
          </li>
        </ul>
      </div>
      <div className='grid grid-cols-[190px_minmax(150px,1fr)]'>
        <h3 className='text-black items-center py-2 text-xl'>Experimentado</h3>
        <ul className='flex flex-row flex-wrap text-base'>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            HTML
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            React js
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            Java
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            JavaScript
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            Swift
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            Kotlin
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            Flutter
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            Bootstrap
          </li>
        </ul>
      </div>
      <div className='grid grid-cols-[190px_minmax(150px,1fr)]'>
        <h3 className='text-black items-center py-2 text-xl'>Principiante</h3>
        <ul className='flex flex-row flex-wrap text-base'>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            HTML
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            React js
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            Java
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            JavaScript
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            Swift
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            Kotlin
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            Flutter
          </li>
          <li className='text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]'>
            Bootstrap
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Habilidades;
 */