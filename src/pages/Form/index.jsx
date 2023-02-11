import React from 'react';
import logo from '../../assets/images/Logo-horizontal.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Header.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Header } from '../../components';
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
      onSubmit={(values) => console.log(values)}
    >
      {({ touched, errors, values}) => (
        <form>
          {console.log(values)}
          <FormExplain />
          <UserProfileForm errors={errors} />
          {/*<EducationalBackgroundForm />
          <WorkProfileForm />
          <WorkExperienceForm />
      <JobLookingForm />*/}
        </form>
      )}
    </Formik>
  );
};

export default FormLooking;
