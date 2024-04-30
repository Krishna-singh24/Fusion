'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'


const Button = () => {
   return (
      <div>
        <div>
          <h2 className="text-xl md:text-3xl font-bold pb-2.5" >Button</h2>
            <p className="text-sm md:text-lg lg:text-xl font-serif">Buttons are used to initialize an action, either in the background or foreground of an experience.</p>
        </div>
        <br />
        <CopyBlock
        text={'Button code will be here'}
        language={'bash'}
        theme={dracula}
        wrapLines
      />
      </div>
   )
}

export default Button
