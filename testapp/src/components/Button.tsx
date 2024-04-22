import React from 'react'
import { cssColors, tailwindThemeClasses } from '../theme'
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode
  variant?: 'filled' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark' | undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  padding?: 'xs' | 'sm' | undefined
}


const Button = ({ children, variant = 'filled', color = 'primary', padding = 'xs', props }: ButtonProps) => {
  return (
    <button
      {...props}
      style={{  padding: tailwindThemeClasses.paddings[padding] }}
      className={clsx(cssColors.classes[color],"text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm me-2 mb-2 focus:outline-none dark:focus:ring-blue-800")}>
      {children}
    </button>
  )
}

export default Button
