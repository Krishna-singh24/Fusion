'use client';
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const GettingStarted = () => {
  return (
    <div>
      <h4 class="text-xl md:text-2xl lg:text-3xl font-mono">Quick Setup</h4>
      <p class="mb-2 text-gray-500 dark:text-gray-400 ">This guide will help you get started with Fusion UI, including how to run, customize, update, and integrate your project!

        First, you need to make sure that you have a working Tailwind CSS project installed and that you also have Node and NPM installed on your machine.</p>
      <h3 class="text-sm md:text-2xl lg:text-3xl font-serif">Require via NPM</h3>
      <span ></span>

      <CopyBlock
        text={'npm i fusion-reactui'}
        language={'bash'}
        theme={dracula}
        wrapLines
      />

    </div>
  )
}

export default GettingStarted
