'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Pagination = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-mono ">Pagination</h4>
         <p class="mb-2 text-black-500 dark:text-gray-400 ">The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries..  </p>
      </div>
      <br />
      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Import the Pagination component</p>
        <br />
        <CopyBlock
          text={` 
            import {Pagination} from './components/Pagination'
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        
      </div>
      <br />
      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Basic Pagination</p>
        <br />
        <CopyBlock
          text={` 
             <Pagination currentPage={1} totalPages={10} onPageChange={(page) => console.log(page)} />
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        <br />
        <img src="/pagination/example1.png" alt=" pagination image" />
      </div>
    </div>
  )
}

export default Pagination
