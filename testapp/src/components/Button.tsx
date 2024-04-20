import React from 'react'
import { cssColors } from '../theme'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'filled' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark'
  size: string
}


const Button = ({ children, variant = 'filled', color = 'primary', size, props }: ButtonProps) => {
  return (
    <button
      {...props}
      style={{ backgroundColor: cssColors.colors[color] }}
      className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      {children}
    </button>
  )
}

export default Button
