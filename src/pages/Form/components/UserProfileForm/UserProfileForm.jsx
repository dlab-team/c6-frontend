import React, { useState, useContext } from 'react';
import '../../../../styles/UserForms.css';
import { useFetch } from '../../../../CustomHooks/useAxiosFetch';
import { AuthContext } from '../../../../Context/AuthContext';
import { Field } from 'formik';
import SelectField from '../Select-field/SelectField';
import SelectFieldMulti from '../Select-field/SelectFieldMulti';
import { gender } from '../docs/data';

const UserProfileForm = ({ errors, touched }) => {
  const { token } = useContext(AuthContext);
  const currentUser = {
    email: 'user@mail.com',
  };

  const [cities, setCities] = useState([]);

  const { data: countriesData, isLoading: countriesLoading } = useFetch(
    process.env.REACT_APP_BACKEND_URL + '/countries'
  );
  const countries =
    countriesData &&
    countriesData.map((country) => ({
      value: country.id,
      label: country.name,
    }));

  const { data: citiesData, isLoading: citiesLoading } = useFetch(
    process.env.REACT_APP_BACKEND_URL + '/cities'
  );

  const handleCities = (countryId) => {
    const cities = citiesData.filter((city) => city.countryId === countryId);
    const mappingCities = cities.map((city) => ({
      value: city.id,
      label: city.name,
    }));
    setCities(mappingCities);
  };

  const { data: jobsData, isLoading: jobsLoading } = useFetch(
    process.env.REACT_APP_BACKEND_URL + '/charges'
  );
  const job =
    jobsData &&
    jobsData.map((jobs) => ({
      value: jobs.id,
      label: jobs.name,
    }));

  const gendermap = gender.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <>
      <div className='bg-[#FFFFFF] rounded-2xl w-screen md:mx-20 mt-10 pt-10'>
        <h1 className='mx-8 md:mx-20 mt-10 mb-10 text-center md:text-left font-[600] text-[32px] text-[#140B34]'>
          INFORMACIÓN PERSONAL
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-20'>
          {/* div nombre */}
          <div className='form-group md:col-span-2 required position-relative'>
            <label className='control-label md:grid-cols-2 position-absolute mb-5 text-custom-color'>
              Nombre
            </label>
            <Field
              name='profile.fullName'
              type='text'
              required
              className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${
                errors.profile?.fullName ? 'is-invalid' : ''
              }`}
            />
            <div className='invalid-feedback position-absolute'>
              {errors.profile?.fullName}
            </div>
          </div>
          {/* div email */}
          <div className='form-group required position-relative'>
            <label className='control-label position-absolute mb-5 text-custom-color'>
              Email
            </label>
            {token ? (
              <Field
                type='profile.email'
                className='form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2'
                disabled={true}
                value={currentUser.email}
                name='profile.email'
              />
            ) : (
              <Field
                name='profile.email'
                type='email'
                className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${
                  errors.profile?.email ? 'is-invalid' : ''
                }`}
              />
            )}
            <div className='invalid-feedback'>{errors.profile?.email}</div>
          </div>
          {/* div telefono */}
          <div className='form-group required position-relative'>
            <label className='control-label position-absolute mb-5 text-custom-color'>
              Número de teléfono móvil
            </label>
            <Field
              name='profile.phone'
              type='phone'
              required
              className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${
                errors.profile?.phone ? 'is-invalid' : ''
              }`}
            />
            <div className='invalid-feedback position-absolute'>
              {errors.profile?.phone}
            </div>
          </div>
          {/* div pais */}
          <div className='form-group required position-relative'>
            <label className='control-label position-absolute mb-5 text-custom-color'>
              País
            </label>
            <Field
              name={'profile.country'}
              component={SelectField}
              required
              options={countries}
              handleCities={handleCities}
              errors={errors.profile?.country}
            />
            <div className='invalid-feedback position-absolute'></div>
          </div>
          {/* div ciudad */}
          <div className='form-group required position-relative'>
            <label className='control-label position-absolute mb-5 text-custom-color'>
              Ciudad
            </label>
            <Field
              component={SelectField}
              required
              name='profile.cityId'
              options={cities}
              errors={errors.profile?.city}
            />
            <div className='invalid-feedback position-absolute'>
              {errors.profile?.city}
            </div>
          </div>
          {/* div genero */}
          <div className='form-group required position-relative mt-5'>
            <label className='control-label position-absolute mb-5 text-custom-color'>
              ¿Con qué género te identificas
            </label>
            <Field
              component={SelectField}
              name='profile.gender'
              options={gender}
              errors={errors.gender}
              required
            ></Field>
          </div>
          {/* div situacion laboral */}
          <div className='form-group required position-relative mt-5'>
            <label className='control-label position-absolute mb-5 text-custom-color'>
              ¿Cuál es tu estado laboral actual?
            </label>
            <div className={`${errors.profile?.employmentSituation ? 'is-invalid' : ''}`}>
              <div className='flex items-center mb-4 mt-4'>
                <Field
                  id='default-radio-1'
                  type='radio'
                  value='first-unemployed'
                  name='workProfile.employmentSituation'
                  className='w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800'
                />
                <label
                  htmlFor='default-radio-1'
                  className='ml-2 text-sm select-custom-color font-[300] text-[14px]'
                >
                  Cesante, busco empleo en TI por primera vez.
                </label>
              </div>
              <div className='flex items-center mb-4 mt-4'>
                <Field
                  id='default-radio-1'
                  type='radio'
                  value='before-unemployed'
                  name='workProfile.employmentSituation'
                  className='w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800'
                />
                <label
                  htmlFor='default-radio-1'
                  className='ml-2 text-sm select-custom-color font-[300] text-[14px]'
                >
                  Cesante, ya he trabajado antes en TI.
                </label>
              </div>
              <div className='flex items-center mb-4 mt-4'>
                <Field
                  id='default-radio-1'
                  type='radio'
                  value='looking-employed'
                  name='workProfile.employmentSituation'
                  className='w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800'
                />
                <label
                  htmlFor='default-radio-1'
                  className='ml-2 text-sm select-custom-color font-[300] text-[14px]'
                >
                  Tengo trabajo en TI, pero busco otro.
                </label>
              </div>
              <div className='flex items-center mb-4 mt-4'>
                <Field
                  id='default-radio-1'
                  type='radio'
                  value='looking-it-employed'
                  name='workProfile.employmentSituation'
                  className='w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800'
                />
                <label
                  htmlFor='default-radio-1'
                  className='ml-2 text-sm select-custom-color font-[300] text-[14px]'
                >
                  Tengo trabajo (en otras áreas), pero busco en TI.
                </label>
              </div>
            </div>
            <div className='invalid-feedback position-absolute'>
              {errors.profile?.employmentSituation}
            </div>
          </div>
          {/* div cargos */}
          <div className='form-group required position-relative'>
            <label className='control-label position-absolute mb-10 mt-5 text-custom-color'>
              ¿Cuál o cuáles cargos te gustaría optar?
            </label>
            <p className='text-left md:mr-16 font-[300] text-[14px] text-custom-color mt-3'>
              <strong>Ten en cuenta:</strong> De acuerdo al cargo que postules,
              te pediremos que seas capaz de demostrarlo de manera práctica
              durante el proceso de selección.
            </p>
            <div>
              <Field
                component={SelectFieldMulti}
                name='workProfile.charges'
                options={job}
                errors={errors.profile?.charges}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileForm;
