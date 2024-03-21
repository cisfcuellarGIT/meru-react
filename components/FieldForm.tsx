import React from 'react'
import { showError } from '@/lib/helpers/errors'

export default function FieldForm(
  { label, property, defaultValue, register, validations, errors, errorTypes }:
  {
    label: string,
    property: string,
    defaultValue: string | number,
    register: any,
    validations: any
    errors: any,
    errorTypes: Record<string, string>
  }
) {
  const errorDiv = showError(errors, errorTypes, property)
  return(
    <div>
      <label className='block text-sm font-medium leading-6 text-gray-900'>{label}</label>
      {errorDiv && errorDiv}
      <input
  defaultValue={defaultValue}
  {...register(property, validations)}
  className="block w-full px-4 py-2 rounded-md bg-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 shadow-sm"
/>
    </div>
  )
}
