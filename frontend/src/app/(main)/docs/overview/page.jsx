import Link from 'next/link';
import React from 'react';

const Overview = () => {
  return (
    <div>
      <div>
        <div class="text-center">
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Customise your UI with <br />seamless efficiency</h2>

          <p class="mx-auto mt-4 max-w-sm text-black-500">
            FusionUI is a collection of React components designed to help developers build beautiful, consistent user interfaces with ease.
          </p>

          <Link
            href="/docs/getting-started"
            class="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          >
            Get Started
          </Link>
        </div>


      </div>
      <br />
      <br />

      <div>      
      <h4 className="text-xl md:text-2xl lg:text-3xl font-serif">Introduction</h4>
      <br />

      <ul className="list-disc ml-6 mb-4 text-black-500 dark:text-gray-400 font-serif">
        <li>Fusion UI is a React component library that helps you build beautiful, responsive, and accessible web applications. It is built on top of Tailwind CSS and provides a set of components that are designed to work seamlessly with the Tailwind CSS utility classes.</li>
        <br />
        <li>Tired of building the same UI components over and over? Introducing our brand new React component library! This collection of pre-built, reusable components offers everything you need to create beautiful and consistent user interfaces for your React applications. From essential elements like buttons and menus to more complex components, our library streamlines development and ensures a cohesive user experience. Boost your development speed and focus on what matters - building innovative features!</li>
      </ul>
      </div>
      <br />
      <div>
        <h4 className="text-xl md:text-2xl lg:text-3xl font-serif">Advantages of FusionUI</h4>
        <br />

        <ul className="list-disc ml-6 mb-4 text-black-500 dark:text-gray-400 font-serif">
          <li>Easy to use: Fusion UI is designed to be easy to use and customize. With a wide range of components to choose from, you can quickly build beautiful and responsive web applications.</li>
          <br />
          <li>Responsive: Fusion UI components are designed to be fully responsive, so your web applications will look great on any device.</li>
          <br />
          <li>Accessible: Fusion UI components are built with accessibility in mind, so your web applications will be usable by everyone.</li>
        </ul>
      </div>
      <br />

      <div>
        <h4 className="text-xl md:text-2xl lg:text-3xl font-serif">Getting Started</h4>
        <br />

        <ul className="list-disc ml-6 mb-4 text-black-500 dark:text-gray-400 font-serif">
          <li>To get started with Fusion UI, simply install the package using npm or yarn. You can then import the components you need and start building your web application.</li>
          <br />
          <li>For more information on how to use Fusion UI, check out the documentation.</li>
        </ul>
      </div>

    </div>
  );
};


export default Overview
