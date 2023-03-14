import React from 'react';
import '../../../../styles/UserForms.css';
import { useFetch } from '../../../../CustomHooks/useAxiosFetch';
import { Field } from 'formik';
import SelectField from '../Select-field/SelectField';
import { educationNow, englishLevelOptions } from '../docs/data';

const EducationalBackgroundForm = ({ errors, touched, values }) => {
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
  //TODO faltan hacer touched
  return (
    <div className='bg-[#FFFFFF] rounded-2xl  md:mx-20 mt-5 pt-10'>
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
            name='educationalProfile.educationalLevel'
            required
            className={`form-control position-absolute w-80 md:w-5/6 h-10 px-4 pt-2 rounded-md border-2 border-custom-color mt-5 ${
              touched.educationalProfile?.educationalLevel &&
              errors.educationalProfile?.educationalLevel &&
              errors.educationalProfile?.educationalLevel
                ? 'is-invalid'
                : ''
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
            {touched.educationalProfile?.educationalLevel &&
              errors.educationalProfile?.educationalLevel &&
              errors.educationalProfile?.educationalLevel}
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

          {values.educationalProfile.studies.map((data, index) => (
            <div key={index}>
              <div className='form-group md:col-span-2 required mt-10 position-relative'>
                <label className='control-label position-absolute mb-5 font-[700] text-custom-color'>
                  Nombre de la carrera, curso, bootcamp o certificación{' '}
                  {index + 1}:
                </label>
                <div>
                  <Field
                    name={`educationalProfile.studies.${index}.name`}
                    type='text'
                    required
                    className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${
                      touched.educationalProfile?.studies?.[index]
                        ?.institution &&
                      errors.educationalProfile?.studies?.[index]
                        ?.institution &&
                      errors.educationalProfile?.studies?.[index]?.institution
                        ?.name
                        ? 'is-invalid'
                        : ''
                    }`}
                  />
                  <div className='invalid-feedback position-absolute'>
                    {touched.educationalProfile?.studies?.[index]
                      ?.institution &&
                      errors.educationalProfile?.studies?.[index]
                        ?.institution &&
                      errors.educationalProfile?.studies?.[index]?.institution
                        ?.name}
                  </div>
                </div>
              </div>
              <div className='form-group md:w-screen required position-relative'>
                <label className='control-label position-absolute mb-10 mt-5 text-custom-color'>
                  Nombre institución {index + 1}:
                </label>
                <div>
                  <Field
                    required
                    component={SelectField}
                    name={`educationalProfile.studies.${index}.institution.name`}
                    options={institutions}
                    errors={
                      errors.educationalProfile?.studies?.[index]?.institution
                        ?.name
                    }
                  />
                </div>
              </div>
              <div className='form-group md:w-screen required position-relative'>
                <label className='control-label position-absolute mb-10 mt-5 text-custom-color'>
                  Tipo institución {index + 1}:
                </label>
                <div>
                  <Field
                    required
                    component={SelectField}
                    name={`educationalProfile.studies.${index}.institution.institutionTypeId`}
                    options={institutionsType}
                    errors={
                      errors.educationalProfile?.studies?.[index]?.institution
                        ?.name
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* div situacion educacional */}
        <div className='form-group required mt-5 position-relative'>
          <label className='control-label position-absolute mb-5 text-custom-color'>
            ¿Cuál es tu situación educacional actual (Bootcamp, diplomados,
            universidad, cursos u otros)?
          </label>
          <Field
            component={SelectField}
            name='educationalProfile.currentlyEducationalSituation'
            required
            errors={errors.educationalProfile?.currentlyEducationalSituation}
            options={educationNow}
          />
        </div>
        {/* div nivel de ingles */}
        <div className='form-group required mt-5 position-relative'>
          <label className='control-label position-absolute mb-5 text-custom-color'>
            ¿Cuál es tu nivel de inglés? <br />
          </label>
          <Field
            name='educationalProfile.englishLevel'
            required
            component={SelectField}
            options={englishLevelOptions}
            errors={errors.educationalProfile?.englishLevel}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationalBackgroundForm;
