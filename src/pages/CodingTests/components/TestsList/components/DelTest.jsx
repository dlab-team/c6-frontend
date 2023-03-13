import React, { useContext, useState } from 'react'
import axios from "axios"
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { ImWarning } from 'react-icons/im';
import { useFetch } from '../../../../../CustomHooks/useAxiosFetch'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthContext';

const DelTest = ({setOpenModal}) => {

  const { data: tests, isLoading: testsLoading } = useFetch(
    process.env.REACT_APP_BACKEND_URL + '/tests'
  );

  const [response, setResponse] = useState('')

  const { token } = useContext(AuthContext);

  const initialValues = {
    test: ''
  }

  const valuesSchema = Yup.object().shape({
    test: Yup.string().required("Es necesario seleccionar una opción")
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
        const url = process.env.REACT_APP_BACKEND_URL + `/tests/${values.test}`;
        await axios.put(url, values, axiosConfig)
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
        <Form className='flex flex-col'>
          <div className='h-[4.5rem]'>
            <Field
              id='test'
              name='test'
              as='select'
              placeholder='Test a eliminar'
              className='w-80 h-10 px-4 rounded-md border border-gray-300'
            >
              <>
                {
                  tests && tests.map(test => (
                    <option key={test.name} value={test.id}>{test.name}</option>
                  ))
                }
              </>
            </Field>
            {errors.test && touched.test && (
              <span className='flex items-center gap-1 text-error italic text-sm mb-1'>
                <ImWarning />
                {errors.test}
              </span>
            )}
          </div>
          <button
            className='bg-[#AC231B] text-center text-white rounded p-2 flex items-center'
            type='submit'>
            Eliminar prueba
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default DelTest