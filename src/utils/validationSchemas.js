import * as Yup from 'yup';

export const validationAplicationForm = Yup.object().shape({
  //Profile
  profile: Yup.object({
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
    cityId: Yup.number().required('Seleccion una opción del menú desplegable.'),
    gender: Yup.string().required(
      'Selecciona una opción del menú desplegable.'
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
