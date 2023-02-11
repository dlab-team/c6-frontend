import React from 'react'
import Select from 'react-select'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import "../../../../styles/UserForms.css"
import { useFetch } from '../../../../CustomHooks/useAxiosFetch';

const WorkProfileForm = () => {
    const yupValidation = Yup.object().shape({
        resume: Yup.string().min(1, 'Rellena este campo obligatorio.'),
        linkedin: Yup.string(),
        github: Yup.string().required('Rellena este campo obligatorio.'),
        portfolio: Yup.string().required('Rellena este campo obligatorio.'),
        skills: Yup.string().required("Selecciona una opción"),
        years: Yup.string(),
        proyecto: Yup.string(),
      })
      const formOptions = { resolver: yupResolver(yupValidation) }
      const { register, handleSubmit, reset, formState } = useForm(formOptions)
      const { errors } = formState
      function onSubmit(data) {
        console.log(JSON.stringify(data, null, 4))
        return false
      }

      const {data: skillsData, isLoading: skillsLoading} = useFetch( process.env.REACT_APP_BACKEND_URL + '/skills/4');
      const skills = skillsData && skillsData.map((skill) => ({
          value: skill.name,
          label: skill.name
      }));

    return(
        <>
        <div className="bg-[#FFFFFF] rounded-2xl w-screen md:mx-20 mt-5 pt-10">
            <h1 className="mx-8 md:mx-20 mt-10 mb-10 text-center md:text-left font-[600] text-[32px] text-[#140B34]">
                EXPERIENCIA Y TRABAJO
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-20">
                {/* div url cv */}
                <div className="form-group position-relative">
                <label className="control-label grid-cols-1 position-absolute mb-5 text-custom-color">URL CV</label>
                <p  className="mb-5 text-left w-80 md:w-5/6 font-[400] text-[14px] leading-7 text-custom-color mt-5">Subir como documento público en Google Drive o similar</p>
                <input
                    name="resume"
                    type="text"
                    required
                    className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${errors.resume ? 'is-invalid' : ''}`} 
                    {...register('resume')} 
                />
                <div className="invalid-feedback position-absolute">{errors.resume?.message}</div>
                </div>
                {/* div url linkedin */}
                <div className="form-group position-relative">
                <label className="control-label grid-cols-1 position-absolute mb-5 text-custom-color">URL de LinkedIn</label>
                <p  className="mb-5 text-left w-80 md:w-5/6 font-[400] text-[14px] leading-7 text-custom-color mt-5"><br /> </p>
                <input
                    name="linkedin"
                    type="text"
                    required
                    className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${errors.linkedin ? 'is-invalid' : ''}`} 
                    {...register('linkedin')} 
                />
                <div className="invalid-feedback position-absolute">{errors.linkedin?.message}</div>
                </div>
                {/* div url github */}
                <div className="form-group position-relative">
                <label className="control-label grid-cols-1 position-absolute mb-5 text-custom-color">URL de GitHub</label>
                <p  className="mb-5 text-left w-80 md:w-5/6 font-[400] text-[14px] leading-7 text-custom-color mt-5"><br /> </p>
                <input
                    name="github"
                    type="text"
                    required
                    className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${errors.github ? 'is-invalid' : ''}`} 
                    {...register('github')} 
                />
                <div className="invalid-feedback position-absolute">{errors.github?.message}</div>
                </div>
                {/* div url portfolio */}
                <div className="form-group position-relative">
                <label className="control-label grid-cols-1 position-absolute mb-5 text-custom-color">URL de Portafolio/Sitio web</label>
                <p  className="mb-5 text-left w-80 md:w-5/6 font-[400] text-[14px] leading-7 text-custom-color mt-5"><br /> </p>
                <input
                    name="portfolio"
                    type="text"
                    required
                    className={`form-control w-5/6 md:w-4/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 ${errors.portfolio ? 'is-invalid' : ''}`} 
                    {...register('portfolio')} 
                />
                <div className="invalid-feedback position-absolute">{errors.portfolio?.message}</div>
                </div>
                

                {/* div proyecto */}
                <div className="form-group md:col-span-2 required position-relative mt-10">
                <label className="control-label md:grid-cols-3 position-absolute mb-10 text-left w-80 md:w-5/6 font-[400] text-[18px] leading-9 text-custom-color mt-5">Explícanos en detalle algún proyecto que te enorgullece</label>
                <p  className="mb-5 text-left w-80 md:w-5/6 font-[400] text-[14px] leading-7 text-custom-color mt-5">
                Describe de que trató, tu rol en el proyecto y por qué lo elegiste (por ejemplo: arquitectura de desarrollo, equipo y tu rol en el proyecto, tecnologías utilizadas, dificultades y soluciones, funcionalidades, objetivos, etc. Recuerda NO esperamos link, sino explicación)
                </p>                
                <textarea
                    name="proyecto"
                    rows="5"
                    className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 h-40 ${errors.proyecto ? 'is-invalid' : ''}`} 
                    {...register('proyecto')} 
                />
                <div className="invalid-feedback position-absolute">{errors.proyecto?.message}</div>
                </div>

                {/* div habilidades */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]">Selecciona 3 habilidades blandas que te representen:</label>
                    <div>
                        <Select 
                            isMulti
                            name="skills"
                            options={skills}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.skills ? 'is-invalid' : ''}`} 
                            {...register('skills')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.skills?.message}</div>
                </div>
                 {/* div experiencia laboral */}
                 <div className="form-group position-relative">
                <label className="control-label position-absolute w-5/6 md:w-4/6 mb-5 text-custom-color">¿Cuántos años de experiencia laboral posees en desarrollo de software y/o diseño?</label>
                <div className={`${errors.years ? 'is-invalid' : ''}`}>
                    <div className="flex items-center mb-4 mt-4">
                        <input id="default-radio-1" type="radio" value="noxp" name="default-radio" className="w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800" ref={register('occupation')}/>
                        <label htmlFor="default-radio-1" className="ml-2 text-sm select-custom-color font-[300] text-[14px]">No poseo experiencia laboral</label>
                    </div>
                    <div className="flex items-center mb-4 mt-4">
                        <input id="default-radio-1" type="radio" value="1xp" name="default-radio" className="w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800" ref={register('occupation')}/>
                        <label htmlFor="default-radio-1" className="ml-2 text-sm select-custom-color font-[300] text-[14px]">Entre 0 a 1 año de experiencia laboral</label>
                    </div>
                    <div className="flex items-center mb-4 mt-4">
                        <input id="default-radio-1" type="radio" value="2xp" name="default-radio" className="w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800" ref={register('occupation')}/>
                        <label htmlFor="default-radio-1" className="ml-2 text-sm select-custom-color font-[300] text-[14px]">Entre 1 a 2 años de experiencia laboral</label>
                    </div>
                    <div className="flex items-center mb-4 mt-4">
                        <input id="default-radio-1" type="radio" value="3xp" name="default-radio" className="w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800" ref={register('occupation')}/>
                        <label htmlFor="default-radio-1" className="ml-2 text-sm select-custom-color font-[300] text-[14px]">Entre 2 a 3 años de experiencia laboral</label>
                    </div>
                    <div className="flex items-center mb-4 mt-4">
                        <input id="default-radio-1" type="radio" value="4xp" name="default-radio" className="w-4 h-4 radio-custom-color border-blue-200 bg-blue-200 checked:bg-blue-800 checked:border-blue-800" ref={register('occupation')}/>
                        <label htmlFor="default-radio-1" className="ml-2 text-sm select-custom-color font-[300] text-[14px]">Más de 4 años de experiencia laboral</label>
                    </div>
                </div>
                <div className="invalid-feedback position-absolute">{errors.years?.message}</div>
                </div>
                
            </form>
        </div>
              
    </>
    )
}

export default WorkProfileForm;