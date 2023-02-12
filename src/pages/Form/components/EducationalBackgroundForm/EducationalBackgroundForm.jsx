import React from 'react';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import '../../../../styles/UserForms.css';
import { useFetch } from '../../../../CustomHooks/useAxiosFetch';
import { Field } from 'formik';
import SelectField from '../Select-field/SelectField';
import { educationNow, englishLevel, englishLevelOptions } from '../docs/data';

const EducationalBackgroundForm = ({ errors, touched }) => {
  const { data: institutionData, isLoading: institutionLoading } = useFetch(
    process.env.REACT_APP_BACKEND_URL + '/institutions'
  );
  const institutions =
    institutionData &&
    institutionData.map((institution) => ({
      value: institution.name,
      label: institution.name,
    }));
  const { data: institutionTypeData, isLoading: institutionTypeLoading } =
    useFetch(process.env.REACT_APP_BACKEND_URL + '/institutionstype');
  const institutionsType =
    institutionTypeData &&
    institutionTypeData.map((institutionstype) => ({
      value: institutionstype.id,
      label: institutionstype.name,
    }));

  return (
    <>
      <div className='bg-[#FFFFFF] rounded-2xl w-screen md:mx-20 mt-5 pt-10'>
        <h1 className='mx-8 md:mx-20 mt-10 mb-10 text-center md:text-left font-[600] text-[32px] text-[#140B34]'>
          INFORMACIÓN EDUCACIONAL
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-20'>
          {/* div nivel */}
          <div className='form-group md:col-span-2 required position-relative'>
            <label className='control-label position-absolute mb-5 text-custom-color'>
              ¿Cuál es tu máximo nivel educacional?
            </label>
            <Field
              as='select'
              name='educationalLevel'
              required
              className={`form-control position-absolute w-80 md:w-5/6 h-10 px-4 pt-2 rounded-md border-2 border-custom-color mt-5 ${
                errors.educationalLevel ? 'is-invalid' : ''
              }`}
            >
              <option defaultValue value='basica'>
                Educación Básica
              </option>
              <option value='media'>Educación Media</option>
              <option value='tecnico-incompleta'>
                Educación Técnico Profesional incompleta
              </option>
              <option value='tecnico'>
                Educación Técnico Profesional completada
              </option>
              <option value='universitaria-incompleta'>
                Educación Universitaria incompleta
              </option>
              <option value='universitaria'>
                Educación universitaria completa
              </option>
              <option value='bootcamp'>Bootcamp o diplomado</option>
            </Field>
            <div className='invalid-feedback position-absolute'>
              {errors.educationalLevel?.message}
            </div>
          </div>
          {/* div antecedentes educacionales */}
          <div className='form-group md:col-span-2 required position-relative'>
            <p className='text-center w-80 md:w-5/6 md:text-left md:mr-16 font-[700] text-[18px] leading-9 text-custom-color mt-3'>
              A continuación, indícanos 2 (dos) carreras profesionales, cursos,
              bootcamp o certificaciones cursadas relacionadas al desarrollo de
              software, diseño o TI (puedes indicarnos las más importantes o
              actuales):
            </p>
            {/* div antecedente 1 */}
            <div className='form-group md:col-span-2 required mt-10 position-relative'>
              <label className='control-label position-absolute mb-5 font-[700] text-custom-color'>
                Nombre de la carrera, curso, bootcamp o certificación 1:
              </label>
              <Field
                name='name1'
                type='text'
                required
                className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${
                  errors.career1 ? 'is-invalid' : ''
                }`}
              />
              <div className='invalid-feedback position-absolute'>
                {errors.name1?.message}
              </div>
            </div>
            {/* div institucion 1 */}
            <div className='form-group required position-relative'>
              <label className='control-label position-absolute mb-10 mt-5 text-custom-color'>
                Nombre institución 1:
              </label>
              <div>
                <Field
                  component={SelectField}
                  name='institution1'
                  options={institutions}
                  errors={errors.institution1}
                />
              </div>
              <div className='invalid-feedback position-absolute'>
                {errors.institution1?.message}
              </div>
            </div>
            {/* div tipo institución 1 */}
            <div className='form-group required position-relative'>
              <label className='control-label position-absolute mb-10 mt-5 text-custom-color'>
                Tipo institución 1:
              </label>
              <div>
                <Field
                  component={SelectField}
                  name='institutionTypeId1'
                  options={institutionsType}
                  errors={errors.institutionTypeId1}
                />
              </div>
              <div className='invalid-feedback position-absolute'>
                {errors.institutionTypeId1?.message}
              </div>
            </div>
            {/* div antecedente 2 */}
            <div className='form-group md:col-span-2 required mt-10 position-relative'>
              <label className='control-label position-absolute mb-5 font-[700] text-custom-color'>
                Nombre de la carrera, curso, bootcamp o certificación 2:
              </label>
              <Field
                name='name2'
                type='text'
                required
                className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${
                  errors.name2 ? 'is-invalid' : ''
                }`}
              />
              <div className='invalid-feedback position-absolute'>
                {errors.name2?.message}
              </div>
            </div>
            {/* div institucion 1 */}
            <div className='form-group required position-relative'>
              <label className='control-label position-absolute mb-10 mt-5 text-custom-color'>
                Nombre institución 2:
              </label>
              <div>
                <Field
                  component={SelectField}
                  name='institution2'
                  options={institutions}
                />
              </div>
              <div className='invalid-feedback position-absolute'>
                {errors.institution2?.message}
              </div>
            </div>
            {/* div tipo institución 1 */}
            <div className='form-group required position-relative'>
              <label className='control-label position-absolute mb-10 mt-5 text-custom-color'>
                Tipo institución 2:
              </label>
              <div>
                <Field
                  component={SelectField}
                  name='institutionTypeId2'
                  options={institutionsType}
                  errors={errors.institutionTypeId2}
                />
              </div>
              <div className='invalid-feedback position-absolute'>
                {errors.institutionTypeId2?.message}
              </div>
            </div>
          </div>

          {/* div situacion educacional */}
          <div className='form-group required mt-5 position-relative'>
            <label className='control-label position-absolute mb-5 text-custom-color'>
              ¿Cuál es tu situación educacional actual (Bootcamp, diplomados,
              universidad, cursos u otros)?
            </label>
            <Field
              component={SelectField}
              name='studies'
              required
              errors={errors.studies}
              options={educationNow}
            />

            <div className='invalid-feedback position-absolute'>
              {errors.studies?.message}
            </div>
          </div>
          {/* div nivel de ingles */}
          <div className='form-group required mt-5 position-relative'>
            <label className='control-label position-absolute mb-5 text-custom-color'>
              ¿Cuál es tu nivel de inglés? <br />
            </label>
            <Field
              name='englishLevel'
              required
              component={SelectField}
              options={englishLevelOptions}
              errors={errors.englishLevel}
            />

            <div className='invalid-feedback position-absolute'>
              {errors.englishLevel?.message}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationalBackgroundForm;
