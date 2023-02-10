import React from 'react'
import Select from 'react-select'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import "../../../../styles/UserForms.css"
import { useFetch } from '../../../../CustomHooks/useAxiosFetch';
import { genderOptions } from '../docs/data.ts';


const UserProfileForm = () => {    
    const {data: countriesData, isLoading: countriesLoading} = useFetch( process.env.REACT_APP_BACKEND_URL + '/countries');
    const countries = countriesData && countriesData.map((country) => ({
        value: country.name,
        label: country.name
    }));

    const {data: citiesData, isLoading: citiesLoading} = useFetch( process.env.REACT_APP_BACKEND_URL + '/cities');
    const cities = citiesData && citiesData.map((city) => ({
        value: city.name,
        label: city.name
    })); 

    
    const {data: jobsData, isLoading: jobsLoading} = useFetch( process.env.REACT_APP_BACKEND_URL + '/charges');
    const job = jobsData && jobsData.map((jobs) => ({
        value: jobs.name,
        label: jobs.name
    }));

    const yupValidation = Yup.object().shape({
        name: Yup.string()
          .required('Rellena este campo obligatorio.')
          .min(1, 'Rellena este campo obligatorio.'),
        email: Yup.string().required("Rellena este campo obligatorio.").email("Formato de correo electrónico incorrecto."),
        cellphone: Yup.string().required("Rellena este campo obligatorio").min(9, "Largo de número telefónico incorrecto."),
        country: Yup.string().required("Selecciona una opción del menú desplegable."),
        city: Yup.string().required("Seleccion una opción del menú desplegable."),
        gender: Yup.string().required("Selecciona una opción del menú desplegable."),
        occupation: Yup.string().required("Selecciona una opción."),
        jobs: Yup.string().required("Selecciona al menos una opción."),
      })
      const formOptions = { resolver: yupResolver(yupValidation) }
      const { register, handleSubmit, reset, formState } = useForm(formOptions)
      const { errors } = formState
      function onSubmit(data) {
        console.log(JSON.stringify(data, null, 4))
        return false
      }

    return(
        <>
        <div className="bg-[#FFFFFF] rounded-2xl w-screen md:mx-20 mt-10 pt-10">
            <h1 className="mx-8 md:mx-20 mt-10 mb-10 text-center md:text-left font-[600] text-[32px] text-[#140B34]">
                INFORMACIÓN PERSONAL
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-20">
                {/* div nombre */}
                <div className="form-group md:col-span-2 required position-relative">
                <label className="control-label md:grid-cols-2 position-absolute mb-5 text-custom-color">Nombre</label>
                <input
                    name="name"
                    type="text"
                    required
                    className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 bg-custom-color ${errors.name ? 'is-invalid' : ''}`} 
                    {...register('name')} 
                />
                <div className="invalid-feedback position-absolute">{errors.name?.message}</div>
                </div>
                {/* div email */}
                <div className="form-group required position-relative">
                <label className="control-label position-absolute mb-5 text-custom-color">Email</label>
                <input
                    name="email"
                    type="email"
                    className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 bg-custom-color ${errors.email ? 'is-invalid' : ''}`}
                    {...register('email')}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                {/* div telefono */}
                <div className="form-group required position-relative">
                <label className="control-label position-absolute mb-5 text-custom-color">Número de teléfono móvil</label>
                <input
                    name="cellphone"
                    type="phone"
                    required
                    className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 bg-custom-color ${errors.cellphone ? 'is-invalid' : ''}`} 
                    {...register('cellphone')} 
                />
                <div className="invalid-feedback position-absolute">{errors.cellphone?.message}</div>
                </div>
                {/* div pais */}
                <div className="form-group required position-relative">
                <label className="control-label position-absolute mb-5 text-custom-color">País</label>
                <select 
                    required
                    className={`form-control position-absolute w-5/6 md:w-4/6 h-10 px-4 pt-2 rounded-md border-2 border-custom-color mt-5 bg-custom-color ${errors.country ? 'is-invalid' : ''}`} 
                    {...register('country')}>
                        <option defaultValue value="chile">Chile</option>
                        <option value="argentina">Argentina</option>
                        <option value="colombia">Colombia</option>
                        <option value="mexico">México</option>
                        <option value="peru">Perú</option>
                        <option value="venezuela">Venezuela</option>
                    </select>
                <div className="invalid-feedback position-absolute">{errors.country?.message}</div>
                </div>
                {/* div ciudad */}
                <div className="form-group required position-relative">
                <label className="control-label position-absolute mb-5 text-custom-color">Ciudad</label>
                <select 
                    required
                    className={`form-control position-absolute w-5/6 md:w-4/6 h-10 px-4 pt-2 rounded-md border-2 border-custom-color mt-5 bg-custom-color ${errors.city ? 'is-invalid' : ''}`} 
                    {...register('city')}>
                        <option defaultValue value="chile">Santiago</option>
                        <option value="argentina">Valparaíso</option>
                    </select>
                <div className="invalid-feedback position-absolute">{errors.city?.message}</div>
                </div>
                {/* div genero */}
                <div className="form-group required position-relative mt-5">
                <label className="control-label position-absolute mb-5 text-custom-color">¿Con qué género te identificas</label>
                <select 
                    required
                    className={`form-control position-absolute w-5/6 md:w-4/6 h-10 px-4 pt-2 rounded-md border-2 border-custom-color mt-5 bg-custom-color ${errors.gender ? 'is-invalid' : ''}`} 
                    {...register('gender')}>
                        <option value="masculino">Masculino</option>
                        <option value="masculino">Femenino</option>
                        <option value="masculino">Otro</option>
                        <option value="masculino">Prefiero no decirlo</option>
                    </select>
                <div className="invalid-feedback position-absolute">{errors.gender?.message}</div>
                </div>
                {/* div situacion laboral */}
                <div className="form-group required position-relative mt-5">
                <label className="control-label position-absolute mb-5 text-custom-color">¿Cuál es tu estado laboral actual?</label>
                <div className={`${errors.occupation ? 'is-invalid' : ''}`}>
                    <div className="flex items-center mb-4 mt-4">
                        <input id="default-radio-1" type="radio" value="first-unemployed" name="default-radio" className="w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800" ref={register('occupation')}/>
                        <label htmlFor="default-radio-1" className="ml-2 text-sm select-custom-color font-[300] text-[14px]">Cesante, busco empleo en TI por primera vez.</label>
                    </div>
                    <div className="flex items-center mb-4 mt-4">
                        <input id="default-radio-1" type="radio" value="before-unemployed" name="default-radio" className="w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800" ref={register('occupation')}/>
                        <label htmlFor="default-radio-1" className="ml-2 text-sm select-custom-color font-[300] text-[14px]">Cesante, ya he trabajado antes en TI.</label>
                    </div>
                    <div className="flex items-center mb-4 mt-4">
                        <input id="default-radio-1" type="radio" value="looking-employed" name="default-radio" className="w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800" ref={register('occupation')}/>
                        <label htmlFor="default-radio-1" className="ml-2 text-sm select-custom-color font-[300] text-[14px]">Tengo trabajo en TI, pero busco otro.</label>
                    </div>
                    <div className="flex items-center mb-4 mt-4">
                        <input id="default-radio-1" type="radio" value="looking-it-employed" name="default-radio" className="w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800" ref={register('occupation')}/>
                        <label htmlFor="default-radio-1" className="ml-2 text-sm select-custom-color font-[300] text-[14px]">Tengo trabajo (en otras áreas), pero busco en TI.</label>
                    </div>
                </div>
                <div className="invalid-feedback position-absolute">{errors.occupation?.message}</div>
                </div>
                {/* div cargos */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color">¿Cuál o cuáles cargos te gustaría optar?</label>
                    <p className="text-left md:mr-16 font-[300] text-[14px] text-custom-color mt-3">
                    <strong>Ten en cuenta:</strong> De acuerdo al cargo que postules, te pediremos que seas capaz de demostrarlo de manera práctica durante el proceso de selección.
                    </p>
                    <div /*  className={`${errors.jobs ? 'is-invalid' : ''}`} */>
                        <Select 
                            isMulti
                            name="jobs"
                            options={job}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.jobs ? 'is-invalid' : ''}`} 
                            {...register('jobs')}
                            classNamePrefix="select"
                        />

                        
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.jobs?.message}</div>
                </div>
            </form>
        </div>
              
        </>
    )
}

export default UserProfileForm;
