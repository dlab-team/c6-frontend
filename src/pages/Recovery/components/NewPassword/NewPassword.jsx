import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios, { Axios, AxiosResponse } from 'axios'
import {ButtonPrimary} from '../../../../components/index'
import { ImWarning } from 'react-icons/im'

const NewPassword = ({ setResponse, token }) => {

    const initialPasswords = {
        password: '',
        confirmPassword: ''
    }

    const passwordSchema = Yup.object().shape(
        {
            password: Yup
                .string()
                .min(8, 'La contraseña debe tener al menos 8 caracteres')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Debe incluir números, mayúsculas, minúsculas y caracteres especiales')
                .required('Campo obligatorio'),

            confirmPassword: Yup
                .string()
                .when('password', {
                    is: (value) => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
                })
                .min(8, 'La contraseña debe tener al menos 8 caracteres')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Debe incluir números, mayúsculas, minúsculas y caracteres especiales')
                .required('Campo obligatorio')
        }
    )

    return (
        <>
            <p className='text-center text-black text-xl px-36'>
                Tu contraseña debe tener al menos 8 caracteres y debe incluir una combinación de números, mayúsculas, minúsculas y caracteres especiales (!$@%).
            </p>
            <Formik
                initialValues={initialPasswords}
                validationSchema={passwordSchema}
                onSubmit={async (values) => {
                    const url = process.env.REACT_APP_BACKEND_URL + '/auth/changePassword';
                    await axios
                        .post(url, {
                            password: values.password,
                            confirmPassword: values.confirmPassword,
                            token: token
                        })
                        .then((AxiosResponse) => {
                            setResponse({
                                type: AxiosResponse.data.status,
                                message: AxiosResponse.data.message
                            })
                        })
                        .catch((err) => {
                            setResponse({
                                type: 'error',
                                message: 'Ha ocurrido un error, por favor intente nuevamente'
                            })
                        });
                }}
            >
                {({ touched, errors }) => (

                    <Form className='mt-12 mb-12 min-w-full px-36 flex flex-col'>
                        <div className='flex justify-center items-center mb-12'>
                            <label htmlFor='password' className='text-2xl pr-8 text-black'>
                                Nueva Contraseña:
                            </label>
                            <div>
                                <Field id='password'
                                    type='password'
                                    name='password'
                                    placeholder='************'
                                    className='bg-[#E2F2FE] rounded border-[0.5px] border-[#140B34] p-2 text-2xl'
                                />
                                {
                                    errors.password && touched.password && (
                                        <p className='flex items-center gap-1 absolute text-error italic max-w-xs'>
                                            <ImWarning />{errors.password}
                                        </p>
                                    )
                                }
                            </div>
                        </div>

                        <div className='flex justify-center items-center mb-16'>
                            <label htmlFor='confirm-password' className='text-2xl pr-8 text-black'>
                                Confirmar Contraseña:
                            </label>
                            <div>
                                <Field id='confirm-password'
                                    type='password'
                                    name='confirmPassword'
                                    placeholder='************'
                                    className='bg-[#E2F2FE] rounded border-[0.5px] border-[#140B34] p-2 text-2xl'
                                />
                                {
                                    errors.confirmPassword && touched.confirmPassword && (
                                        <p className='flex items-center gap-1 absolute text-error italic max-w-xs'>
                                            <ImWarning />{errors.confirmPassword}
                                        </p>
                                    )
                                }
                            </div>
                        </div>

                        <ButtonPrimary type='submit'>
                            Reestablecer Contraseña
                        </ButtonPrimary>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default NewPassword
