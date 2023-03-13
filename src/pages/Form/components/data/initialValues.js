export const initialValues = {
  //profile
  profile: {
    fullName: '',
    email: '',
    phone: '',
    country: '', //no aparece en data structure
    cityId: '',
    gender: '',
    avatar: 'avatar',
  },
  educationalProfile: {
    educationalLevel: '',
    currentlyEducationalSituation: '',
    englishLevel: '',
    anotherSkills: '',
    studies: [
      {
        name: '',
        institution: {
          name: '',
          institutionTypeId: '',
        },
      },
      {
        name: '',
        institution: {
          name: '',
          institutionTypeId: '',
        },
      },
    ],
  },
  workProfile: {
    //softSkills:'',
    employmentSituation: '',
    cvUrl: '',
    linkedinUrl: '',
    githubUrl: '',
    websiteUrl: '',
    projectDescription: '',
    yearsOfExperiencie: '',
    dreamJobDescription: '',
    availability: '',
    locationAvailable: '',
    workVisa: '',
    charges: '',
    skills: [
      {
        skill1: '',
        frameworks1: '',
        tools1: '',
        skill2: '',
        frameworks2: '',
        tools2: '',
        skill3: '',
        frameworks3: '',
        tools3: '',
        frameworks4: '',
      },
    ],
  },
};
