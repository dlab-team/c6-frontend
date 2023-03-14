import React, { useContext, useState } from 'react';
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
import { ModalCustomMessage } from '../../components';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const FormLooking = () => {
  const { user } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  //document.body.style.overflow = `${openModal ? 'hidden' : 'visible'}`;

  const initialFormValues = {
    ...initialValues,
    profile: {
      ...initialValues.profile,
      email: user?.email || '',
      fullName: user?.name || '',
    },
  };

  return (
    <>
      {openModal && (
        <ModalCustomMessage setOpenModal={setOpenModal} message={message} />
      )}
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationAplicationForm}
        onSubmit={async (values) => {
          const initialSkills = values.workProfile.skills;
          const skills = transformInitialSkills(initialSkills);

          const newData = {
            profile: values.profile,
            educationProfile: values.educationalProfile,
            workProfile: {
              employmentSituation: values.workProfile.employmentSituation,
              cvUrl: values.workProfile.cvUrl,
              linkedinUrl: values.workProfile.linkedinUrl,
              githubUrl: values.workProfile.githubUrl,
              websiteUrl: values.workProfile.websiteUrl,
              projectDescription: values.workProfile.projectDescription,
              yearsOfExperiencie: values.workProfile.yearsOfExperiencie,
              dreamJobDescription: values.workProfile.dreamJobDescription,
              availability: values.workProfile.availability,
              locationAvailable: values.workProfile.locationAvailable,
              workVisa: values.workProfile.workVisa,
              charges: values.workProfile.charges,
              skills: (values.workProfile.skills = skills),
            },
          };
          const url = process.env.REACT_APP_BACKEND_URL + 'profiles';
          await axios
            .post(url, values)
            .then((res) => {
              if (res.status === 200) {
                setOpenModal(true);
                setMessage(res.data.message);
              } else {
                setOpenModal(true);
                setMessage(res.data.message);
                window.location.reload();
              }
            })
            .then(
              setTimeout(() => {
                setOpenModal(false);
                navigate('/');
              }, 2000)
            )
            .catch((err) => {
              setOpenModal(true);
              setMessage('Ups algo pasó');
              throw err;
            });
        }}
      >
        {({ touched, errors, values, isValid, isSubmitting }) => (
          <Form>
            {console.log(values)}
            <FormExplain />
            <UserProfileForm
              errors={errors}
              touched={touched}
              setOpenModal={setOpenModal}
            />
            <EducationalBackgroundForm
              errors={errors}
              touched={touched}
              values={values}
            />
            <WorkProfileForm
              errors={errors}
              touched={touched}
              values={values}
            />
            <WorkExperienceForm errors={errors} touched={touched} />
            <JobLookingForm
              errors={errors}
              touched={touched}
              isValid={isValid}
              isSubmitting={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormLooking;
