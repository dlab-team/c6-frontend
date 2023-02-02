import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { ImWarning } from 'react-icons/im'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary'

const EmailRequest = ({ setResponse }) => {

    const initialEmail = {
        email: ''
    }

    const emailSchema = Yup.object().shape(
        {
            email: Yup
                .string()
                .email('Formato de correo inválido')
                .required('Campo obligatorio')
        }
    )

    return (
        <>
            <div className='flex justify-center'>
                <p className='max-w-sm text-center pb-6'>
                    Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.
                </p>
            </div>

            <Formik
                initialValues={initialEmail}
                validationSchema={emailSchema}
                onSubmit={async (values) => {
                    const url = process.env.REACT_APP_BACKEND_URL + '/auth/recovery';
                    await axios
                        .post(url, { email: values.email })
                        .then((res) => {
                            setResponse({
                                type: res.data.status,
                                message: res.data.message
                            })
                        })
                        .catch(err => {
                            console.log(err)
                            setResponse({
                                type: err.response.data.statusCode,
                                message: err.response.data.message
                            })
                        });
                }}
            >
                {({ touched, errors }) => (

                    <Form className='flex flex-col gap-y-6'>
                        <div className='flex items-center pb-6'>
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
                        <div className='flex justify-end'>
                            <ButtonPrimary type='submit'>
                                Enviar código de verificación
                            </ButtonPrimary>
                        </div>
                    </Form>
                )}
            </Formik>
        </>

    )
}

export default EmailRequest