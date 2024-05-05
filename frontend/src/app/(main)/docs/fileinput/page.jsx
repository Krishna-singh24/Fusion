'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const FileInput = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">FileInput</h4>
         <p class="mb-2 text-gray-500 dark:text-gray-400 ">File Inputs are used to allow the user to select one or more files from a set of choices.</p>
      </div>
      <br />
      <div>
        <p className="text-sm md:text-lg lg:text-xl font-serif">Import the FileInput component</p>
        <br />
        <CopyBlock
            text={` 
            import FileInput from './components/FileInput
             `}
            language={'bash'}
            theme={dracula}
            wrapLines
          />
      </div>
      <br />
      <div>
        <p className="text-sm md:text-lg lg:text-xl font-serif">Exapmle 1</p>
        <CopyBlock
          text={` 
          <FileInput
          label='Upload File'
          onChange={(file) => console.log(file)}
          contraints='image/*'
          style={{width: 250}}/>
           `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        <img src="/fileinput/example1.png" alt="" />
      </div>
    </div>
  )
}

export default FileInput
