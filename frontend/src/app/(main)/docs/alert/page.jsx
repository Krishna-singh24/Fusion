'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Alert = () => {
  return (
    <div>
      <div>
        <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">Alert</h4>
        <p class="mb-2 text-gray-500 dark:text-gray-400 ">Alerts are used to communicate important information to the user. They can contain a title, a message, and an icon.</p>
        <h3 class="text-sm md:text-2xl lg:text-3xl font-serif">Basic Alert</h3>

        <CopyBlock
          text={`
  <Alert title='Error' description='Login Failed' color='danger'/>
          `}
          language={'javascript'}
          theme={dracula}
          wrapLines
        />

        <img src="/alert/example1.png" alt="" />

      </div>
    </div>
  )
}

export default Alert
