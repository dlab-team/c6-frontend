import React from 'react'
import Select from 'react-select'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import "../../../../styles/UserForms.css"
import { availabilityOptions, wantedOptions, visaOptions } from '../docs/data.ts';

const WorkExperienceForm = () => {
    const yupValidation = Yup.object().shape({
        languages1: Yup.string().required("Selecciona una opción del menú desplegable."),
        frameworks1: Yup.string().required("Selecciona una opción del menú desplegable."),
        tools1: Yup.string().required("Selecciona una opción del menú desplegable."),
        languages2: Yup.string().required("Selecciona una opción del menú desplegable."),
        framework2: Yup.string().required("Selecciona una opción del menú desplegable."),
        tools2: Yup.string().required("Selecciona una opción del menú desplegable."),
        languages3: Yup.string().required("Selecciona una opción del menú desplegable."),
        framework3: Yup.string().required("Selecciona una opción del menú desplegable."),
        tools3: Yup.string().required("Selecciona una opción del menú desplegable."),
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
        <div className="bg-[#FFFFFF] rounded-2xl w-screen md:mx-20 mt-5 pt-10">
            <h1 className="mx-8 md:mx-20 mt-10 mb-10 text-center md:text-left font-[600] text-[32px] text-[#140B34]">
                ¿QUÉ TIPO DE TRABAJO ESTÁS BUSCANDO?
            </h1>
            
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-8 md:mx-20">
                {/* div otra */}
                <div className="form-group md:col-span-3 required position-relative mt-5">
                <label className="control-label md:grid-cols-3 position-absolute mb-10 text-left w-80 md:w-5/6 font-[400] text-[18px] leading-9 text-custom-color mt-5">Déjanos una breve descripción con respecto a tu trabajo ideal</label>
                <textarea
                    name="idealjob"
                    rows="5"
                    required
                    className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 h-40 ${errors.idealjob ? 'is-invalid' : ''}`} 
                    {...register('idealjob')} 
                />
                <div className="invalid-feedback position-absolute">{errors.idealjob?.message}</div>
                </div>

                {/* divsponibilidad */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute w-5/6 md:w-4/6 mb-10 mt-5 text-custom-color font-[500] text-[20px]">Indícanos tu disponibilidad laboral:</label>
                    <div>
                        <Select 
                            isMulti
                            name="disponibilidad"
                            options={availabilityOptions}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.disponibilidad ? 'is-invalid' : ''}`} 
                            {...register('disponibilidad')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.disponibilidad?.message}</div>
                </div>
                {/* div trabajo buscado */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute w-5/6 md:w-4/6 mb-10 mt-5 text-custom-color font-[500] text-[20px]">¿Qué describe mejor tu situación actual?</label>
                    <div>
                        <Select 
                            name="wanted"
                            options={wantedOptions}
                            className={`form-control basic-single w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.wanted ? 'is-invalid' : ''}`} 
                            {...register('wanted')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.wanted?.message}</div>
                </div>
                {/* divisa */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute w-5/6 md:w-4/6 mb-10 mt-5 text-custom-color font-[500] text-[20px]">¿Cuentas con Visa de trabajo activa en?</label>
                    <div>
                        <Select 
                            isMulti
                            name="visa"
                            options={visaOptions}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.visa ? 'is-invalid' : ''}`} 
                            {...register('visa')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.visa?.message}</div>
                </div>
                
                {/* boton momentaneo */}
                <div className="mt-3">
                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>
                </div>

            </form>
        </div>
              
    </>
    )
}

export default WorkExperienceForm;