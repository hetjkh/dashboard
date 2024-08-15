import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
          <div>
            <main className="h-full overflow-y-auto">
              <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
                <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
                  Dashboard Overview
                </h1>
                <div className="tab tab-enter">
                  <div className="grid gap-2 mb-8 xl:grid-cols-5 md:grid-cols-2">
                    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center h-full">
                      <div className="p-4 border border-gray-200 justify-between dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-emerald-100 bg-teal-600">
                        <div className="text-center xl:mb-0 mb-3">
                          <div className="text-center inline-block text-3xl text-white dark:text-emerald-100 bg-teal-600">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              version="1.1"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z" />
                            </svg>
                          </div>
                          <div>
                            <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                              Today Orders
                            </p>
                            <p className="text-2xl font-bold leading-none text-gray-50 dark:text-gray-50">
                              $70.00
                            </p>
                          </div>
                          <div className="flex text-center text-xs font-normal text-gray-50 dark:text-gray-100">
                            <div className="px-1 mt-3">Cash : $70.00</div>
                            <div className="px-1 mt-3">Card : $0.00</div>
                            <div className="px-1 mt-3">Credit : $0.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center h-full">
                      <div className="p-4 border border-gray-200 justify-between dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-orange-100 bg-orange-400">
                        <div className="text-center xl:mb-0 mb-3">
                          <div className="text-center inline-block text-3xl text-white dark:text-orange-100 bg-orange-400">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              version="1.1"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z" />
                            </svg>
                          </div>
                          <div>
                            <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                              Yesterday Orders
                            </p>
                            <p className="text-2xl font-bold leading-none text-gray-50 dark:text-gray-50">
                              $1031.24
                            </p>
                          </div>
                          <div className="flex text-center text-xs font-normal text-gray-50 dark:text-gray-100">
                            <div className="px-1 mt-3">Cash : $1031.24</div>
                            <div className="px-1 mt-3">Card : $0.00</div>
                            <div className="px-1 mt-3">Credit : $0.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
                      <div className="p-4 border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-emerald-100 bg-blue-500">
                        <div className="text-center inline-block text-3xl text-white dark:text-emerald-100 bg-blue-500">
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
                            <circle cx={9} cy={21} r={1} />
                            <circle cx={20} cy={21} r={1} />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                          </svg>
                        </div>
                        <div>
                          <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                            This Month
                          </p>
                          <p className="text-2xl font-bold leading-none text-gray-50 dark:text-gray-50">
                            $13303.40
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
                      <div className="p-4 border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-teal-100 bg-cyan-600">
                        <div className="text-center inline-block text-3xl text-white dark:text-teal-100 bg-cyan-600">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            version="1.1"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v9c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-9c0-0.825-0.675-1.5-1.5-1.5zM1.5 3h13c0.271 0 0.5 0.229 0.5 0.5v1.5h-14v-1.5c0-0.271 0.229-0.5 0.5-0.5zM14.5 13h-13c-0.271 0-0.5-0.229-0.5-0.5v-4.5h14v4.5c0 0.271-0.229 0.5-0.5 0.5zM2 10h1v2h-1zM4 10h1v2h-1zM6 10h1v2h-1z" />
                          </svg>
                        </div>
                        <div>
                          <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                            Last Month
                          </p>
                          <p className="text-2xl font-bold leading-none text-gray-50 dark:text-gray-50">
                            $32681.88
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
                      <div className="p-4 border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-emerald-100 bg-emerald-600">
                        <div className="text-center inline-block text-3xl text-white dark:text-emerald-100 bg-emerald-600">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            version="1.1"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v9c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-9c0-0.825-0.675-1.5-1.5-1.5zM1.5 3h13c0.271 0 0.5 0.229 0.5 0.5v1.5h-14v-1.5c0-0.271 0.229-0.5 0.5-0.5zM14.5 13h-13c-0.271 0-0.5-0.229-0.5-0.5v-4.5h14v4.5c0 0.271-0.229 0.5-0.5 0.5zM2 10h1v2h-1zM4 10h1v2h-1zM6 10h1v2h-1z" />
                          </svg>
                        </div>
                        <div>
                          <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                            All-Time Sales
                          </p>
                          <p className="text-2xl font-bold leading-none text-gray-50 dark:text-gray-50">
                            $137011.56
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                      <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                        <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500">
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
                            <circle cx={9} cy={21} r={1} />
                            <circle cx={20} cy={21} r={1} />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                          </svg>
                        </div>
                        <div>
                          <h6 className="text-sm mb-1 font-medium text-gray-600 dark:text-gray-400">
                            <span>Total Order</span>{" "}
                          </h6>
                          <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">
                            180
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                      <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                        <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500">
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
                            <polyline points="23 4 23 10 17 10" />
                            <polyline points="1 20 1 14 7 14" />
                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                          </svg>
                        </div>
                        <div>
                          <h6 className="text-sm mb-1 font-medium text-gray-600 dark:text-gray-400">
                            <span>Orders Pending</span>{" "}
                            <span className="text-red-500 text-sm font-semibold">
                              (28301.57)
                            </span>
                          </h6>
                          <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">
                            49
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                      <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                        <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500">
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
                            <rect x={1} y={3} width={15} height={13} />
                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                            <circle cx="5.5" cy="18.5" r="2.5" />
                            <circle cx="18.5" cy="18.5" r="2.5" />
                          </svg>
                        </div>
                        <div>
                          <h6 className="text-sm mb-1 font-medium text-gray-600 dark:text-gray-400">
                            <span>Orders Processing</span>{" "}
                          </h6>
                          <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">
                            22
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                      <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                        <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-emerald-600 dark:text-emerald-100 bg-emerald-100 dark:bg-emerald-500">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <h6 className="text-sm mb-1 font-medium text-gray-600 dark:text-gray-400">
                            <span>Orders Delivered</span>{" "}
                          </h6>
                          <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">
                            84
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 my-8">
                    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                        Weekly Sales
                      </p>
                      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-4">
                        <ul className="flex flex-wrap -mb-px">
                          <li className="mr-2">
                            <button
                              type="button"
                              className="inline-block p-2 rounded-t-lg border-b-2 border-transparent text-emerald-600 border-emerald-600 dark:text-emerald-500 dark:border-emerald-500  focus:outline-none"
                            >
                              Sales
                            </button>
                          </li>
                          <li className="mr-2">
                            <button
                              type="button"
                              className="inline-block p-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300  focus:outline-none"
                            >
                              Orders
                            </button>
                          </li>
                        </ul>
                      </div>
                      <canvas
                        role="img"
                        height={332}
                        width={665}
                        legend="[object Object]"
                        style={{
                          display: "block",
                          boxSizing: "border-box",
                          height: 266,
                          width: 532,
                        }}
                      />
                    </div>
                    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                        Best Selling Products
                      </p>
                      <div>
                        <canvas
                          role="img"
                          height={400}
                          width={400}
                          legend="[object Object]"
                          className="chart"
                          style={{
                            display: "block",
                            boxSizing: "border-box",
                            height: 320,
                            width: 320,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
                  Recent Order
                </h1>
                <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg mb-8">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                      <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                        <tr>
                          <td className="px-4 py-2">INVOICE NO</td>
                          <td className="px-4 py-2">ORDER TIME</td>
                          <td className="px-4 py-2">Customer Name </td>
                          <td className="px-4 py-2"> METHOD </td>
                          <td className="px-4 py-2"> AMOUNT </td>
                          <td className="px-4 py-2">STATUS</td>
                          <td className="px-4 py-2">ACTION</td>
                          <td className="px-4 py-2 text-right">INVOICE</td>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-400 dark:bg-gray-900" />
                    </table>
                  </div>
                  <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
                    <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
                      <span className="flex items-center font-semibold tracking-wide uppercase">
                        Showing 1-NaN of{" "}
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
                              <span className="px-2 py-1">...</span>
                            </li>
                            <li>
                              <button
                                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                                type="button"
                              >
                                NaN
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
            </main>
    </div>
    </>

  );
};

export default Dashboard;
