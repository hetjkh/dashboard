import React from "react";
import Sidebar from "../components/Sidebar";

const Customer = () => {
  return (
            <div>
  
    <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
      <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
        Customers
      </h1>
      <div className="tab tab-enter">
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <div className="p-4">
            <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
              <div className="items-center">
                <div className=" lg:flex md:flex flex-grow-0">
                  <div className="flex">
                    <div className="lg:flex-1 md:flex-1 mr-3 sm:flex-none">
                      <button className="border flex justify-center items-center border-gray-300 hover:border-emerald-400 hover:text-emerald-400  dark:text-gray-300 cursor-pointer h-10 w-20 rounded-md focus:outline-none">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1={12} y1={3} x2={12} y2={15} />
                        </svg>
                        <span className="text-xs">Export</span>
                      </button>
                    </div>
                    <div className="lg:flex-1 md:flex-1 mr-3  sm:flex-none">
                      <button className="border flex justify-center items-center h-10 w-20 hover:text-yellow-400  border-gray-300 dark:text-gray-300 cursor-pointer  py-2 hover:border-yellow-400 rounded-md focus:outline-none">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1={12} y1={15} x2={12} y2={3} />
                        </svg>
                        <span className="text-xs">Import</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <div className="p-4">
            <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <input
                  className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                  type="search"
                  name="search"
                  placeholder="Search by name/email/phone"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-1"
                />
              </div>
              <div className="flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <div className="w-full mx-1">
                  <button
                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full bg-emerald-700"
                    type="submit"
                  >
                    Filter
                  </button>
                </div>
                <div className="w-full mx-1">
                  <button
                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none rounded-lg border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700"
                    type="reset"
                  >
                    <span className="text-black dark:text-gray-200">
                      Reset
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg mb-8">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
              <tr>
                <td className="px-4 py-2">Id</td>
                <td className="px-4 py-2">Joining Date</td>
                <td className="px-4 py-2">Name</td>
                <td className="px-4 py-2">Email</td>
                <td className="px-4 py-2">Phone</td>
                <td className="px-4 py-2 text-right">Actions</td>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-400">
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    08a9
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 30, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">AM Masum</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">
                    abdullamuhammed76@gmail.com
                  </span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/66a80b98a8d3c9000c6608a9">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    1628
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 29, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Code Share</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">shardddecode789@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/66a7065860fc78000c561628">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    19a1
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 28, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Raphael Pardinho Lacerda</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">
                    rafael.pardinho@rocketclouds.com.br
                  </span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/66a68af360f725000c8219a1">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    0e54
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 28, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">klemen dornik voje</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">
                    dornikvojeklemen@gmail.com
                  </span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/66a615ca7977d8000caa0e54">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    5620
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 28, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">mohammed atef</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">
                    mohammedatef2050@gmail.com
                  </span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/66a5d69e4cfc75000c8f5620">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    1cd8
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 24, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Danish Zulfiqar</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">
                    danishzulfiqar100@gmail.com
                  </span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/66a10c6d3b8f64000d341cd8">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    d480
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 23, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">nurmuham madggg</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">nurmuhammadggg@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/669fd089f504aa000ce7d480">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    b38c
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 21, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Bo Vu.</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">vovananhphong@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/669d3a189d6aa5000c4fb38c">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    fb0a
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 21, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">KISHOR SARKAR</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">kishor81160@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/669c07cd7c5174000c63fb0a">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    eb3a
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 20, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">mongi jaziri</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">mongijazz@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/669bb3096a73b2000ca6eb3a">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    29a6
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 20, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Suh</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">sohaibg@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/669aca3837bd9f000c4b29a6">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    fea0
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 19, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Antariksh Dwivedi</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">soochnasource@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/6699f8ee333aa5000c8afea0">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    1745
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 18, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Manoj Mahesh</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">manojrajput0547@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/6698658deb28e0000c501745">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    0368
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 17, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Dinesh Kumar</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">dinesh.krs88@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/669809c73fc454000de90368">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    cfb4
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 16, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">abu hasan</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">mahmud.me420@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/66960d3646039c000c9dcfb4">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    4b46
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 13, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Robin Mahmud</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">robinmahmud2019@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/6692b10601e16b000cf84b46">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    6652
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 13, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Utsav Vasoya (UV)</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">utsavvasoya99@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/66920803c85908000ca46652">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    f15f
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 9, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Pradeep Reddy</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">
                    chadapradeepreddy@gmail.com
                  </span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/668d5dec9c34d0000cfef15f">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    f48d
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 9, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">shahamar rahman</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">shahamarhimel@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/668d4fad08049c000c95f48d">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className>
                <td className="px-4 py-2">
                  <span className="font-semibold uppercase text-xs">
                    {" "}
                    4c00
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Jul 9, 2024</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">Kumar Ayush</span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm">ayushranjan6137@gmail.com</span>{" "}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-medium" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end text-right">
                    <div className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                      {" "}
                      <a href="/customer-order/668d2b27b96739000c624c00">
                        <p
                          data-tip="true"
                          data-for="view"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            <line x1={11} y1={8} x2={11} y2={14} />
                            <line x1={8} y1={11} x2={14} y2={11} />
                          </svg>
                        </p>
                      </a>
                    </div>
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="edit"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </p>
                      </button>
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                        <p
                          data-tip="true"
                          data-for="delete"
                          className="text-xl"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
          <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
            <span className="flex items-center font-semibold tracking-wide uppercase">
              Showing 1-20 of 91
            </span>
            <div className="flex mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul className="inline-flex items-center">
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent opacity-50 cursor-not-allowed"
                      disabled
                      type="button"
                      aria-label="Previous"
                    >
                      <svg
                        className="h-3 w-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600"
                      type="button"
                    >
                      1
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                    >
                      2
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                    >
                      3
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                    >
                      4
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                    >
                      5
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                      aria-label="Next"
                    >
                      <svg
                        className="h-3 w-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</div>
    

  );
};

export default Customer;
