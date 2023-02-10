import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import "../../../../styles/UserForms.css"
import { useFetch } from '../../../../CustomHooks/useAxiosFetch';

const EducationalBackgroundForm = () => {

    const {data: institutionData, isLoading: institutionLoading} = useFetch( process.env.REACT_APP_BACKEND_URL + '/institutions');
    const institutions = institutionData && institutionData.map((institution) => ({
        value: institution.name,
        label: institution.name
    }));
    const {data: institutionTypeData, isLoading: institutionTypeLoading} = useFetch( process.env.REACT_APP_BACKEND_URL + '/institutionstype');
    const institutionsType = institutionTypeData && institutionTypeData.map((institutionstype) => ({
        value: institutionstype.name,
        label: institutionstype.name
    }));

    const yupValidation = Yup.object().shape({
        lvlschool: Yup.string().required("Selecciona una opción del menú desplegable."),
        career1: Yup.string().required('Rellena este campo obligatorio.'),
        institution1: Yup.string().required('Rellena este campo obligatorio.'),
        typeschool1: Yup.string().required("Selecciona al menos una opción."),
        career2: Yup.string().required('Rellena este campo obligatorio.'),
        institution2: Yup.string().required('Rellena este campo obligatorio.'),
        typeschool2: Yup.string().required("Selecciona al menos una opción."),
        studies: Yup.string().required("Selecciona al menos una opción."),
        english: Yup.string().required("Selecciona al menos una opción."),
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
                INFORMACIÓN EDUCACIONAL
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-20">
                {/* div nivel */}
                <div className="form-group md:col-span-2 required position-relative">
                    <label className="control-label position-absolute mb-5 text-custom-color">¿Cuál es tu máximo nivel educacional?</label>
                    <select 
                        required
                        className={`form-control position-absolute w-80 md:w-5/6 h-10 px-4 pt-2 rounded-md border-2 border-custom-color mt-5 bg-custom-color ${errors.lvlschool ? 'is-invalid' : ''}`} 
                        {...register('lvlschool')}>
                            <option selected value="basica">Educación Básica</option>
                            <option value="media">Educación Media</option>
                            <option value="tecnico-incompleta">Educación Técnico Profesional incompleta</option>
                            <option value="tecnico">Educación Técnico Profesional completada</option>
                            <option value="universitaria-incompleta">Educación Universitaria incompleta</option>
                            <option value="universitaria">Educación universitaria completa</option>
                            <option value="bootcamp">Bootcamp o diplomado</option>
                    </select>
                    <div className="invalid-feedback position-absolute">{errors.lvlschool?.message}</div>
                </div>
                 {/* div antecedentes educacionales */}
                <div className="form-group md:col-span-2 required position-relative">
                    <p className="text-center w-80 md:w-5/6 md:text-left md:mr-16 font-[700] text-[18px] leading-9 text-custom-color mt-3">
                    A continuación, indícanos 2 (dos) carreras profesionales, cursos, bootcamp o certificaciones cursadas relacionadas al desarrollo de software, diseño o TI (puedes indicarnos las más importantes o actuales):
                    </p>
                    {/* div antecedente 1 */}
                    <div className="form-group md:col-span-2 required mt-10 position-relative">
                        <label className="control-label position-absolute mb-5 font-[700] text-custom-color">Nombre de la carrera, curso, bootcamp o certificación 1:</label>
                        <input
                        name="career1"
                        type="text"
                        required
                        className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 bg-custom-color ${errors.career1 ? 'is-invalid' : ''}`} 
                        {...register('career1')} 
                        />
                        <div className="invalid-feedback position-absolute">{errors.career1?.message}</div>
                    </div>
                    {/* div institucion 1 */}
                    <div className="form-group md:col-span-2 required mt-5 position-relative">
                        <label className="control-label position-absolute mb-5 font-[300] text-custom-color">Nombre institución 1:</label>
                        <input
                        name="institution1"
                        type="text"
                        required
                        className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 bg-custom-color ${errors.institution1 ? 'is-invalid' : ''}`} 
                        {...register('institution1')} 
                        />
                        <div className="invalid-feedback position-absolute">{errors.institution1?.message}</div>
                    </div>
                    {/* div tipo institución 1 */}
                    <div className="form-group md:col-span-2 mt-5 required position-relative">
                        <label className="control-label position-absolute mb-5 text-custom-color">Tipo institución 1</label>
                        <select 
                            required
                            className={`form-control position-absolute w-80 md:w-5/6 h-10 px-4 pt-2 rounded-md border-2 border-custom-color mt-5 bg-custom-color ${errors.typeschool1 ? 'is-invalid' : ''}`} 
                            {...register('typeschool1')}>
                                <option selected value="escuela1">Escuela Básica</option>
                                <option value="liceo1">Liceo</option>
                                <option value="ip1">Instituto Profesional</option>
                                <option value="universidad1">Universidad</option>
                                <option value="bootcamp1">Bootcamp o diplomado</option>
                        </select>
                        <div className="invalid-feedback position-absolute">{errors.typeschool1?.message}</div>
                    </div>
                    {/* div antecedente 2 */}
                    <div className="form-group md:col-span-2 required mt-10 position-relative">
                        <label className="control-label position-absolute mb-5 font-[700] text-custom-color">Nombre de la carrera, curso, bootcamp o certificación 2:</label>
                        <input
                        name="career2"
                        type="text"
                        required
                        className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 bg-custom-color ${errors.career2 ? 'is-invalid' : ''}`} 
                        {...register('career2')} 
                        />
                        <div className="invalid-feedback position-absolute">{errors.career2?.message}</div>
                    </div>
                    {/* div institucion 1 */}
                    <div className="form-group md:col-span-2 required mt-5 position-relative">
                        <label className="control-label position-absolute mb-5 font-[300] text-custom-color">Nombre institución 2:</label>
                        <input
                        name="institution1"
                        type="text"
                        required
                        className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 bg-custom-color ${errors.institution2 ? 'is-invalid' : ''}`} 
                        {...register('institution2')} 
                        />
                        <div className="invalid-feedback position-absolute">{errors.institution2?.message}</div>
                    </div>
                    {/* div tipo institución 1 */}
                    <div className="form-group md:col-span-2 mt-5 required position-relative">
                        <label className="control-label position-absolute mb-5 text-custom-color">Tipo institución 2</label>
                        <select 
                            required
                            className={`form-control position-absolute w-80 md:w-5/6 h-10 px-4 pt-2 rounded-md border-2 border-custom-color mt-5 bg-custom-color ${errors.typeschool2 ? 'is-invalid' : ''}`} 
                            {...register('typeschool2')}>
                                <option selected value="escuela2">Escuela Básica</option>
                                <option value="liceo2">Liceo</option>
                                <option value="ip2">Instituto Profesional</option>
                                <option value="universidad2">Universidad</option>
                                <option value="bootcamp2">Bootcamp o diplomado</option>
                        </select>
                        <div className="invalid-feedback position-absolute">{errors.typeschool2?.message}</div>
                    </div>

                </div>

                {/* div situacion educacional */}
                <div className="form-group required mt-5 position-relative">
                    <label className="control-label position-absolute mb-5 text-custom-color">¿Cuál es tu situación educacional actual (Bootcamp, diplomados, universidad, cursos u otros)?</label>
                    <select 
                        required
                        className={`form-control position-absolute w-5/6 md:w-4/6 h-10 px-4 pt-2 rounded-md border-2 border-custom-color mt-5 bg-custom-color ${errors.studies ? 'is-invalid' : ''}`} 
                        {...register('studies')}>
                            <option value="collegedegree">Egresado liceo</option>
                            <option value="universitydegree">Egresado Universidad</option>
                            <option value="bootcampdegree">Egresado Bootcamp</option>
                            <option value="courses">Cursos</option>
                        </select>
                    <div className="invalid-feedback position-absolute">{errors.studies?.message}</div>
                </div>
                {/* div nivel de ingles */}
                <div className="form-group required mt-5 position-relative">
                    <label className="control-label position-absolute mb-5 text-custom-color">¿Cuál es tu nivel de inglés? <br /></label>
                    <select 
                        required
                        className={`form-control position-absolute w-5/6 md:w-4/6 h-10 px-4 pt-2 rounded-md border-2 border-custom-color mt-5 bg-custom-color ${errors.english ? 'is-invalid' : ''}`} 
                        {...register('english')}>
                            <option value="basic">Básico</option>
                            <option value="intermediate">Intermedio</option>
                            <option value="advanced">Avanzado</option>
                            <option value="native">Nativo</option>
                        </select>
                    <div className="invalid-feedback position-absolute">{errors.english?.message}</div>
                </div>
            </form>
        </div>
              
        </>
    )
}

export default EducationalBackgroundForm;