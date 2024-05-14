'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Slider = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-serif">Slider</h4>
         <p class="mb-2 text-black-500 dark:text-gray-400 ">The progress bar component can be used as an indicator to show the completion rate of data sets or it can be used as an animated loader component. There are multiple sizes, colors, and styles available.  </p>
      </div>
      <br />
      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Import the Slider component</p>
        <br />
        <CopyBlock
          text={` 
            import {Slider} from './components/Slider'
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        
      </div>
      <br />

      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Use the Slider component</p>
        <br />
        <CopyBlock
          text={` 
            <Slider>
              <img src="/slider/ex1.png" alt="" />
              <img src="/slider/ex2.png" alt="" />
              <img src="/slider/ex3.png" alt="" />
            </Slider>
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        <br />
        <img src="/slider/ex1.png" alt="" />
      </div>
    </div>
  )
}

export default Slider
