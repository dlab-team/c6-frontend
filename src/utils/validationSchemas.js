import * as Yup from 'yup';

export const validationAplicationForm = Yup.object().shape({
  name: Yup.string()
          .required('Rellena este campo obligatorio.')
          .min(1, 'Rellena este campo obligatorio.'),
        email: Yup.string().required("Rellena este campo obligatorio.").email("Formato de correo electrónico incorrecto."),
        cellphone: Yup.string().required("Rellena este campo obligatorio").min(9, "Largo de número telefónico incorrecto."),
        country: Yup.string().required("Selecciona una opción del menú desplegable."),
        city: Yup.string().required("Seleccion una opción del menú desplegable."),
        gender: Yup.string().required("Selecciona una opción del menú desplegable."),
        occupation: Yup.string().required("Selecciona una opción."),
        jobs: Yup.string().required("Selecciona al menos una opción."),
});
