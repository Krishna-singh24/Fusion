import clsx from 'clsx'
import React from 'react'
import { tailwindThemeClasses } from '../theme'


interface ContainerProps {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, style, size = "2xl" }) => {
  return (
    <div style={style} className={
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