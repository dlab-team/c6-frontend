import React from 'react';
import logo from '../../assets/images/Logo-horizontal.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Header.css';
import { useFormik } from 'formik';
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

const FormLooking = () => {
  return (
    <>
      <FormExplain />
      <UserProfileForm />
      <EducationalBackgroundForm />
      <WorkProfileForm />
      <WorkExperienceForm />
      <JobLookingForm />
    </>
  );
};

export default FormLooking;
