'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Table = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-serif">Table</h4>
         
         <p  class="mb-2 text-black-500 dark:text-gray-400 " >The table component represents a set of structured elements made up of rows and columns as table cells that can be used to show data sets to your website users.

Get started with multiple variants and styles of these table components built with the utility classes from Tailwind CSS and components from FusionUI. </p>
      </div>

      <br />
      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Import the Table component</p>
        <br />
        <CopyBlock
          text={` 
            import {Table} from './components/Table'
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        
      </div>
      <br />
      <div>
        <p class="text-lg md:text-xl lg:text-2xl font-serif">Use the Table component</p>
        <br />
        <CopyBlock
          text={` 
            //Table Data
            const tableData = [
              { id: 1, name: 'John Doe', email: 'john@mail.com', phone: '1234567890' },
              { id: 2, name: 'Jane Doe', email: 'john2@mail.com', phone: '1234567890' },
              { id: 3, name: 'John Smith', email: 'smith@mail.com', phone: '1234567890' }
            ];

            <Table data={tableData} columns={['id', 'name', 'email', 'phone']} />
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        <br />
        <img src="/table/ex1.png" alt="" />
      </div>
    </div>
  )
}

export default Table
