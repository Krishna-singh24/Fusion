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
        <h4 class="text-lg md:text-xl lg:text-2xl font-mono">Usage</h4>
        <p class="mb-2 text-gray-500 dark:text-gray-400 ">Checkbox component is a controlled component, which means that you need to pass the checked prop and the onChange handler to it.</p>
        <br />
        </div>

      <div >
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
          <br />
          <div>
          <p className="text-sm md:text-lg lg:text-xl font-serif">Use the Checkbox component</p>
           <br />
          <CopyBlock
            text={` 
            const checkboxOptions = [
              { label: 'Option 1', value: 'Option 1' },
              { label: 'Option 2', value: 'Option 2' },
              { label: 'Option 3', value: 'Option 3' }
            ];
            
            <Checkbox options={checkboxOptions} onChange={(value) => console.log(value)} />
             `}
            language={'bash'}
            theme={dracula}
            wrapLines
            />
          </div>
      </div>
        
      
    </div>
  )
}

export default Checkbox
