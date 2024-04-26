import clsx from 'clsx'
import React from 'react'
import { tailwindThemeClasses } from '../theme'


interface ContainerProps {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

const Container = ({ children, size = "2xl" }: ContainerProps) => {
  return (
    <div className={
      clsx(
        tailwindThemeClasses.containerSizes[size],
        'mx-auto'
      )
    }>
      {children}
    </div>
  )
}

export default Container