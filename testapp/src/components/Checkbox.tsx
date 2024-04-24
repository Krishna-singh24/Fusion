import clsx from 'clsx';
import React from 'react';
import { tailwindThemeClasses } from '../theme';

interface CheckboxProps {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark' | undefined
  label?: string
}

const Checkbox = ({label, name, size="md", color="primary"}: CheckboxProps) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" name={name} id={name} className={clsx( 
        tailwindThemeClasses.checkboxsizes[size],
        tailwindThemeClasses.textcolor[color],
        tailwindThemeClasses.borderColors[color],
        "border rounded-sm focus:outline-none")} />
      <label htmlFor={name} className="ml-2 text-sm text-gray-700">{label}</label>
    </div>
  )
}

export default Checkbox
