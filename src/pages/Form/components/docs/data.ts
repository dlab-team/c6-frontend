export interface LanguageOptions {
    readonly value: string;
    readonly label: string;
  }
  
  export const languageOptions: readonly LanguageOptions[] = [
    { value: 'python', label: 'Python' },
    { value: 'js', label: 'JavaScript' },
    { value: 'html', label: 'HTML/CSS' },
  ];

export interface FrameworkOptions {
    readonly value: string;
    readonly label: string;
  }
  
  export const frameworkOptions: readonly FrameworkOptions[] = [
    { value: 'oracle', label: 'Oracle' },
    { value: 'cassandra', label: 'Cassandra' },
    { value: 'sqlite', label: 'SQLite' },
  ];
  
export interface ToolOptions {
    readonly value: string;
    readonly label: string;
  }
  
  export const toolOptions: readonly ToolOptions[] = [
    { value: 'github', label: 'GitHub' },
    { value: 'illustrator', label: 'Adobe Illustrator' },
    { value: 'photoshop', label: 'Adobe Photoshop' },
  ];
  
export interface SkillOptions {
    readonly value: string;
    readonly label: string;
  }
  
  export const skillOptions: readonly SkillOptions[] = [
    { value: 'lider', label: 'Líder' },
    { value: 'resiliente', label: 'Resiliente/Perseverante' },
    { value: 'colaborativo', label: 'Colaborativo/Empatía' },
  ];
  
export interface AvailabilityOptions {
    readonly value: string;
    readonly label: string;
  }
  
  export const availabilityOptions: readonly AvailabilityOptions[] = [
    { value: 'full', label: 'Full Time' },
    { value: 'part', label: 'Part Time' },
    { value: 'freelance', label: 'Freelancer' },
  ];
  
export interface WantedOptions {
    readonly value: string;
    readonly label: string;
  }
  
  export const wantedOptions: readonly WantedOptions[] = [
    { value: 'actualcity', label: 'Quiero trabajo desde mi ciudad actual' },
    { value: 'actualcountry', label: 'Estoy disponible para migrar de mi ciudad dentro de mi país' },
    { value: 'canmigrate', label: 'Estoy disponible para migrar a otro país' },
  ];
  
export interface VisaOptions {
    readonly value: string;
    readonly label: string;
  }
  
  export const visaOptions: readonly VisaOptions[] = [
    { value: 'usa', label: 'Estados Unidos' },
    { value: 'ue', label: 'Unión Europea' },
    { value: 'mycountry', label: 'Mi país de residencia actual' },
    { value: 'anothercountry', label: 'Otros países' },
  ];

export interface GenderOptions {
    readonly value: string;
    readonly label: string;
  }
  
  export const genderOptions: readonly GenderOptions[] = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Femenino' },
    { value: 'noanswer', label: 'Prefiero no decir' },
  ];
  