import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios, { Axios, AxiosResponse } from 'axios'
import { ButtonPrimary } from '../../../../components/index'
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
            <div className='flex justify-center'>
                <p className='max-w-sm text-center pb-6'>
                    Tu contraseña debe tener al menos 8 caracteres y debe incluir una combinación de números, mayúsculas, minúsculas y caracteres especiales (!$@%).
                </p>
            </div>

            <Formik
                initialValues={initialPasswords}
                validationSchema={passwordSchema}
                onSubmit={async (values) => {
                    const url = process.env.REACT_APP_BACKEND_URL + '/auth/changePassword';
                    await axios
                        .put(url, {
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

                    <Form className='flex flex-col gap-y-6'>
                        <div className='flex items-center pb-6'>
                            <label htmlFor='password' className='block grow'>
                                Nueva Contraseña:
                            </label>
                            <div>
                                <Field id='password'
                                    type='password'
                                    name='password'
                                    placeholder='************'
                                    className='w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
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

                        <div className='flex items-center pb-6'>
                            <label htmlFor='confirm-password' className='block grow'>
                                Confirmar Contraseña:
                            </label>
                            <div>
                                <Field id='confirm-password'
                                    type='password'
                                    name='confirmPassword'
                                    placeholder='************'
                                    className='w-full px-3 py-1 border rounded-md border-stone-500 bg-sky-100'
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

                        <div className='flex justify-end'>
                            <ButtonPrimary type='submit'>
                                Reestablecer Contraseña
                            </ButtonPrimary>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default NewPassword
