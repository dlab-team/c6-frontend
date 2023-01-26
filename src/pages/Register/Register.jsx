import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { ModalCustomMessage, ModalLoginRegister } from '../../components/index';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [messageStatus, setMessageStatus] = useState('');

  const { errors, touched, getFieldProps, values, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      surnames: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: async (values) => {
      // setIsLoading(true);
      console.log(values);
      const { email, name, password } = values;
      const response = await fetch(`http://localhost:3000/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, password }),
      });
      const data = await response.json();
      console.log(data);
      setShowModalMessage(true);
      setStatusCode(data.statusCode);
      setMessageStatus(data.message);
      setTimeout(() => {
        setShowModalMessage(false);
      }, 4000);
      return data;
    },
    validationSchema: Yup.object({
      name: Yup
        .string()
        .required('Requerido'),
      surnames: Yup
        .string()
        .required('Requerido'),
      email: Yup
        .string()
        .email('Debe de ser un email')
        .required('Requerido'),
      password: Yup
        .string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Debe incluir números, mayúsculas, minúsculas y caracteres especiales')
        .required('Campo obligatorio'),
      repeatPassword: Yup
        .string()
        .when('password', {
          is: (value) => (value && value.length > 0 ? true : false),
          then: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
        })
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Debe incluir números, mayúsculas, minúsculas y caracteres especiales')
        .required('Campo obligatorio')
    }),
  });

  return (
    <>
      {showModalMessage && (
        <ModalCustomMessage
          message={messageStatus}
          type={statusCode >= 200 ? 'success' : 'error'}
        />
      )}
      <Header />
      <ModalLoginRegister>
        <h1 className='text-5xl text-center mb-11'>Regístrate</h1>
        <form className='flex flex-col gap-y-6' onSubmit={handleSubmit}>
          <div className='flex gap-5 '>
            <div className='flex items-center gap-3'>
              <label>Nombre: </label>
              <div className='flex flex-col'>
                <input
                  type='text'
                  className='px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
                  {...getFieldProps('name')}
                />
                {errors.name && touched.name && (
                  <span className='text-danger text-red-500'>
                    {errors.name}{' '}
                  </span>
                )}
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <label>Apellido: </label>
              <div className='flex flex-col'>
                <input
                  type='text'
                  className='px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
                  {...getFieldProps('surnames')}
                />
                {errors.surnames && touched.surnames && (
                  <span className='text-danger text-red-500'>
                    {errors.surnames}{' '}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className='flex items-center '>
            <span className='block grow'>Ingresa tu correo:</span>
            <div className='flex flex-col w-full'>
              <input
                type='email'
                className='w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
                {...getFieldProps('email')}
              />
              {errors.email && touched.email && (
                <span className='text-danger text-red-500'>
                  {errors.email}{' '}
                </span>
              )}
            </div>
          </div>
          <div className='flex items-center '>
            <span className='block grow'>Crea tu contraseña:</span>
            <div className='flex flex-col w-full'>
              <input
                type='password'
                className='w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
                {...getFieldProps('password')}
              />
              {errors.password && touched.password && (
                <span className='text-danger text-red-500'>
                  {errors.password}{' '}
                </span>
              )}
            </div>
          </div>{' '}
          <div className='flex items-center '>
            <span className='block grow'>Crea tu contraseña:</span>
            <div className='flex flex-col w-full'>
              <input
                type='password'
                className='w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
                {...getFieldProps('repeatPassword')}
              />
              {errors.repeatPassword && touched.repeatPassword && (
                <span className='text-danger text-red-500'>
                  {errors.repeatPassword}{' '}
                </span>
              )}
            </div>
          </div>
          <div className='flex'>
            <button
              type='submit'
              className='py-2 px-3 rounded-md bg-blue-600 text-white'
            >
              registrarse
            </button>
          </div>
        </form>
      </ModalLoginRegister>
    </>
  );
};

export default Register;