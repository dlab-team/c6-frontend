import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { ModalCustomMessage } from '../../../components/modal/ModalCustomMessage'
import { ImWarning } from 'react-icons/im'
import ButtonPrimary from '../../../components/buttons/ButtonPrimary'

const EmailRequest = () => {

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
                                // <ModalCustomMessage
                                //     type='success'
                                //     message='Hemos enviado un enlace a tu correo electrónico para reestablecer su contraseña'
                                // />
                                alert('Hemos enviado un enlace a tu correo electrónico para que recuperes el acceso a tu cuenta');
                            }
                        })
                        .catch((err) => {
                            // <ModalCustomMessage
                            //     type='error'
                            //     message='No hemos podido encontrar su correo, asegurese de haberlo ingresado correctamente'
                            // />
                            alert('Correo no registrado');
                        });
                }, 1000);
            }}
        >
            {({ touched, errors }) => (

                <Form className='mt-12 mb-12 min-w-full px-48 flex flex-col'>
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
                                        <ImWarning/>{errors.email}
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
    )
}

export default EmailRequest