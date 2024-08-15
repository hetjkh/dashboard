import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInt, setInt] = useState(false);
  const [isOnline, setOnline] = useState(false);
  const [isPage ,SetPage] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const IntDropdown = () => {
    setInt(!isInt);
  };

  const OnlineDropdown = () => {
    setOnline(!isOnline);
  };

  const PageDropdown = () =>{
    SetPage(!isPage);
  }

  return (
    <div>
      <div id="root bg-white-50">
        <div className="Toastify" />
        <span
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          Navigated to dashboard page.
        </span>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 false">
          <aside className="z-30 flex-shrink-0 hidden shadow-sm w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
            <div className="py-4 text-gray-500 dark:text-gray-400">
              <a
                className=" text-gray-900 dark:text-gray-200"
                href="/dashboard"
              >
                <img
                  src="data:image/png;base64,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"
                  alt="kachabazar"
                  width={135}
                  className="pl-6"
                />
              </a>
              <ul className="mt-8">
                <li className="relative">
                  <a
                    className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-700 dark:hover:text-gray-200 active"
                    target="_self"
                    rel="noreferrer"
                    href="/dashboard"
                    style={{ color: "rgb(13, 158, 109)" }}
                    aria-current="page"
                  >
                    <span
                      className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    />
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x={3} y={3} width={7} height={7} />
                      <rect x={14} y={3} width={7} height={7} />
                      <rect x={14} y={14} width={7} height={7} />
                      <rect x={3} y={14} width={7} height={7} />
                    </svg>
                    <span className="ml-4">Dashboard</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <button
                    className="inline-flex items-center justify-between focus:outline-none w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-600 dark:hover:text-gray-200"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    <span className="inline-flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
                        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
                        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
                        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
                        <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
                        <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
                      </svg>
                      <span className="ml-4 mt-1">Catalog</span>
                      <span className="pl-4 mt-1">
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
                            strokeWidth={48}
                            d="M112 184l144 144 144-144"
                          />
                        </svg>
                      </span>
                    </span>
                  </button>
                  {isOpen && (
                    <ul
                      className="p-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md dark:text-gray-400 dark:bg-gray-900"
                      aria-label="submenu"
                    >
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/products"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            Products
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/categories"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            Categories
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/attributes"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            Attributes
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/coupons"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            Coupons
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <a
                    className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-700 dark:hover:text-gray-200"
                    target="_self"
                    rel="noreferrer"
                    href="/customers"
                    style={{}}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span className="ml-4">Customers</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-700 dark:hover:text-gray-200"
                    target="_self"
                    rel="noreferrer"
                    href="/orders"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                    </svg>
                    <span className="ml-4">Orders</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-700 dark:hover:text-gray-200"
                    target="_self"
                    rel="noreferrer"
                    href="/our-staff"
                    style={{}}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    <span className="ml-4">Our Staff</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-700 dark:hover:text-gray-200"
                    target="_self"
                    rel="noreferrer"
                    href="/settings?settingTab=common-settings"
                  >
                    <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                    <span className="ml-4">Settings</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <button
                    className="inline-flex items-center justify-between focus:outline-none w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-600 dark:hover:text-gray-200"
                    aria-haspopup="true"
                    onClick={IntDropdown}
                  >
                    <span className="inline-flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <line x1={2} y1={12} x2={22} y2={12} />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <span className="ml-4 mt-1">International</span>
                      <span className="pl-4 mt-1">
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
                            strokeWidth={48}
                            d="M112 184l144 144 144-144"
                          />
                        </svg>
                      </span>
                    </span>
                  </button>
                  {isInt && (
                    <ul
                      className="p-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md dark:text-gray-400 dark:bg-gray-900"
                      aria-label="submenu"
                    >
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/products"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            Language
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/categories"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            Currncies
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="relative px-6 py-3">
                  <button
                    className="inline-flex items-center justify-between focus:outline-none w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-600 dark:hover:text-gray-200"
                    aria-haspopup="true"
                    onClick={OnlineDropdown}
                  >
                    <span className="inline-flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
                        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
                        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
                        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
                        <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
                        <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
                      </svg>
                      <span className="ml-4 mt-1">Online Store</span>
                      <span className="pl-4 mt-1">
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
                            strokeWidth={48}
                            d="M112 184l144 144 144-144"
                          />
                        </svg>
                      </span>
                    </span>
                  </button>
                  {isOnline && (
                    <ul
                      className="p-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md dark:text-gray-400 dark:bg-gray-900"
                      aria-label="submenu"
                    >
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/products"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            View Store
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/categories"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            Store Customization
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/attributes"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            Store Settings
                          </span>
                        </a>
                      </li>
                      <li></li>
                    </ul>
                  )}
                </li>

                <li className="relative px-6 py-3">
                  <button
                    className="inline-flex items-center justify-between focus:outline-none w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-600 dark:hover:text-gray-200"
                    aria-haspopup="true"
                    onClick={PageDropdown}
                  >
                    <span className="inline-flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
                        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
                        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
                        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
                        <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
                        <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
                      </svg>
                      <span className="ml-4 mt-1">Pages</span>
                      <span className="pl-4 mt-1">
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
                            strokeWidth={48}
                            d="M112 184l144 144 144-144"
                          />
                        </svg>
                      </span>
                    </span>
                  </button>
                  {isPage && (
                    <ul
                      className="p-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md dark:text-gray-400 dark:bg-gray-900"
                      aria-label="submenu"
                    >
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/products"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            404
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                          rel="noreferrer"
                          href="/categories"
                        >
                          <span className="text-xs text-gray-500 pr-1">
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M400 256H112"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500 hover:text-emerald-600 dark:hover:text-gray-200">
                            Coming Soon
                          </span>
                        </a>
                      </li>

                      <li></li>
                    </ul>
                  )}
                </li>

              </ul>
              <span className="lg:fixed bottom-0 px-6 py-6 w-64 mx-auto relative mt-3 block">
                <button
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-3 rounded-lg text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full"
                  type="button"
                >
                  <span className="flex items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="mr-3 text-lg"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"
                      />
                    </svg>
                    <span className="text-sm">Log Out</span>
                  </span>
                </button>
              </span>
            </div>
          </aside>
          <div className="flex flex-col flex-1 w-full">
            <header className="z-30 py-4 bg-white shadow-sm dark:bg-gray-800">
              <div className="container flex items-center justify-between h-full px-6 mx-auto text-emerald-500 dark:text-emerald-500">
                <button
                  type="button"
                  className="hidden lg:block outline-0 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <button
                  className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none"
                  aria-label="Menu"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1={3} y1={12} x2={21} y2={12} />
                    <line x1={3} y1={6} x2={21} y2={6} />
                    <line x1={3} y1={18} x2={21} y2={18} />
                  </svg>
                </button>
                <span />
                <ul className="flex justify-end items-center flex-shrink-0 space-x-6">
                  <li className="changeLanguage">
                    <div className="dropdown">
                      <button className="dropbtn focus:outline-none">
                        {/* <img
                          src="/@/assets/us-B6R3X7cJ.svg"
                          className="mx-2"
                          alt="lang"
                          width={16}
                        />
                        <span className="text-gray-700 dark:text-gray-400">
                          ENGLISH
                        </span> */}
                      </button>
                      <div className="dropdown-content">
                        {/* <div className="focus:outline-none cursor-pointer">
                          <img
                            src="/@/assets/us-B6R3X7cJ.svg"
                            width={16}
                            alt="lang"
                          />{" "}
                          English{" "}
                        </div> */}
                        <div className="focus:outline-none cursor-pointer">
                          <img
                            // src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-de'%20viewBox='0%200%20640%20480'%3e%3cpath%20fill='%23ffce00'%20d='M0%20320h640v160H0z'/%3e%3cpath%20fill='%23000'%20d='M0%200h640v160H0z'/%3e%3cpath%20fill='%23d00'%20d='M0%20160h640v160H0z'/%3e%3c/svg%3e"
                            width={16}
                            // alt="lang"
                          />{" "}
                          German
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex">
                    <button
                      className="rounded-md focus:outline-none"
                      aria-label="Toggle color mode"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx={12} cy={12} r={5} />
                        <line x1={12} y1={1} x2={12} y2={3} />
                        <line x1={12} y1={21} x2={12} y2={23} />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1={1} y1={12} x2={3} y2={12} />
                        <line x1={21} y1={12} x2={23} y2={12} />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                    </button>
                  </li>
                  <li className="relative inline-block text-left">
                    <button className="relative align-middle rounded-md focus:outline-none">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-emerald-500"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                      <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                        0
                      </span>
                    </button>
                  </li>
                  <li className="relative inline-block text-left">
                    <button className="rounded-full dark:bg-gray-500 bg-emerald-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none">
                      <span>A</span>
                    </button>
                  </li>
                </ul>
              </div>
            </header>
            <main className="h-full overflow-y-auto">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
