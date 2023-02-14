import * as Yup from 'yup';

export const validationAplicationForm = Yup.object().shape({
  //Profile
  profile: Yup.object().shape({
    fullName: Yup.string().required('Rellena este campo obligatorio.'),
    email: Yup.string()
      .required('Rellena este campo obligatorio.')
      .email('Formato de correo electrónico incorrecto.'),
    phone: Yup.string()
      .required('Rellena este campo obligatorio')
      .min(9, 'Largo de número telefónico incorrecto.'),
    country: Yup.number().required(
      'Selecciona una opción del menú desplegable.'
    ),
    cityId: Yup.number().required('Selecciona una opción del menú desplegable.'),
    gender: Yup.string().required(
      'Selecciona una opción del menú desplegable.'
    ),
  }),
  educationalProfile: Yup.object().shape({
    educationalLevel: Yup.string().required(
      'Selecciona una opción del menú desplegable.'
    ),
    currentlyEducationalSituation: Yup.string().required(
      'Selecciona una opción del menú desplegable.'
    ),
    englishLevel: Yup.string().required(
      'Selecciona una opción del menú desplegable.'
    ),
    anotherSkills: Yup.string().required('Rellena este campo obligatorio.'),
    studies: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Rellena este campo obligatorio.'),
        institution: Yup.object().shape({
          name: Yup.string().required(
            'Selecciona una opción del menú desplegable.'
          ),
          institutionTypeId: Yup.number().required(
            'Selecciona una opción del menú desplegable.'
          ),
        }),
      }),
      Yup.object().shape({
        name: Yup.string().required('Rellena este campo obligatorio.'),
        institution: Yup.object().shape({
          name: Yup.string().required(
            'Selecciona una opción del menú desplegable.'
          ),
          institutionTypeId: Yup.number().required(
            'Selecciona una opción del menú desplegable.'
          ),
        }),
      })
    ),
  }),
  workProfile: Yup.object().shape({
    //softSkills:'',
    employmentSituation: Yup.string().required(
      'Selecciona una opción del menú.'
    ),
    cvUrl: Yup.string().required('Rellena este campo obligatorio.'),
    linkedinUrl: Yup.string().required('Rellena este campo obligatorio.'),
    githubUrl: Yup.string().required('Rellena este campo obligatorio.'),
    websiteUrl: Yup.string().required('Rellena este campo obligatorio.'),
    projectDescription: Yup.string().required(
      'Rellena este campo obligatorio.'
    ),
    yearsOfExperiencie: Yup.string().required(
      'Selecciona una opción del menú.'
    ),
    dreamJobDescription: Yup.string().required(
      'Rellena este campo obligatorio.'
    ),
    availability: Yup.string().required(
      'Selecciona una opción del menú desplegable.'
    ),
    locationAvailable: Yup.string().required('Selecciona una opción del menú.'),
    workVisa: Yup.string().required(
      'Selecciona una opción del menú desplegable.'
    ),
    charges: Yup.array().required('Selecciona al menos una opción.'),
    skills: Yup.array().of(
      Yup.object().shape({
        skill1: Yup.array().required('Selecciona al menos una opción.'),
        frameworks1: Yup.array().required('Selecciona al menos una opción.'),
        tools1: Yup.array().required('Selecciona al menos una opción.'),
        skill2: Yup.array().required('Selecciona al menos una opción.'),
        frameworks2: Yup.array().required('Selecciona al menos una opción.'),
        tools2: Yup.array().required('Selecciona al menos una opción.'),
        skill3: Yup.array().required('Selecciona al menos una opción.'),
        frameworks3: Yup.array().required('Selecciona al menos una opción.'),
        tools3: Yup.array().required('Selecciona al menos una opción.'),
      })
    ),
  }),

  // employmentSituation: Yup.string().required('Selecciona una opción.'),
  // charges: Yup.array().required('Selecciona al menos una opción.'),
  // // //Educational backrgroud
  // educationalLevel: Yup.string().required(
  //   'Selecciona una opción del menú desplegable.'
  // ),
  // name1: Yup.string().required('Rellena este campo obligatorio.'),
  // institution1: Yup.string().required('Rellena este campo obligatorio.'),
  // institutionTypeId1: Yup.number().required('Selecciona al menos una opción.'),
  // name2: Yup.string().required('Rellena este campo obligatorio.'),
  // institution2: Yup.string().required('Rellena este campo obligatorio.'),
  // institutionTypeId2: Yup.number().required('Selecciona al menos una opción.'),
  // studies: Yup.string().required('Selecciona al menos una opción.'),
  // englishLevel: Yup.string().required('Selecciona al menos una opción.'),
  // //workprofile form
  // skillId1: Yup.array().required('Selecciona una opción del menú desplegable.'),
  // frameworks1: Yup.array().required(
  //   'Selecciona una opción del menú desplegable.'
  // ),
  // tools1: Yup.array().required('Selecciona una opción del menú desplegable.'),
  // skillId2: Yup.array().required('Selecciona una opción del menú desplegable.'),
  // frameworks2: Yup.array().required(
  //   'Selecciona una opción del menú desplegable.'
  // ),
  // tools2: Yup.array().required('Selecciona una opción del menú desplegable.'),
  // skillId3: Yup.array().required('Selecciona una opción del menú desplegable.'),
  // frameworks3: Yup.array().required(
  //   'Selecciona una opción del menú desplegable.'
  // ),
  // tools3: Yup.array().required('Selecciona una opción del menú desplegable.'),
  // anotherSkills: Yup.string().required('Rellena este campo obligatorio.'),
  // //work experience form
  // cvUrl: Yup.string().required('Rellena este campo obligatorio.'),
  // linkedinUrl: Yup.string().required('Rellena este campo obligatorio.'),
  // githubUrl: Yup.string().required('Rellena este campo obligatorio.'),
  // websiteUrl: Yup.string().required('Rellena este campo obligatorio.'),
  // softSkills: Yup.array().required('Rellena este campo obligatorio.'),
  // yearsOfExperiencie: Yup.string().required('Selecciona una opción'),
  // projectDescription: Yup.string().required('Selecciona una opción'),
  // //looking for job
  // dreamJobDescription: Yup.string().required('Rellena este campo obligatorio.'),
  // availability: Yup.array().required(
  //   'Selecciona una opción del menú desplegable.'
  // ),
  // wanted: Yup.string().required('Rellena este campo obligatorio.'),
  // workVisa: Yup.array().required('Rellena este campo obligatorio.'),
});
