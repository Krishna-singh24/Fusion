'use client';
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const GettingStarted = () => {
  return (
    <div>
      <h4 class="text-xl md:text-2xl lg:text-3xl font-serif">Quick Setup</h4>
      <p class="mb-2 text-black-500 dark:text-gray-400 font-serif">This guide will help you get started with Fusion UI, including how to run, customize, update, and integrate your project!

        First, you need to make sure that you have a working Tailwind CSS project installed and that you also have Node and NPM installed on your machine.</p>
      <br />
      <h3 class="text-sm md:text-2xl lg:text-3xl font-serif">Require via NPM</h3>
      
      <p class="mb-2 text-black-500 dark:text-gray-400 font-serif "> 1. You can install Fusion UI via NPM by running the following command in your project directory:</p>
      <CopyBlock
        text={`
    npm i fusion-reactui 
         `}
        language={'bash'}
        theme={dracula}
        wrapLines={true}
      />

      <br />
      <p class="mb-2 text-black-500 dark:text-gray-400 font-serif ">2.  Include Fusion UI as a plugin in the tailwind.config.js file.</p>
      <CopyBlock
        text={`
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      // Add this line
      "./node_modules/fusion-reactui/dist/esm/**/*.js", 
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
         `}
        language={'bash'}
        theme={dracula}
        wrapLines={true}
      />
    </div>
  )
}

export default GettingStarted
