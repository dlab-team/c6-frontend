import React from 'react';
import '../../../../styles/UserForms.css';
import { useFetch } from '../../../../CustomHooks/useAxiosFetch';
import { Field } from 'formik';
import SelectFieldMulti from '../Select-field/SelectFieldMulti';
import { experienceOptions } from '../docs/data';

const WorkProfileForm = ({ errors, touched }) => {
  const { data: skillsData, isLoading: skillsLoading } = useFetch(
    process.env.REACT_APP_BACKEND_URL + '/skills/4'
  );

  const experience = experienceOptions.map((exp) => (
    <div key={exp.years} className='flex items-center mb-4 mt-4'>
      <Field
        required
        id='default-radio-1'
        type='radio'
        value={exp.years}
        name='workProfile.yearsOfExperiencie'
        className='w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800'
      />
      <label
        htmlFor='default-radio-1'
        className='ml-2 text-sm select-custom-color font-[300] text-[14px]'
      >
        {exp.title}
      </label>
    </div>
  ));

  return (
    <>
      <div className='bg-[#FFFFFF] rounded-2xl  md:mx-20 mt-5 pt-10'>
        <h1 className='mx-8 md:mx-20 mt-10 mb-10 text-center md:text-left font-[600] text-[32px] text-[#140B34]'>
          EXPERIENCIA Y TRABAJO
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-20'>
          {/* div url cv */}
          <div className='form-group position-relative'>
            <label className='control-label grid-cols-1 position-absolute mb-5 text-custom-color'>
              URL CV
            </label>
            <p className='mb-5 text-left w-80 md:w-5/6 font-[400] text-[14px] leading-7 text-custom-color mt-5'>
              Subir como documento público en Google Drive o similar
            </p>
            <Field
              name='workProfile.cvUrl'
              type='text'
              required
              className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${
                touched.workProfile?.cvUrl &&
                errors.workProfile?.cvUrl &&
                errors.workProfile?.cvUrl
                  ? 'is-invalid'
                  : ''
              }`}
            />
            <div className='invalid-feedback position-absolute'>
              {touched.workProfile?.cvUrl &&
                errors.workProfile?.cvUrl &&
                errors.workProfile?.cvUrl}
            </div>
          </div>
          {/* div url linkedin */}
          <div className='form-group position-relative'>
            <label className='control-label grid-cols-1 position-absolute mb-5 text-custom-color'>
              URL de LinkedIn
            </label>
            <p className='mb-5 text-left w-80 md:w-5/6 font-[400] text-[14px] leading-7 text-custom-color mt-5'>
              <br />{' '}
            </p>
            <Field
              name='workProfile.linkedinUrl'
              type='text'
              required
              className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${
                touched.workProfile?.linkedinUrl &&
                errors.workProfile?.linkedinUrl &&
                errors.workProfile?.linkedinUrl
                  ? 'is-invalid'
                  : ''
              }`}
            />
            <div className='invalid-feedback position-absolute'>
              {touched.workProfile?.linkedinUrl &&
                errors.workProfile?.linkedinUrl &&
                errors.workProfile?.linkedinUrl}
            </div>
          </div>
          {/* div url github */}
          <div className='form-group position-relative'>
            <label className='control-label grid-cols-1 position-absolute mb-5 text-custom-color'>
              URL de GitHub
            </label>
            <p className='mb-5 text-left w-80 md:w-5/6 font-[400] text-[14px] leading-7 text-custom-color mt-5'>
              <br />{' '}
            </p>
            <Field
              name='workProfile.githubUrl'
              type='text'
              required
              className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${
                touched.workProfile?.githubUrl &&
                errors.workProfile?.githubUrl &&
                errors.workProfile?.githubUrl
                  ? 'is-invalid'
                  : ''
              }`}
            />
            <div className='invalid-feedback position-absolute'>
              {touched.workProfile?.githubUrl &&
                errors.workProfile?.githubUrl &&
                errors.workProfile?.githubUrl}
            </div>
          </div>
          {/* div url portfolio */}
          <div className='form-group position-relative'>
            <label className='control-label grid-cols-1 position-absolute mb-5 text-custom-color'>
              URL de Portafolio/Sitio web
            </label>
            <p className='mb-5 text-left w-80 md:w-5/6 font-[400] text-[14px] leading-7 text-custom-color mt-5'>
              <br />{' '}
            </p>
            <Field
              name='workProfile.websiteUrl'
              type='text'
              required
              className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${
                touched.workProfile?.websiteUrl &&
                errors.workProfile?.websiteUrl &&
                errors.workProfile?.websiteUrl
                  ? 'is-invalid'
                  : ''
              }`}
            />
            <div className='invalid-feedback position-absolute'>
              {touched.workProfile?.githubUrl &&
                errors.workProfile?.githubUrl &&
                errors.workProfile?.githubUrl}
            </div>
          </div>

          {/* div proyecto */}
          <div className='form-group md:col-span-2 required position-relative mt-10'>
            <label className='control-label md:grid-cols-3 position-absolute mb-10 text-left w-80 md:w-5/6 font-[400] text-[18px] leading-9 text-custom-color mt-5'>
              Explícanos en detalle algún proyecto que te enorgullece
            </label>
            <p className='mb-5 text-left w-80 md:w-5/6 font-[400] text-[14px] leading-7 text-custom-color mt-5'>
              Describe de que trató, tu rol en el proyecto y por qué lo elegiste
              (por ejemplo: arquitectura de desarrollo, equipo y tu rol en el
              proyecto, tecnologías utilizadas, dificultades y soluciones,
              funcionalidades, objetivos, etc. Recuerda NO esperamos link, sino
              explicación)
            </p>
            <Field
              as='textarea'
              name='workProfile.projectDescription'
              rows='5'
              className={`form-control w-80 md:w-5/6 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 h-40 ${
                touched.workProfile?.projectDescription &&
                errors.workProfile?.projectDescription &&
                errors.workProfile?.projectDescription
                  ? 'is-invalid'
                  : ''
              }`}
            />
            <div className='invalid-feedback position-absolute'>
              {touched.workProfile?.projectDescription &&
                errors.workProfile?.projectDescription &&
                errors.workProfile?.projectDescription}
            </div>
          </div>

          {/* div habilidades */}
          <div className='form-group required position-relative'>
            <label className='control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]'>
              Selecciona 3 habilidades blandas que te representen:
            </label>
            <div>
              <Field
                required
                component={SelectFieldMulti}
                name='workProfile.softSkills'
                options={skillsData}
                errors={errors.softSkills}
              />
            </div>
            <div className='invalid-feedback position-absolute'>
              {errors.skillsData?.message}
            </div>
          </div>
          {/* div experiencia laboral */}
          <div className='form-group position-relative'>
            <label className='control-label position-absolute w-5/6 md:w-4/6 mb-5 text-custom-color'>
              ¿Cuántos años de experiencia laboral posees en desarrollo de
              software y/o diseño?
            </label>
            <div
              className={`${
                errors.workProfile?.yearsOfExperiencie ? 'is-invalid' : ''
              }`}
            >
              {experience}
            </div>
            <div className='invalid-feedback position-absolute'>
              {errors.workProfile?.yearsOfExperiencie}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkProfileForm;
