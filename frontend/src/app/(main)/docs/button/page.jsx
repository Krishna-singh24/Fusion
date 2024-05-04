'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'


const Button = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl md:text-3xl font-bold pb-2.5" >Button</h2>
        <p className="text-sm md:text-lg lg:text-xl font-serif">Buttons are used to initialize an action, either in the background or foreground of an experience.</p>
        <br />
        <p className="text-sm md:text-lg lg:text-xl font-serif">Import the Button component</p>
        <br />
        <CopyBlock
            text={` 
            import Button from './components/Button
             `}
            language={'bash'}
            theme={dracula}
            wrapLines
          />
          <br />
        <div>
           <p className="text-sm md:text-lg lg:text-xl font-serif">Exapmle 1</p>
          <CopyBlock
            text={` 
          <Button  color='secondary' size='lg' > Button</Button>
             `}
            language={'bash'}
            theme={dracula}
            wrapLines
          />
          <img src="/button/buttonex1.png" alt="" />
        </div>
        <p className="text-sm md:text-lg lg:text-xl font-serif">Exapmle 2</p>
        <CopyBlock
            text={` 
            <Button  color='success' size='md'> Button</Button>
             `}
            language={'bash'}
            theme={dracula}
            wrapLines
          />
          <img src="/button/example2.png"  alt="" />
      </div>
    </div>
  )
}

export default Button
