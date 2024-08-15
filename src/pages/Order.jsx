import React from "react";

const Order = () => {
  return (
    <div>
      <>
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
          <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
            Orders
          </h1>
          <div className="tab tab-enter">
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
              <div className="p-4">
                <form>
                  <div className="grid gap-4 lg:gap-4 xl:gap-6 md:gap-2 md:grid-cols-5 py-2">
                    <div>
                      <input
                        className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                        type="search"
                        name="search"
                        placeholder="Search by Customer Name"
                      />
                    </div>
                    <div>
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
                        <option value="Status" hidden>
                          Status
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </div>
                    <div>
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
                        <option value="Order limits" hidden>
                          Order limits
                        </option>
                        <option value={5}>Last 5 days orders</option>
                        <option value={7}>Last 7 days orders</option>
                        <option value={15}>Last 15 days orders</option>
                        <option value={30}>Last 30 days orders</option>
                      </select>
                    </div>
                    <div>
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
                        <option value="Method" hidden>
                          Method
                        </option>
                        <option value="Cash">Cash</option>
                        <option value="Card">Card</option>
                        <option value="Credit">Credit</option>
                      </select>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="false flex items-center justify-center text-sm leading-5 h-12 w-full text-center transition-colors duration-150 font-medium px-6 py-2 rounded-md text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 "
                      >
                        Download All Orders
                        <span className="ml-2 text-base">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={32}
                              d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56m0 64.1l64 63.9 64-63.9M256 224v224.03"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2">
                    <div>
                      <label className="block text-sm text-gray-800 dark:text-gray-400">
                        Start Date
                      </label>
                      <input
                        className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                        type="date"
                        name="startDate"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-800 dark:text-gray-400">
                        End Date
                      </label>
                      <input
                        className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                        type="date"
                        name="startDate"
                      />
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                      <div className="w-full mx-1">
                        <label
                          className="block text-sm text-gray-800 dark:text-gray-400"
                          style={{ visibility: "hidden" }}
                        >
                          Filter
                        </label>
                        <button
                          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full bg-emerald-700"
                          type="submit"
                        >
                          Filter
                        </button>
                      </div>
                      <div className="w-full">
                        <label
                          className="block text-sm text-gray-800 dark:text-gray-400"
                          style={{ visibility: "hidden" }}
                        >
                          Reset
                        </label>
                        <button
                          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none rounded-lg border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 px-4 md:py-1 py-3 text-sm dark:bg-gray-700"
                          type="reset"
                        >
                          <span className="text-black dark:text-gray-200">
                            Reset
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg mb-8 dark:bg-gray-900">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                  <tr>
                    <td className="px-4 py-2">INVOICE NO</td>
                    <td className="px-4 py-2">ORDER TIME</td>
                    <td className="px-4 py-2">Customer Name</td>
                    <td className="px-4 py-2">METHOD</td>
                    <td className="px-4 py-2">AMOUNT</td>
                    <td className="px-4 py-2">STATUS</td>
                    <td className="px-4 py-2">ACTION</td>
                    <td className="px-4 py-2 text-right">INVOICE</td>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-400 dark:bg-gray-900">
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11042
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 31, 2024 7:42 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">Aminul Islam</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$590.55</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/665413b71cf11d000c936f7c">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11197
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 31, 2024 6:26 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">Nguyễn Khoa </span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$210.00</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/66a9c840cff662000cd6918a">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11138
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 31, 2024 6:13 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">fhg jk</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$161.19</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/667d233ede2316000c5b57e8">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11040
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 31, 2024 12:38 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">Mohamed Abdinor</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$6210.00</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-600">
                          Pending
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Pending
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/6653906e22edac000d266eb0">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11196
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 31, 2024 12:38 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">Nguyễn Khoa</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$1895.00</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/66a88a96d9a8d2000ccc9eaf">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11194
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 31, 2024 12:38 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">Sohaib Ahmed</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$238.45</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-600">
                          Pending
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Pending
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/66a797aec0b659000c188954">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11195
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 29, 2024 9:07 PM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">Sudhir Kumar</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$510.00</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/66a7b19a775476000c1165f1">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11193
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 29, 2024 1:58 PM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">Mohammed Eldegwy</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Card</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$351.29</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-blue-500 bg-blue-100 dark:text-white dark:bg-blue-800">
                          Processing
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Processing
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/66a5d7a613cd5c000c26888a">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11191
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 29, 2024 1:58 PM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">
                        john doe sdadasdadsd undefined undefined undefined
                      </span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Card</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$446.52</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/66a34647d3f07e000c7a2f0b">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11041
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 29, 2024 1:58 PM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">Aminul Islam</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$253.26</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/6654136f454047000c34c281">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11189
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 29, 2024 1:58 PM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">
                        john doe sdadasdadsd undefined
                      </span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$158.03</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/66a1cbefa9da33000c0e4313">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11132
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 29, 2024 1:56 PM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">kk mmmm</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$158.03</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/667a20089895a9000cf783db">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11137
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 29, 2024 1:32 PM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">fhg jk </span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$205.00</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/667d1dd2c48809000c19f4e9">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11190
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 29, 2024 10:35 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">
                        john doe sdadasdadsd undefined undefined
                      </span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$220.00</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/66a23594e92437000cb3a79d">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11059
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 27, 2024 7:31 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">a d</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$105.00</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-600">
                          Pending
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Pending
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/6656eaeff3cad5000c80bd0a">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11061
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 27, 2024 7:31 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">mukwaba john baptist</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$110.00</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-blue-500 bg-blue-100 dark:text-white dark:bg-blue-800">
                          Processing
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Processing
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/6658d6c0248a49000ca7e9fa">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11192
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 27, 2024 4:28 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">
                        john doe sdadasdadsd undefined undefined undefined
                        undefined
                      </span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$1000.16</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/66a34d21fe2598000cdd925b">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11054
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 26, 2024 8:03 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">Jhon Gost</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$510.00</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          Delivered
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/6654ea705dbaae000cd84925">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11184
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 26, 2024 7:12 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">gưee undefined</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$70.00</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-red-500 bg-red-100 dark:text-red-100 dark:bg-red-800">
                          Cancel
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Cancel
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/669e33d03c36de000c440b84">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        11164
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Jul 26, 2024 7:12 AM</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">H Y</span>{" "}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">Cash</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$225.78</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-blue-500 bg-blue-100 dark:text-white dark:bg-blue-800">
                          Processing
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden>
                          Processing
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <div style={{ display: "none" }} />
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p
                            data-tip="true"
                            data-for="receipt"
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
                              <polyline points="6 9 6 2 18 2 18 9" />
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                              <rect x={6} y={14} width={12} height={8} />
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/668b96773ae233000c24bf05">
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
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
              <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
                <span className="flex items-center font-semibold tracking-wide uppercase">
                  Showing 1-20 of 193
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
                          10
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
      </>
    </div>
  );
};

export default Order;
