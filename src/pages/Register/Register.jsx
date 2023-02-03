import React, { useState } from 'react';
import { ModalCustomMessage, ModalLoginRegister } from '../../components/index';
import { Formik, Form, Field } from 'formik';
import { ImWarning } from 'react-icons/im'
import * as Yup from 'yup';
import axios, { Axios } from 'axios';


const Register = () => {

  const [showModalMessage, setShowModalMessage] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [messageStatus, setMessageStatus] = useState('');

  const initialCredentials = {
    name: '',
    surnames: '',
    email: '',
    password: '',
    repeatPassword: ''
  }

  const credentialsSchema = Yup.object().shape(
    {
      name: Yup.string().required('Campo obligatorio'),
      surnames: Yup.string().required('Campo obligatorio'),
      email: Yup.string().email('Formato de correo inválido').required('Campo obligatorio'),
      password: Yup.string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Debe incluir números, mayúsculas, minúsculas y caracteres especiales')
        .required('Campo obligatorio'),
      repeatPassword: Yup.string()
        .when('password', {
          is: (value) => (value && value.length > 0 ? true : false),
          then: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
        })
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Debe incluir números, mayúsculas, minúsculas y caracteres especiales')
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
        <h1 className='text-5xl text-center mb-11'>Regístrate</h1>

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

            <Form className='flex flex-col gap-y-6'>

              <div className='flex gap-5'>
                <div className='flex items-center gap-3'>
                  <label>Nombre: </label>
                  <div className='flex flex-col'>
                    <Field id='name'
                      name='name'
                      type='text'
                      className='px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
                    />
                    {errors.name && touched.name && (
                      <p className='flex items-center gap-1 text-error italic'>
                        <ImWarning />{errors.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <label>Apellido: </label>
                  <div className='flex flex-col'>
                    <Field id='surnames'
                      name='surnames'
                      type='text'
                      className='px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
                    />
                    {errors.surnames && touched.surnames && (
                      <p className='flex items-center gap-1 text-error italic'>
                        <ImWarning />{errors.surnames}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className='flex items-center '>
                <label className='block grow'>Ingresa tu correo:</label>
                <div className='flex flex-col w-full'>
                  <Field id='email'
                    name='email'
                    type='email'
                    className='w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
                  />
                  {errors.email && touched.email && (
                    <p className='flex items-center gap-1 text-error italic'>
                      <ImWarning />{errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className='flex items-center '>
                <label className='block grow'>Crea tu contraseña:</label>
                <div className='flex flex-col w-full'>
                  <Field id='password'
                    name='password'
                    type='password'
                    className='w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
                  />
                  {errors.password && touched.password && (
                    <p className='flex items-center gap-1 text-error italic'>
                      <ImWarning />{errors.password}
                    </p>
                  )}
                </div>
              </div>{' '}

              <div className='flex items-center '>
                <label className='block grow'>Crea tu contraseña:</label>
                <div className='flex flex-col w-full'>
                  <Field id='repeatPassword'
                    name='repeatPassword'
                    type='password'
                    className='w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
                  />
                  {errors.repeatPassword && touched.repeatPassword && (
                    <p className='flex items-center gap-1 text-error italic'>
                      <ImWarning />{errors.repeatPassword}
                    </p>
                  )}
                </div>
              </div>

              <div className='flex justify-end'>
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

export default Register;