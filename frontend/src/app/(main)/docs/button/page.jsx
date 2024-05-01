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
        <div>

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
        <CopyBlock
            text={` 
            <Button  color='success' size='md' variant='outlined'> Button</Button>
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
