'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Flex = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">Flex</h4>
         <p class="mb-2 text-gray-500 dark:text-gray-400 ">Flex is a utility class that allows you to create a flexible container that expands to fill the available space.  </p>
      </div>
      <br />
      <div>
      <p class="mb-2 text-gray-500 dark:text-gray-400 ">Import the Flex component  </p>
       <br />
       <CopyBlock
            text={` 
            import Flex from './components/Flex
             `}
            language={'bash'}
            theme={dracula}
            wrapLines
          />
      </div>
    </div>
  )
}

export default Flex
