import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { ImWarning } from 'react-icons/im'
import ButtonPrimary from '../../../components/buttons/ButtonPrimary'

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
            <p className='text-center text-black text-xl px-36'>
                Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.
            </p>
            <Formik
                initialValues={initialEmail}
                validationSchema={emailSchema}
                onSubmit={(values) => {
                    let url = '/recovery';
                    setTimeout(() => {
                        axios
                            .post(url, {
                                email: values.email,
                            })
                            .then((res) => {
                                if (res.data) {
                                    setResponse({
                                        type: 'success',
                                        message: 'Hemos enviado un enlace a tu correo electrónico para que recuperes el acceso a tu cuenta'
                                    })
                                }
                            })
                            .catch((err) => {
                                setResponse({
                                    type: 'error',
                                    message: 'No hemos podido encontrar su correo, asegurese de haberlo ingresado correctamente'
                                })
                            });
                    }, 1000);
                }}
            >
                {({ touched, errors }) => (

                    <Form className='mt-12 mb-12 min-w-full px-36 flex flex-col'>
                        <div className='flex justify-center items-center mb-16'>
                            <label htmlFor='email' className='text-2xl pr-8 text-black'>
                                Ingresa tu correo:
                            </label>

                            <div>
                                <Field id='email'
                                    name='email'
                                    type='email'
                                    placeholder='usuario@ejemplo.com'
                                    className='bg-[#E2F2FE] rounded border-[0.5px] border-[#140B34] p-2 text-2xl'
                                />
                                {
                                    errors.email && touched.email && (
                                        <p className='flex items-center gap-1 absolute text-error italic'>
                                            <ImWarning />{errors.email}
                                        </p>
                                    )
                                }
                            </div>
                        </div>

                        <ButtonPrimary type='submit'>
                            Enviar código de verificación
                        </ButtonPrimary>
                    </Form>
                )}
            </Formik>
        </>

    )
}

export default EmailRequest