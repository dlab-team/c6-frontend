import React, { useState, useContext, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { ImWarning } from 'react-icons/im';
import { AuthContext } from '../../../../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddTest = ({ setOpenModal }) => {

  const [response, setResponse] = useState('');
  const { token } = useContext(AuthContext);

  const initialValues = {
    name: "",
    imageUrl: "",
    url: "",
    description: ""
  }

  const valuesSchema = Yup.object().shape({
    name: Yup.string().required("Todos los campos son necesarios"),
    imageUrl: Yup.string().required("Todos los campos son necesarios"),
    url: Yup.string().required("Todos los campos son necesarios"),
    description: Yup.string().required("Todos los campos son necesarios"),
  })

  const axiosConfig = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={valuesSchema}
      onSubmit={async (values) => {
        const url = process.env.REACT_APP_BACKEND_URL + '/tests';
        await axios.post(url, values, axiosConfig)
          .then(res => {
            setResponse(res.data.message)
            refreshPage()
          })
          .catch(error => {
            setResponse(error.response.data.message)
            refreshPage()
          })
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <div className='h-[4.5rem]'>
            <Field
              id='name'
              name='name'
              type='text'
              placeholder='Título'
              className='w-80 h-10 px-4 rounded-md border border-gray-300'
            />
            {errors.name && touched.name && (
              <span className='flex items-center gap-1 text-error italic text-sm mb-1'>
                <ImWarning />
                {errors.name}
              </span>
            )}
          </div>
          <div className='h-[4.5rem]'>
            <Field
              id='imageUrl'
              name='imageUrl'
              type='text'
              placeholder='URL de la imágen del test'
              className='w-80 h-10 px-4 rounded-md border border-gray-300'
            />
            {errors.imageUrl && touched.imageUrl && (
              <span className='flex items-center gap-1 text-error italic text-sm mb-1'>
                <ImWarning />
                {errors.imageUrl}
              </span>
            )}
          </div>
          <div className='h-[4.5rem]'>
            <Field
              id='url'
              name='url'
              type='text'
              placeholder='URL del test'
              className='w-80 h-10 px-4 rounded-md border border-gray-300'
            />
            {errors.url && touched.url && (
              <span className='flex items-center gap-1 text-error italic text-sm mb-1'>
                <ImWarning />
                {errors.url}
              </span>
            )}
          </div>
          <div className='h-[4.5rem]'>
            <Field
              id='description'
              name='description'
              type='text'
              placeholder='Descripción del test'
              className='w-80 h-10 px-4 rounded-md border border-gray-300'
            />
            {errors.description && touched.description && (
              <span className='flex items-center gap-1 text-error italic text-sm mb-1'>
                <ImWarning />
                {errors.description}
              </span>
            )}
          </div>
          <button
            type='submit'
            className='w-80 h-10 bg-[#2738F5] text-white rounded-md'
          >
            Agregar Test
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default AddTest
