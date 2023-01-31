import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ImWarning } from 'react-icons/im'

const LoginForm = ({ setOpenModal }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [respAuth, setRespAuth] = useState(false);
    const [messageAuth, setMessageAuth] = useState('');

    const navigate = useNavigate();

    const initialCredentials = {
        email: '',
        password: ''
    }

    const credentialsSchema = Yup.object().shape({
        email: Yup.string()
            .email('Formato de correo inválido')
            .required('Campo obligatorio'),
        password: Yup.string()
            .required('Campo obligatorio')
    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Formik
            initialValues={initialCredentials}
            validationSchema={credentialsSchema}
            onSubmit={async (values) => {
                const url = process.env.REACT_APP_BACKEND_URL + '/auth/login'
                await axios
                    .post(url, values)
                    .then((res) => {
                        setRespAuth(true);
                        setMessageAuth(res.data.message);
                        localStorage.setItem("token", res.data.token);
                        setTimeout(() => {
                            setOpenModal(false);
                            //redirecting using router (to Home just until Dashboard page is ready)
                            navigate('/');
                        }, 3000);

                    })
                    .catch(err => {
                        setRespAuth(true);
                        setMessageAuth(err.response.data.message);
                    })
            }}
        >

            {({ touched, errors }) => (

                <Form className="flex flex-col gap-8 mt-4">
                    <Field
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Correo Electrónico"
                        className="w-80 h-10 px-4 rounded-md border border-gray-300"
                    />
                    {errors.email && touched.email && (
                        <span className='absolute flex top-[9.1rem] items-center gap-1 text-error italic text-sm'>
                            <ImWarning />{errors.email}
                        </span>
                    )}
                    <Field
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        className="w-80 h-10 px-4 rounded-md border border-gray-300"
                    />
                    {errors.password && touched.password && (
                        <span className='absolute flex items-center top-[13.7rem] gap-1 text-error italic text-sm'>
                            <ImWarning />{errors.password}
                        </span>
                    )}
                    <div class="flex items-center mb-4">
                        <input onClick={handleShowPassword} id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Mostrar contraseña</label>
                    </div>
                    <button
                        type="submit"
                        className="w-80 h-10 bg-[#2738F5] text-white rounded-md"
                    >
                        Iniciar Sesión
                    </button>
                    {respAuth && <div class="static -mb-20">{messageAuth}</div>}
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm