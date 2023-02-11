import React from 'react'
import Select from 'react-select'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import "../../../../styles/UserForms.css"
import { useFetch } from '../../../../CustomHooks/useAxiosFetch';

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

      const {data: languagesData, isLoading: languagesLoading} = useFetch( process.env.REACT_APP_BACKEND_URL + '/skills/1');
      const languages =languagesData && languagesData.map((languages) => ({
          value: languages.name,
          label: languages.name
      }));

      const {data: frameworksData, isLoading: frameworksLoading} = useFetch( process.env.REACT_APP_BACKEND_URL + '/skills/2');
      const frameworks = frameworksData && frameworksData.map((framework) => ({
          value: framework.name,
          label: framework.name
      }));
      
      const {data: toolsData, isLoading: toolsLoading} = useFetch( process.env.REACT_APP_BACKEND_URL + '/skills/3');
      const tools = toolsData && toolsData.map((tools) => ({
          value: tools.name,
          label: tools.name
      }));

    return(
        <>
        <div className="bg-[#FFFFFF] rounded-2xl w-screen md:mx-20 mt-5 pt-10">
            <h1 className="mx-8 md:mx-20 mt-10 mb-10 text-center md:text-left font-[600] text-[32px] text-[#140B34]">
                PERFIL LABORAL
            </h1>
            <p className="mx-8 md:mx-20 mb-10 text-left w-80 md:w-5/6 font-[400] text-[18px] leading-9 text-custom-color mt-5">
            Queremos conocer tus competencias y experiencia. A continuación podrás elegir las competencias que conoces con respecto a 3 niveles: <br />
            
            <br /><strong>Nivel 1:</strong> No tengo experiencia laboral, pero he desarrollado proyectos utilizado esta tecnología/herramienta. <br />
            
            <br /><strong>Nivel 2:</strong> Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante. <br />
            
            <br /><strong>Nivel 3:</strong> Tengo experiencia laboral (+2 años) y/o autonomía completa a la hora de desarrollar proyectos. <br />
            
            <br /><strong>Ten en cuenta, de acuerdo a las competencias declaradas, te pediremos que seas capaz de demostrarlo de forma práctica durante el proceso de selección.</strong>
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-8 md:mx-20">
                <p className="col-span-1 md:col-span-3 mt-10 mb-10 text-left w-80 md:w-5/6 font-[400] text-[20px] leading-9 text-custom-color">
                    <br /><strong>Indícanos tus conocimientos a Nivel 1 </strong> (No tengo experiencia laboral, pero he desarrollado proyectos utilizado esta tecnología/herramienta):
                </p>
                {/* div lenguajes 1 */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]">Lenguaje nivel 1:</label>
                    <div>
                        <Select 
                            isMulti
                            name="languages1"
                            options={languages}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.languages1 ? 'is-invalid' : ''}`} 
                            {...register('languages1')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.languages1?.message}</div>
                </div>
                {/* div frameworks 1 */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]">Bases o frameworks nivel 1:</label>
                    <div>
                        <Select 
                            isMulti
                            name="frameworks1"
                            options={frameworks}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.frameworks1 ? 'is-invalid' : ''}`} 
                            {...register('frameworks1')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.frameworks1?.message}</div>
                </div>
                {/* div tools 1 */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]">Herramientas nivel 1:</label>
                    <div>
                        <Select 
                            isMulti
                            name="tools1"
                            options={tools}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.tools1 ? 'is-invalid' : ''}`} 
                            {...register('tools1')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.tools1?.message}</div>
                </div>
                {/* div nivel 2 */}
                <p className="col-span-1 md:col-span-3 mt-10 mb-10 text-left w-80 md:w-5/6 font-[400] text-[20px] leading-9 text-custom-color">
                    <br /><strong>Indícanos tus conocimientos a Nivel 2 </strong> (Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante):
                </p>
                {/* div lenguajes 2 */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]">Lenguaje nivel 2:</label>
                    <div>
                        <Select 
                            isMulti
                            name="languages2"
                            options={languages}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.languages2 ? 'is-invalid' : ''}`} 
                            {...register('languages1')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.languages2?.message}</div>
                </div>
                {/* div frameworks 2 */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]">Bases o frameworks nivel 2:</label>
                    <div>
                        <Select 
                            isMulti
                            name="frameworks2"
                            options={frameworks}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.frameworks2 ? 'is-invalid' : ''}`} 
                            {...register('frameworks2')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.frameworks2?.message}</div>
                </div>
                {/* div tools 2 */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]">Herramientas nivel 2:</label>
                    <div>
                        <Select 
                            isMulti
                            name="tools2"
                            options={tools}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.tools2 ? 'is-invalid' : ''}`} 
                            {...register('tools2')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.tools2?.message}</div>
                </div>
                {/* div nivel 3 */}
                <p className="col-span-1 md:col-span-3 mt-10 mb-10 text-left w-80 md:w-5/6 font-[400] text-[20px] leading-9 text-custom-color">
                    <br /><strong>Indícanos tus conocimientos a Nivel 3</strong> (tengo experiencia laboral (+2 años) y/o autonomía completa a la hora de desarrollar proyectos):
                </p>
                {/* div lenguajes 3 */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]">Lenguaje nivel 3:</label>
                    <div>
                        <Select 
                            isMulti
                            name="languages3"
                            options={languages}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.languages3 ? 'is-invalid' : ''}`} 
                            {...register('languages3')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.languages3?.message}</div>
                </div>
                {/* div frameworks 3 */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]">Bases o frameworks nivel 3:</label>
                    <div>
                        <Select 
                            isMulti
                            name="frameworks3"
                            options={frameworks}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.frameworks3 ? 'is-invalid' : ''}`} 
                            {...register('frameworks3')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.frameworks3?.message}</div>
                </div>
                {/* div tools 3 */}
                <div className="form-group required position-relative">
                    <label className="control-label position-absolute mb-10 mt-5 text-custom-color font-[500] text-[20px]">Herramientas nivel 3:</label>
                    <div>
                        <Select 
                            isMulti
                            name="tools3"
                            options={tools}
                            className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${errors.tools3 ? 'is-invalid' : ''}`} 
                            {...register('tools3')}
                            classNamePrefix="select"
                        /> 
                    </div>
                    <div className="invalid-feedback position-absolute">{errors.tools3?.message}</div>
                </div>

                {/* div otra */}
                <div className="form-group md:col-span-3 required position-relative mt-10">
                <label className="control-label md:grid-cols-3 position-absolute mb-10 text-left w-80 md:w-5/6 font-[400] text-[18px] leading-9 text-custom-color mt-5">Indícanos alguna otra competencia, herramienta o tecnología que conozcas que creas importante agregar:</label>
                <textarea
                    name="others"
                    rows="5"
                    required
                    className={`form-control w-80 md:w-5/6 h-10 px-4 rounded-md border-2 border-custom-color mt-5 mb-2 h-40 ${errors.others ? 'is-invalid' : ''}`} 
                    {...register('others')} 
                />
                <div className="invalid-feedback position-absolute">{errors.others?.message}</div>
                </div>
                
            </form>
        </div>
              
    </>
    )
}

export default WorkExperienceForm;