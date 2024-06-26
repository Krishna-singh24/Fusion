'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const TextArea = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">TextArea</h4>
         <p class="mb-2 text-gray-500 dark:text-gray-400 ">TextArea is a utility class that allows you to create a text area layout that is responsive and easy to use.  </p>
      </div>

      <br />
      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Import the Textarea component</p>
        <br />
        <CopyBlock
          text={` 
            import {Textarea} from './components/Textarea'
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        <br />
        
        
      </div>
      <br />

      <div style={{border:'1px solid gray'}} className=' bg-gray-200 p-4 md:w-1/2 lg:w-1/3"'>
        <p class="text-lg md:text-xl lg:text-2xl font-serif"> A basic Textarea</p>
        <br />
        <CopyBlock
          text={` 
          <Textarea label='Some label' />
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        <br />
        <img src="/textarea/example1.png" alt="" />
      </div>
    </div>
  )
}

export default TextArea
