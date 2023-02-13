import Select from 'react-select';
import React from 'react';

function SelectFieldMulti({ field, options, form, errors }) {
  const handleSelect = (selectedOptions) => {
    form.setFieldValue(
      field.name,
      selectedOptions.map((option) => option.value)
    );
  };
  
  return (
    <Select
      isMulti
      className={`form-control basic-multi-select w-5/6 md:w-4/6 h-10 rounded-md mt-5 text-custom-color ${
        errors ? 'is-invalid' : ''
      }`}
      options={options}
      name={field.name}
      value={
        options
        ? options.filter((option) => field.value?.includes(option.value))
        : []
      }
      onChange={handleSelect}
      classNamePrefix='select'
    />
  );
}

export default SelectFieldMulti;
