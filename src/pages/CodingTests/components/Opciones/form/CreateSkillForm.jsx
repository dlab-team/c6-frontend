import React, { useContext } from 'react';

import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ImWarning } from 'react-icons/im';
import { useFetch } from '../../../../../CustomHooks/useAxiosFetch';
import SelectField from '../../../../Form/components/Select-field/SelectField';
import { AuthContext } from '../../../../../Context/AuthContext';

const CreateSkillForm = ({ setOpenModal }) => {
  const { token } = useContext(AuthContext);
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  const initialSkill = {
    name: '',
    skillTypeId: '',
  };

  const skillSchema = Yup.object().shape({
    name: Yup.string().required('Campo obligatorio'),
    skillTypeId: Yup.string().required('Campo obligatorio'),
  });

  const { data: skillTypesData, isLoading: skillTypesLoading } = useFetch(
    process.env.REACT_APP_BACKEND_URL + '/skilltype'
  );

  const skilltypes =
    skillTypesData &&
    skillTypesData.map((skilltype) => ({
      value: skilltype.id,
      label: skilltype.name,
    }));

  return (
    <div>
      <Formik
        initialValues={initialSkill}
        //validationSchema={skillSchema}
        onSubmit={async (values) => {
          const url = process.env.REACT_APP_BACKEND_URL + '/skills';
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
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Nombre del test"
                className="w-80 h-10 px-4 rounded-md border border-gray-300"
              />
              {errors.nombre && touched.nombre && (
                <span className="flex items-center gap-1 text-error italic text-sm mb-1">
                  <ImWarning />
                  {errors.nombre}
                </span>
              )}
            </div>
            <div className="h-[4.5rem]">
              <Field
                id="skillTypeId"
                name="skillTypeId"
                component={SelectField}
                options={skilltypes}
                placeholder="Tipo de Skill"
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
                Crear Habilidad
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateSkillForm;
