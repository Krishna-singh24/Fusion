import React from 'react'
import clsx from 'clsx';
import { tailwindThemeClasses } from '../../themes/themes';

interface ButtonProps {
  children: React.ReactNode
  variant?: 'filled' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark' | undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  padding?: 'xs' | 'sm' | undefined
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  fullWidth?: boolean
  className?: string
  onClick?: () => void
}


const Button = ({
  children,
  variant = 'filled',
  color = 'primary',
  size = 'md',
  type = "submit",
  disabled = false,
  radius = 'md',
  fullWidth = false,
  className = "",
  onClick = () => { }
}: ButtonProps) => {

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(className,
        tailwindThemeClasses.backgroundColors[color],
        tailwindThemeClasses.buttonPaddings[size],
        tailwindThemeClasses.textSizes[size],
        tailwindThemeClasses.radius[radius],
        fullWidth && "w-full",
        "text-white focus:ring-4 focus:outline-none")}>
      {children}
    </button>
  )
}

export default Button
