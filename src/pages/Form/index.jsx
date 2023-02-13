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
import { transformInitialSkills } from '../../utils';

const FormLooking = () => {
  return (
    <Formik
      initialValues={initialValues}
      //validationSchema={validationAplicationForm}
      onSubmit={async (values) => {
        const initialSkills = values.workProfile.skills;
        const skills = transformInitialSkills(initialSkills);

        const newData = {
          profile: values.profile,
          educationProfile: values.educationalProfile,
          workProfile: {
            //softSkills: values.workProfile.softSkills,
            employmentSituation: values.workProfile.employmentSituation,
            cvUrl: values.workProfile.cvUrl,
            linkedinUrl: values.workProfile.linkedinUrl,
            githubUrl: values.workProfile.githubUrl,
            websiteUrl: values.workProfile.websiteUrl,
            projectDescription: values.workProfile.projectDescription,
            yearsOfExperiencie: parseInt(values.workProfile.yearsOfExperiencie),
            dreamJobDescription: values.workProfile.dreamJobDescription,
            availability: values.workProfile.availability,
            locationAvailable: values.workProfile.locationAvailable,
            workVisa: values.workProfile.workVisa,
            charges: values.workProfile.charges,
            skills: (values.workProfile.skills = skills),
          },
        };

        console.log(newData);
        console.log(values);//este tiene years of experience en string
        const url = process.env.REACT_APP_BACKEND_URL + '/profiles';
        await axios
          .post(url, values)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {({ touched, errors, values }) => (
        <Form>
          <FormExplain />
          <UserProfileForm errors={errors} touched={touched} />
          <EducationalBackgroundForm
            errors={errors}
            touched={touched}
            values={values}
          />
          <WorkProfileForm errors={errors} touched={touched} values={values} />
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
