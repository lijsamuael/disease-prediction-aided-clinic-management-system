import React from 'react';
import { ErrorMessage, useField } from 'formik';

export default function TextField({ label, ...props }){
  const [field, meta] = useField(props);
  return (
<div className="mb-2">
  <label htmlFor={field.name} className="block">{label}</label>
  <input
    className={`border-2 w-full border-gray-300 p-2 focus:outline-none focus:border-blue-500 ${meta.touched && meta.error && 'border-red-500'}`}
    {...field} {...props}
    value={props.value}
    onChange={props.onChange}
    autoComplete="off"
  />
  <ErrorMessage component="div" name={field.name} className="text-red-500" />
</div>
  )
}