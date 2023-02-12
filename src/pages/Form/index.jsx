import React from 'react';
import axios from 'axios';
import '../../styles/Header.css';
import { Form, Formik } from 'formik';
import {
  FormExplain,
  UserProfileForm,
  EducationalBackgroundForm,
  WorkProfileForm,
  WorkExperienceForm,
  JobLookingForm,
} from './components';
import { initialValues } from './components/data/initialValues';
import { validationAplicationForm } from '../../utils/validationSchemas';

const FormLooking = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationAplicationForm}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ touched, errors, values }) => (
        <Form>
          {console.log(values)}
          <FormExplain />
          <UserProfileForm errors={errors} touched={touched} />
          <EducationalBackgroundForm errors={errors} touched={touched} />
          <WorkProfileForm errors={errors} touched={touched} />
          <WorkExperienceForm errors={errors} touched={touched} />
          <JobLookingForm errors={errors} touched={touched} />
          <div className='mt-3'>
            <button type='submit' className='btn btn-primary'>
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormLooking;
