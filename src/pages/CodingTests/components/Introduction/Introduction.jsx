import React from 'react';
import { Info } from '../../../../assets/SVG/profile';

function Introduction() {
  return (
    <section>
      <h1 className='text-3xl text-black font-semibold my-6'>Completa los tests técnicos</h1>
      <p className='text-black text-xl w-4/5 mb-6 font-extralight'>De esta forma podemos conocer qué trabajos encajan mejor contigo. Haz los
      tests de las habilidades que te gustaría continuar usando para tu próximo
      trabajo.</p>
      <p className='text-black text-sm flex mb-6'> <img src={Info} alt="info" className='mr-2 w-5'/> Tip: Si temes fallar un test, no te preocupes. Puedes volver a realizarlo luego de 3 meses.</p>
    </section>
  );
}

export default Introduction;
