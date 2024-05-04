'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'


const Avatar = () => {
  return (
    <div>
      <div>
         <h2 className="text-xl md:text-3xl font-bold pb-2.5" >Avatar</h2>
            <p className="text-sm md:text-lg lg:text-xl font-serif">Avatar is a component that represents a user. It can display an image, initials, or a placeholder icon.</p>
      </div>
      <div className=''>
        <br />
        <p className="text-sm md:text-lg lg:text-xl font-serif">Import the Avatar component</p>
        <br />
        <CopyBlock
            text={` 
            import Avatar from './components/Avatar
             `}
            language={'bash'}
            theme={dracula}
            wrapLines
          />
          <br />

      <CopyBlock
            text={` 
            <Avatar image='/avatar.webp' />
             `}
            language={'bash'}
            theme={dracula}
            wrapLines
          />
          <img src="/avatar/example1.png" alt="" />
      </div>
      <br />

      <div>
           
      </div>
    </div>
  )
}

export default Avatar
