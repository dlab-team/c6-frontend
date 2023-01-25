import React from "react";
import logo from "../../assets/images/Logo-horizontal.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../../styles/Header.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Header = () => {

  const [openModal, setOpenModal] = React.useState(false);
  const [respAuth, setRespAuth] = React.useState(false);
  const [messageAuth, setMessageAuth] = React.useState('');

  const { errors, touched, getFieldProps, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Debe de ser un email').required('Requerido'),
      password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Debe incluir números, mayúsculas, minúsculas y caracteres especiales')
      .required('Campo obligatorio'),
    }),
  });

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // call using axios
    await axios
      .post('http://localhost:3000/api/auth/login', data)
      .then(async (res) => {
        setRespAuth(true);
        setMessageAuth(res.data.message);
        localStorage.setItem("token", res.data.token);
        // TODO: save token in localstorage?
        setTimeout(() => {
          setOpenModal(false);
          //redirecting using router (to Home just until Dashboard page is ready)
          navigate('/');
        }, 3000);
      })
      .catch((err) => {
        setRespAuth(true);
        setMessageAuth('Usuario o contraseña incorrectos');
      });
  };

  const [showPassword, setShowPassword] = React.useState(false);
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };

  
  return (
    <>
      <nav className="flex items-center h-20 text-white justify-between px-2 py-3 bg-[#2738F5]">
        <Link to={'/'}>
          <img className="w-40 h-12 ml-28" src={logo} alt="Logo" />
        </Link>
        <ul className="hidden md:flex gap-4">
          <li className="w-28 h-7 mt-4">
            <button onClick={handleOpenModal}>Iniciar Sesión</button>
          </li>
          <li className="w-52 h-7 mt-4">
            <Link to="/">Administra la Página</Link>
          </li>
          {openModal && (
            <div className='modal-backdrop' onClick={(e) => {
              if (e.target.className === 'modal-backdrop') {
                setOpenModal(false)
              }
            }}>
            <div
              onClick={handleCloseModal}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
            >
              <div onClick={(e) => e.stopPropagation()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white border-stone-500 bg-sky-100 rounded-md">
                <div className="flex flex-col items-center justify-center h-full text-black">
                  {/* add x to close */}
                  <button
                    className="absolute top-4 right-4 text-black font-bold"
                    type="button"
                    onClick={() => setOpenModal(false)}
                  >
                    X
                  </button>
                  <h1 className="static text-2xl font-semibold -mt-20">Iniciar Sesión</h1>
                  <form
                    className="flex flex-col gap-6 mt-4"
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Correo Electrónico"
                      className="w-80 h-10 px-4 rounded-md border border-gray-300"
                      ref={emailRef}
                      {...getFieldProps('email')}
                      />
                      {errors.email && touched.email && (
                        <span className='text-danger text-red-500 static -mb-5 -mt-5'>
                          {errors.email}{' '}
                        </span>
                      )}
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña"
                      className="w-80 h-10 px-4 rounded-md border border-gray-300"
                      ref={passwordRef}
                      {...getFieldProps('password')}
                      />
                      {errors.password && touched.password && (
                        <span className='text-danger text-red-500 static -mb-5 -mt-5'>
                          {errors.password}{' '}
                        </span>
                      )}
                    <div class="flex items-center mb-4">
                        <input onClick={handleShowPassword} id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Mostrar contraseña</label>
                    </div>
                    <button
                      type="submit"
                      className="w-80 h-10 bg-[#2738F5] text-white rounded-md"
                    >
                      Iniciar Sesión
                    </button>
                    {respAuth && <div class="static -mb-20">{messageAuth}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
          )}

          <button
            type="button"
            className="hidden md:block border-solid border-zinc-100 border py-4 px-4 rounded-md  hover:opacity-80 "
          >
            <Link to="/register">Registrate</Link>
          </button>

          <button
            type="button"
            className="hidden md:block bg-zinc-100 py-4 px-4 mr-4 rounded-md hover:opacity-80 text-[#2738F5] "
          >
            Contáctanos
          </button>
        </ul>
      </nav>
    </>
  );
};


export default Header;