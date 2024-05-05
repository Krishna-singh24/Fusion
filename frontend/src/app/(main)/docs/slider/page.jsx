'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Slider = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">Slider</h4>
         <p class="mb-2 text-gray-500 dark:text-gray-400 ">Slider is a utility class that allows you to create a slider layout that is responsive and easy to use.  </p>
      </div>
      <br />
      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Import the Pagination component</p>
        <br />
        <CopyBlock
          text={` 
            import Slider from './components/Slider'
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        
      </div>
      <br />
    </div>
  )
}

export default Slider
