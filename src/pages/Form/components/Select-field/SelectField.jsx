import Select from 'react-select';
import React from 'react';

function SelectField({ field, options, form, errors, handleCities }) {
  const handleSelect = (option) => {
    form.setFieldValue(field.name, option.value);
    handleCities && handleCities(option.value);
  };
  return (
    <>
      <Select
        className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${
          errors ? 'is-invalid' : ''
        }`}
        options={options}
        name={field.name}
        value={
          options ? options.find((option) => option.value === field.value) : ''
        }
        onChange={handleSelect}
        onBlur={field.onBlur}
      />
      <div className='invalid-feedback position-absolute'>
        {errors}
      </div>
    </>
  );
}

export default SelectField;
