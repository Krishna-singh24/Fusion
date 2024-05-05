'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Input = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl md:text-3xl font-bold pb-2.5" >Input</h2>
        <p className="text-sm md:text-lg lg:text-xl font-serif">Inputs are UI components that enable users to interact with a form. They allow users to enter text, select a choice, or toggle a switch.</p>
      </div>
      <br />
      <div>
        <p className="text-sm md:text-lg lg:text-xl font-serif">Import the Input component</p>
        <br />
        <CopyBlock
          text={` 
            import Input from './components/Input'
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
      </div>
      <br />
      <div>
        <p className="text-sm md:text-lg lg:text-xl font-serif">Basic Input</p>
        <br />
        <CopyBlock
          text={` 
            <Input variant='outlined' label='Some label' />
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        <br />
        <img src="/input/example1.png" alt=" input image" />
      </div>
    </div>
  )
}

export default Input
