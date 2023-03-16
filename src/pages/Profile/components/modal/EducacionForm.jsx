import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ImWarning } from 'react-icons/im';
import { useFetch } from '../../../../CustomHooks/useAxiosFetch';
import SelectField from '../../../Form/components/Select-field/SelectField';
import { AuthContext } from '../../../../Context/AuthContext';
import { Profile } from '../../index';

const EditStudiesForm = ({ setOpenModal, studies }) => {
  const [allStudies, setAllStudies] = useState(studies);

  const { token } = useContext(AuthContext);
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  const initialSkill = {
    name: '',
    institutionId: '',
  };

  const institutionsSchema = Yup.object().shape({
    name: Yup.string().required('Campo obligatorio'),
  });

  const { data: institutionsData, isLoading: institutionsLoading } = useFetch(
    process.env.REACT_APP_BACKEND_URL + '/institutions'
  );

  const institutions =
    institutionsData &&
    institutionsData.map((institutions) => ({
      value: institutions.id,
      label: institutions.name,
    }));

  const { data: institutionTypeData, isLoading: institutionTypeLoading } =
    useFetch(process.env.REACT_APP_BACKEND_URL + '/institutionstype');

  const institutionsType =
    institutionTypeData &&
    institutionTypeData.map((institutionstype) => ({
      value: institutionstype.id,
      label: institutionstype.name,
    }));

  return (
    <div>
      <Formik
        initialValues={initialSkill}
        onSubmit={async (values) => {
          const newStudy = {
            name: values.name,
            institutionId: Number(values.institutionId),
          };
          const dataStudies = { studies: [...studies, newStudy] };
          const url = process.env.REACT_APP_BACKEND_URL + '/profiles/studies';
          await axios
            .put(url, dataStudies, config)
            .then((res) => {
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {({ touched, errors }) => (
          <Form className="flex flex-col -mb-5">
            <div className="h-[4.5rem] mt-5">
              <p className="mb-1">Nombre de la carrera, curso o bootcamp:</p>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Nombre de la carrera"
                className="w-80 h-10 px-4 rounded-md border border-gray-300 mb-2"
              />
              {errors.nombre && touched.nombre && (
                <span className="flex items-center gap-1 text-error italic text-sm mb-1">
                  <ImWarning />
                  {errors.nombre}
                </span>
              )}
            </div>
            <div className="h-[4.5rem] mt-1">
              <p className="-mb-3">Tipo de institución:</p>
              <div className="h-[4.5rem]">
                <Field
                  id="name"
                  name="type"
                  as="select"
                  placeholder="Institución"
                  className="w-80 h-10 mt-4 px-4 rounded-md border border-gray-300"
                >
                  <>
                    {institutionsType &&
                      institutionsType.map((institutionType) => (
                        <option
                          key={institutionType.label}
                          value={institutionType.value}
                        >
                          {institutionType.label}
                        </option>
                      ))}
                  </>
                </Field>
              </div>
              {errors.nombre && touched.nombre && (
                <span className="flex items-center gap-1 text-error italic text-sm mb-1">
                  <ImWarning />
                  {errors.nombre}
                </span>
              )}
            </div>
            <div className="h-[4.5rem]">
              <p className="-mb-3 mt-3">Nombre institución:</p>
              <div className="h-[4.5rem]">
                <Field
                  id="institutionId"
                  name="institutionId"
                  as="select"
                  placeholder="Tipo de Institución"
                  className="w-80 mt-4 h-10 px-4 rounded-md border border-gray-300 mb-1"
                >
                  <>
                    {institutions &&
                      institutions.map((institution) => (
                        <option
                          key={institution.label}
                          value={institution.value}
                        >
                          {institution.label}
                        </option>
                      ))}
                  </>
                </Field>
              </div>
              {errors.password && touched.password && (
                <span className="flex items-center gap-1 text-error italic text-sm">
                  <ImWarning />
                  {errors.password}
                </span>
              )}
            </div>

            <div className="h-20">
              <button
                type="submit"
                className="w-80 h-10 bg-[#2738F5] text-white rounded-md mt-20"
              >
                Guardar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditStudiesForm;
