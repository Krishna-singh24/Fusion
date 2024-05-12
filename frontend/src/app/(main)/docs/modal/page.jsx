'use client';
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Modal = () => {
  return (
    <div>
      <div>
         <h4 class="text-xl md:text-2xl lg:text-3xl font-serif">Modal</h4>
         <p class="mb-2 text-black-500 dark:text-gray-400 font-serif ">The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users. <br />

         Get started with multiple sizes, colors, and styles built with the utility classes from Tailwind CSS and the components from Flowbite.  </p>
      </div>
      <br />

      <div>
        <h4 class="text-lg md:text-xl lg:text-2xl font-serif">Usage</h4>
        <p class="mb-2 text-black-500 dark:text-gray-400 font-serif ">Modal component is a controlled component, which means that you need to pass the open prop and the onClose handler to it.</p>
        <br />
      </div>

      <div>
        <p className="text-sm md:text-lg lg:text-xl font-serif">Import the Modal component</p>
          <br />
          <CopyBlock
          text={` 
            import {Modal} from './components/Model'
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
      </div>

      <div>
      <p className="text-sm md:text-lg lg:text-xl font-serif">Use the Modal component</p>
          <br />
          <CopyBlock
          text={` 
          //use the below line to control the state
          const [modalOpen, setModalOpen] = useState(false);

          <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          // headerContent={<p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">Featured</p>}
          bodyContent={<>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Modal title
            </h3>
            <p className="mt-2 text-gray-500 dark:text-neutral-400">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 
              hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
              href="#"
            >
              Card link
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </>}

        // footerContent={
        //   <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
        //     Last updated 5 mins ago
        //   </p>
        // }
        />

        <Button className='mt-5' color='primary' onClick={() => {
          console.log('skjdshj');
          setModalOpen(true)
        }}>Open Modal</Button>
             `}
          language={'bash'}
          theme={dracula}
          wrapLines
        />
        <br />

        <img src="/modal/ex1.png" alt="" />
      </div>

    </div>
  )
}

export default Modal
