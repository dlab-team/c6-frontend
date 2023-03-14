import React, { useContext } from 'react';

import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ImWarning } from 'react-icons/im';
import { useFetch } from '../../../../CustomHooks/useAxiosFetch';
import SelectField from '../../../Form/components/Select-field/SelectField';
import { AuthContext } from '../../../../Context/AuthContext';

const ExperienciaForm = ({ setOpenModal }) => {
  const { token } = useContext(AuthContext);
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  const initialSkill = {
    name: '',
    id: '',
  };

  const institutionsSchema = Yup.object().shape({
    name: Yup.string().required('Campo obligatorio'),
    skillTypeId: Yup.string().required('Campo obligatorio'),
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

  const { data: institutionTypeData, isLoading: institutionTypeLoading } = useFetch(
    process.env.REACT_APP_BACKEND_URL + '/institutionstype'
  );
  
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
        //validationSchema={skillSchema}
        onSubmit={async (values) => {
          const url = process.env.REACT_APP_BACKEND_URL + '/institutions';
          await axios
            .post(url, values, config)
            .then((res) => {
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {({ touched, errors }) => (
          <Form className="flex flex-col mt-4">
            <div className="h-[4.5rem]">
              <p className='-mb-3'>Tipo de institución:</p>
              <Field
                id="name"
                name="type"
                component={SelectField}
                options={institutionsType}
                placeholder="Institución"
                className="w-80 h-10 px-4 rounded-md border border-gray-300 mb-1"
              />
              {errors.nombre && touched.nombre && (
                <span className="flex items-center gap-1 text-error italic text-sm mb-1">
                  <ImWarning />
                  {errors.nombre}
                </span>
              )}
            </div>
            <div className="h-[4.5rem]">
              <p className='-mb-3 mt-3'>Nombre institución:</p>
              <Field
                id="name"
                name="name"
                component={SelectField}
                options={institutions}
                placeholder="Tipo de Institución"
                className="w-80 h-10 px-4 rounded-md border border-gray-300 mb-1"
              />
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
                Editar experiencia
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ExperienciaForm;