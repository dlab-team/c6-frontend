import React, { useState } from 'react';
import { ModalCustomMessage, ModalLoginRegister } from '../../components/index';
import { Formik, Form, Field } from 'formik';
import { ImWarning } from 'react-icons/im'
import * as Yup from 'yup';
import axios, { Axios } from 'axios';


const RegisterForm = () => {

  const [showModalMessage, setShowModalMessage] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [messageStatus, setMessageStatus] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const initialCredentials = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  }

  const credentialsSchema = Yup.object().shape(
    {
      name: Yup.string().required('Campo obligatorio'),
      email: Yup.string().email('Formato de correo inválido').required('Campo obligatorio'),
      password: Yup.string()
        .min(8, 'Debe tener al menos 8 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Req: 1 mayúsc., 1 minúsc y un caracter especial')
        .required('Campo obligatorio'),
      repeatPassword: Yup.string()
        .when('password', {
          is: (value) => (value && value.length > 0 ? true : false),
          then: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
        })
        .min(8, 'Debe tener al menos 8 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Req: 1 mayúsc., 1 minúsc y un caracter especial')
        .required('Campo obligatorio'),
    })

  return (
    <>
      {showModalMessage && (
        <ModalCustomMessage
          message={messageStatus}
          type={statusCode < 400 ? 'success' : 'error'}
        />
      )}

      <ModalLoginRegister>
        <Formik
          initialValues={initialCredentials}
          validationSchema={credentialsSchema}
          onSubmit={async (values) => {
            const url = process.env.REACT_APP_BACKEND_URL + '/auth/register'
            await axios
              .post(url, { email: values.email, name: values.name, password: values.password })
              .then(res => {
                console.log(res)
                setShowModalMessage(true);
                setStatusCode(res.data.statusCode);
                setMessageStatus(res.data.message);
                setTimeout(() => {
                  setShowModalMessage(false);
                }, 4000);
              })
              .catch(err => {
                setShowModalMessage(true);
                setStatusCode(err.response.data.statusCode);
                setMessageStatus(err.response.data.message);
                setTimeout(() => {
                  setShowModalMessage(false);
                }, 4000);
              })
          }}
        >

          {({ touched, errors }) => (

            <Form className='flex flex-col gap-y-5'>

              <div className='flex items-center w-full'>
                  <div className='flex flex-col w-full'>
                      <Field id='name'
                      name='name'
                      type='text'
                      placeholder='Ingresa tu nombre'
                      className='w-96 h-8 px-4 rounded-md border border-gray-300 mb-1'/>
                      <div className='static h-2'>
                      {errors.name && touched.name && (
                        <span className='static flex items-center gap-1 text-error italic -mb-3'>
                            <ImWarning />{errors.name}
                        </span>
                        )}
                      </div>
                  </div>
              </div>

              <div className='flex items-center w-full'>
                <div className='flex flex-col w-full'>
                  <Field id='email'
                    name='email'
                    placeholder='Ingresa tu correo'
                    type='email'
                    className='w-96 h-8 px-4 rounded-md border border-gray-300 mb-1'/>
                  <div className='static h-2'>
                    {errors.email && touched.email && (
                      <span className='static flex items-center gap-1 text-error italic -mb-3'>
                        <ImWarning />{errors.email}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className='flex items-center '>
                <div className='flex flex-col w-full'>
                  <Field id='password'
                    name='password'
                    placeholder='Crea tu contraseña'
                    type={showPassword ? 'text' : 'password'}
                    className='w-96 h-8 px-4 rounded-md border border-gray-300 mb-1'/>
                  <div className='static h-5'>
                  {errors.password && touched.password && (
                    <span className='flex items-center gap-1 text-error italic'>
                      <ImWarning />{errors.password}
                    </span>
                  )}
                  </div>
                </div>
              </div>{' '}
              <div class='flex items-center -mt-4 -mb-2'>
                <input
                  onClick={handleShowPassword}
                  id='default-checkbox'
                  type='checkbox'
                  value=''
                  class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  for='default-checkbox'
                  class='ml-2 text-sm font-medium text-gray-900 dark:text-gray-900'
                >
                  Mostrar contraseña
                </label>
              </div>

              <div className='flex items-center '>
                <div className='flex flex-col w-full'>
                  <Field id='repeatPassword'
                    name='repeatPassword'
                    type={showPassword1 ? 'text' : 'password'}
                    placeholder='Repite tu contraseña'
                    className='w-96 h-8 px-4 rounded-md border border-gray-300 mb-1'/>
                  <div className='static h-5'>
                    {errors.repeatPassword && touched.repeatPassword && (
                      <span className='flex items-center gap-1 text-error italic'>
                        <ImWarning />{errors.repeatPassword}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div class='flex items-center -mt-4 -mb-1'>
                <input
                  onClick={handleShowPassword1}
                  id='default-checkbox'
                  type='checkbox'
                  value=''
                  class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  for='default-checkbox'
                  class='ml-2 text-sm font-medium text-gray-900 dark:text-gray-900'
                >
                  Mostrar contraseña
                </label>
              </div>

              <div className='flex'>
                <button
                  type='submit'
                  className='py-2 px-3 rounded-md bg-blue-600 text-white'
                >
                  Registrarse
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </ModalLoginRegister>
    </>
  );
};

export default RegisterForm;