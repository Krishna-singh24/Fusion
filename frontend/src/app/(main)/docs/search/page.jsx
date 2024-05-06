'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Search = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">Search</h4>
         <p class="mb-2 text-gray-500 dark:text-gray-400 ">The Search page component enables the display of search results in a customizable way. It allows users to customize the items that are displayed by modifying the search parameters. Also able of modification are the fields that are displayed, as well as the look and feel of the search results.  </p>
      </div>
      <br />
      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Import the Search component</p>
        <br />
        <CopyBlock
          text={` 
            import Search from './components/Search'
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

export default Search
