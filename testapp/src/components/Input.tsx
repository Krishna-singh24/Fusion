import React from 'react'
import { tailwindThemeClasses } from '../theme'

interface InputProps{
  variant?:'default'|'filled'|'unstyled'
  padding?:'xs'|'sm'
  radius?:'xs'|'sm'|'md'|'lg'|'xl'
}

const Input = ({variant='filled',padding='xs',radius='xs'}:InputProps) => {
  return (
    <div>

   <input 
   style={{padding:tailwindThemeClasses.paddings[padding]}}
   type="text" id="disabled-input" aria-label="disabled input" className="mb-6 bg-white-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
    
     
    </div>
  )
}

export default Input
