import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { ModalCustomMessage } from '../../../components/modal/ModalCustomMessage'
import ButtonPrimary from '../../../components/buttons/ButtonPrimary'
import { ImWarning } from 'react-icons/im'

const NewPassword = () => {

    const navigate = useNavigate();

    const initialPasswords = {
        password: '',
        confirmPassword: ''
    }

    const passwordSchema = Yup.object().shape(
        {
            password: Yup
                .string()
                .min(8, 'La contraseña debe tener al menos 8 caracteres')
                .required('Campo obligatorio'),

            confirmPassword: Yup
                .string()
                .when('password', {
                    is: (value) => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
                })
                .min(8, 'La contraseña debe tener al menos 8 caracteres')
                .required('Campo obligatorio')
        }
    )

    return (
        <Formik
            initialValues={initialPasswords}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
                let url = '/recovery';
                setTimeout(() => {
                    axios
                        .post(url, {
                            password: values.password,
                        })
                        .then((res) => {
                            if (res.data) {
                                // <ModalCustomMessage
                                //     message='Contraseña reestablecida exitosamente'
                                //     type='success'
                                // />
                                alert('Contraseña reestablecida exitosamente');
                            }
                        })
                        .catch((err) => {
                            // <ModalCustomMessage
                            //     type='error'
                            //     message='Ha ocurrido un error, por favor, intente nuevamente'
                            // />
                            alert('Ha ocurrido un error, por favor, intente nuevamente');
                        });
                }, 1000);
            }}
        >
            {({ touched, errors }) => (

                <Form className='mt-12 mb-12 min-w-full px-48 flex flex-col'>
                    <div className='flex justify-center items-center mb-8'>
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
                                    <p className='flex items-center gap-1 absolute text-error italic'>
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
                                    <p className='flex items-center gap-1 absolute text-error italic'>
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
    )
}

export default NewPassword
