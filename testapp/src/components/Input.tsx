import React from 'react'
import { colorClasses, tailwindThemeClasses, variantClass } from '../theme'
import clsx from 'clsx'

interface InputProps {
  color?: 'primary' | 'light' | 'dark' | 'info' | 'danger' | 'warning' | 'success' | 'secondary'
  variant?: 'default' | 'filled' | 'outline'
  padding?: 'xs' | 'sm'
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  id?: string
  label?: string
}

const Input = ({ id, label, disabled = false, color = 'primary', variant = 'filled', size = 'xs', radius = 'xs', type = 'text' }: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        disabled={disabled}
        className={clsx(variantClass(
          variant,
          colorClasses[color],
          'gray-900'
        ), "mb-6 bg-white-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500")} />
    </div>
  )
}

export default Input
