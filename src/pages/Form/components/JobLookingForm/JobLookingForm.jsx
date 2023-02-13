import React from 'react';
import '../../../../styles/UserForms.css';
import {
  availabilityOptions,
  wantedOptions,
  visaOptions,
} from '../docs/data.js';
import SelectFieldMulti from '../Select-field/SelectFieldMulti';
import { Field } from 'formik';
import SelectField from '../Select-field/SelectField';

const WorkExperienceForm = ({ errors, touched }) => {
  return (
    <>
      <div className='bg-[#FFFFFF] rounded-2xl w-screen md:mx-20 mt-5 pt-10'>
        <h1 className='mx-8 md:mx-20 mt-10 mb-10 text-center md:text-left font-[600] text-[32px] text-[#140B34]'>
          ¿QUÉ TIPO DE TRABAJO ESTÁS BUSCANDO?
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-8 md:mx-20'>
          {/* div otra */}
          <div className='form-group md:col-span-3 required position-relative mt-5'>
            <label className='control-label md:grid-cols-3 position-absolute mb-10 text-left w-80 md:w-5/6 font-[400] text-[18px] leading-9 text-custom-color mt-5'>
              Déjanos una breve descripción con respecto a tu trabajo ideal
            </label>
            <Field
              as='textarea'
              name='workProfile.dreamJobDescription'
              rows='5'
              required
              className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 h-40 ${
                errors.dreamJobDescription ? 'is-invalid' : ''
              }`}
            />
            <div className='invalid-feedback position-absolute'>
              {errors.dreamJobDescription?.message}
            </div>
          </div>

          {/* divsponibilidad */}
          <div className='form-group required position-relative'>
            <label className='control-label position-absolute w-5/6 md:w-4/6 mb-10 mt-5 text-custom-color font-[500] text-[20px]'>
              Indícanos tu disponibilidad laboral:
            </label>
            <div>
              <Field
                component={SelectFieldMulti}
                name='workProfile.availability'
                options={availabilityOptions}
                errors={errors.availability}
              />
            </div>
            <div className='invalid-feedback position-absolute'>
              {errors.disponibilidad?.message}
            </div>
          </div>
          {/* div trabajo buscado */}
          <div className='form-group required position-relative'>
            <label className='control-label position-absolute w-5/6 md:w-4/6 mb-10 mt-5 text-custom-color font-[500] text-[20px]'>
              ¿Qué describe mejor tu situación actual?
            </label>
            <div>
              <Field
                component={SelectField}
                name='workProfile.locationAvailable'
                options={wantedOptions}
                errors={errors.wanted}
              />
            </div>
            <div className='invalid-feedback position-absolute'>
              {errors.wanted?.message}
            </div>
          </div>
          {/* divisa */}
          <div className='form-group required position-relative'>
            <label className='control-label position-absolute w-5/6 md:w-4/6 mb-10 mt-5 text-custom-color font-[500] text-[20px]'>
              ¿Cuentas con Visa de trabajo activa en?
            </label>
            <div>
              <Field
                component={SelectFieldMulti}
                name='workProfile.workVisa'
                options={visaOptions}
                errors={errors.workVisa}
              />
            </div>
            <div className='invalid-feedback position-absolute'>
              {errors.workVisa?.message}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperienceForm;
