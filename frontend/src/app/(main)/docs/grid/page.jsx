'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Grid = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">Grid</h4>
         <p class="mb-2 text-black-500 dark:text-gray-400 ">Grid is a utility class that allows you to create a grid layout that is responsive and easy to use.  </p>

      </div>
      <br />
      <div>
      <p class="mb-2 text-black-500 dark:text-black-400 ">Import the Grid component  </p>
      <CopyBlock
            text={` 
            import Grid from './components/Grid
             `}
            language={'bash'}
            theme={dracula}
            wrapLines
          />
      </div>
    </div>
  )
}

export default Grid
