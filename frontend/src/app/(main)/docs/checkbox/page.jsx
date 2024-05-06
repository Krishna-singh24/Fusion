'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Checkbox = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">Checkbox</h4>
         <p class="mb-2 text-gray-500 dark:text-gray-400 ">Checkboxes are used to allow the user to select one or more items from a set of choices.</p>
        
      </div>
      <br />
      <div>
      <p className="text-sm md:text-lg lg:text-xl font-serif">Import the Checkbox component</p>
        <br />
        <CopyBlock
            text={` 
            import Checkbox from './components/Checkbox'
             `}
            language={'bash'}
            theme={dracula}
            wrapLines
          />
      </div>
        
      
    </div>
  )
}

export default Checkbox
