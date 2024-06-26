import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>

            <section class="bg-gray-50">
                <div class="mx-auto max-w-screen px-4 lg:flex lg:h-screen lg:items-center">
                    <div class="mx-auto max-w-xl text-center">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">

                            <strong class="font-extrabold text-green-500 sm:block"> FusionUI. </strong>
                        </h1>

                        <p class="mt-4 sm:text-xl/relaxed">
                            Modular, customizable React components for efficient, elegant web development.
                        </p>

                        <div class="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                class="block w-full rounded bg-green-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                                to="/documentation"
                            >
                                Get Started
                            </Link>

                            <a
                                class="block w-full rounded px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div class="max-w-screen mx-auto py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 justify-center">
                    <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:justify-items-center lg:gap-x-8 ">
                        <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-3xl font-bold sm:text-4xl">Find the best components</h2>

                            <p class="mt-4 text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint
                                distinctio
                                iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                                minima aliquid tempora. Obcaecati, autem.
                            </p>

                            <a
                                href="#"
                                class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>

                        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

                                <h2 class="mt-2 font-bold">Easy to use</h2>

                                
                            </a>

                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;