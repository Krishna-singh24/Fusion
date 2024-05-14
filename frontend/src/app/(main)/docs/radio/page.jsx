'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Radio = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">Radio</h4>
         <p class="mb-2 text-gray-500 dark:text-gray-400 ">Radio buttons are used to allow users to select one option from a set. They are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. </p>
         
      </div>
      <br />
      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Import the Radio component</p>
        <br />
        <CopyBlock
          text={` 
            import {Radio} from './components/Radio'
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
      </div>
      <br />

      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Use the Radio component</p>
        <br />
        <CopyBlock
          text={` 
          <Radio name='gender' label='Male'/>
          <Radio name='gender' label='Female'/>
           `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        <img src="/radio/ex1.png" alt="" />
      </div>
    </div>
  )
}

export default Radio
