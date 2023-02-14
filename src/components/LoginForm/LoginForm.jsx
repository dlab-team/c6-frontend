import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ImWarning } from 'react-icons/im';
import googleIcon from '../../assets/images/google-icon-4-140x140.png';
import githubIcon from '../../assets/images/github-icon-4-140x140.png';
import linkedinIcon from '../../assets/images/linkedin-icon-4-140x140.png';
import twitterIcon from '../../assets/images/twitter-icon-4-140x140.png';
import { AuthContext } from '../../Context/AuthContext';

const LoginForm = ({ setOpenModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [respAuth, setRespAuth] = useState(false);
  const [messageAuth, setMessageAuth] = useState('');
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const initialCredentials = {
    email: '',
    password: '',
  };

  const credentialsSchema = Yup.object().shape({
    email: Yup.string()
      .email('Formato de correo inválido')
      .required('Campo obligatorio'),
    password: Yup.string().required('Campo obligatorio'),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={initialCredentials}
      validationSchema={credentialsSchema}
      onSubmit={async (values) => {
        const url = process.env.REACT_APP_BACKEND_URL + 'auth/login';
        await axios
          .post(url, values)
          .then((res) => {
            setRespAuth(true);
            setMessageAuth(res.data.message);
            const { token } = res.data.body;
            localStorage.setItem('userToken', token);
            dispatch({ type: 'LOGIN', payload: token});
            setTimeout(() => {
              setOpenModal(false);
            }, 2000);
          })
          .catch((err) => {
            setRespAuth(true);
            setMessageAuth(err.response.data.message);
          });
      }}
    >
      {({ touched, errors }) => (
        <Form className='flex flex-col mt-4'>
          <div className='h-[4.5rem]'>
            <Field
              id='email'
              name='email'
              type='text'
              placeholder='Correo Electrónico'
              className='w-80 h-10 px-4 rounded-md border border-gray-300'
            />
            {errors.email && touched.email && (
              <span className='flex items-center gap-1 text-error italic text-sm mb-1'>
                <ImWarning />
                {errors.email}
              </span>
            )}
          </div>
          <div className='h-[4.5rem]'>
            <Field
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Contraseña'
              className='w-80 h-10 px-4 rounded-md border border-gray-300 mb-1'
            />
            {errors.password && touched.password && (
              <span className='flex items-center gap-1 text-error italic text-sm'>
                <ImWarning />
                {errors.password}
              </span>
            )}
          </div>

          <div class='flex items-center mb-4'>
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
          <div className='h-20'>
            <button
              type='submit'
              className='w-80 h-10 bg-[#2738F5] text-white rounded-md'
            >
              Iniciar Sesión
            </button>
            {respAuth && <div class='static mt-5 mb-5'>{messageAuth}</div>}
          </div>
          <div className='mt-1 -mb-20'>
            <hr className='border-2 h-1' />
            <p className='text-center'>o</p>
            <div className='grid grid-cols-4'>
              <div className='mx-5 col-span-1 h-8 w-8'>
                <img src={googleIcon} alt='' />
              </div>
              <div className='mx-5 col-span-1 h-8 w-8'>
                <img src={twitterIcon} alt='' />
              </div>
              <div className='mx-5 col-span-1 h-8 w-8'>
                <img src={linkedinIcon} alt='' />
              </div>
              <div className='mx-5 col-span-1 h-8 w-8'>
                <img src={githubIcon} alt='' />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
