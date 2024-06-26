'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const page = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">Select</h4>
         <p class="mb-2 text-gray-500 dark:text-gray-400 ">Select is a utility class that allows you to create a select layout that is responsive and easy to use.  </p>
      </div>
      <br />
      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Import the Select component</p>
        <br />
        <CopyBlock
          text={` 
            import {Select} from './components/Select'
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        
      </div>
      <br />

      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Use the Select component</p>
        <br />
        <CopyBlock
          text={` 
          <Select options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' }
          ]} onChange={(value) => console.log(value)} />
           `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        <img src="/select/ex1.png" alt="" />
      </div>
    </div>
  )
}

export default page
