import React, { useContext, useState } from 'react';
import { Edit } from '../../../assets/SVG/profile';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import { decodeToken } from 'react-jwt';

function Habilidades({ data }) {
  let habilidades1 = [];
  let habilidades2 = [];
  let habilidades3 = [];

  if (!data) {
    habilidades3 = data.filter((skill) => skill.SkillWorkProfile.level === 3);
    habilidades2 = data.filter((skill) => skill.SkillWorkProfile.level === 2);
    habilidades1 = data.filter((skill) => skill.SkillWorkProfile.level === 1);
  }

  return (
    <section className="py-10 border-b border-[#817E7E]">
      <h2 className="text-black text-2xl mb-10">Habilidades</h2>
      <div className="grid grid-cols-[190px_minmax(150px,1fr)]">
        <h3 className="text-black items-center py-2 text-xl">Avanzado</h3>
        <ul className="text-base flex flex-row flex-wrap">
          {habilidades3.map((skill, index) => (
            <li
              key={index}
              className="text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-[190px_minmax(150px,1fr)]">
        <h3 className="text-black items-center py-2 text-xl">Experimentado</h3>
        <ul className="flex flex-row flex-wrap text-base">
          {habilidades2.map((skill, index) => (
            <li
              key={index}
              className="text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-[190px_minmax(150px,1fr)]">
        <h3 className="text-black items-center py-2 text-xl">Principiante</h3>
        <ul className="flex flex-row flex-wrap text-base">
          {habilidades1.map((skill, index) => (
            <li
              key={index}
              className="text-black border-solid border rounded-lg p-2 mr-4 mb-4 border-[#2738F5]"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Habilidades;
