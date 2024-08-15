import React from "react";

const Categories = () => {
  return (
    <div>
      <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
        <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
          Category
        </h1>
        <div className="tab tab-enter">
          <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
            <div className="p-4">
              <form className="py-3  grid gap-4 lg:gap-6 xl:gap-6  xl:flex">
                <div className="flex justify-start w-1/2 xl:w-1/2 md:w-full">
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
                <div className="lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0">
                  <div className="w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent opacity-50 cursor-not-allowed w-full rounded-md h-12 text-gray-600 btn-gray"
                      disabled
                      type="button"
                    >
                      <span className="mr-2">
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
                      </span>
                      Bulk Action
                    </button>
                  </div>
                  <div className="w-full md:w-32 lg:w-32 xl:w-32  mr-3 mb-3 lg:mb-0">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent opacity-50 cursor-not-allowed w-full rounded-md h-12 bg-red-500 disabled  btn-red"
                      disabled
                      type="button"
                    >
                      <span className="mr-2">
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
                      </span>
                      Delete
                    </button>
                  </div>
                  <div className="w-full md:w-48 lg:w-48 xl:w-48">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 rounded-md h-12 w-full"
                      type="button"
                    >
                      <span className="mr-2">
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
                          <line x1={12} y1={5} x2={12} y2={19} />
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                      </span>
                      Add Category
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4">
            <div className="p-4">
              <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <input
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                    type="search"
                    placeholder="Search by Category name"
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
        <div className="mb-3">
          <div className="flex flex-wrap items-center float-right">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {" "}
            </label>
            <div
              className="react-switch md:ml-0 ml-3"
              style={{
                position: "relative",
                display: "inline-block",
                textAlign: "left",
                opacity: 1,
                direction: "ltr",
                borderRadius: 14,
                transition: "opacity 0.25s ease 0s",
                touchAction: "none",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                userSelect: "none",
              }}
            >
              <div
                className="react-switch-bg"
                style={{
                  height: 28,
                  width: 115,
                  margin: 0,
                  position: "relative",
                  background: "rgb(14, 159, 110)",
                  borderRadius: 14,
                  cursor: "pointer",
                  transition: "background 0.25s ease 0s",
                }}
              >
                <div
                  style={{
                    height: 28,
                    width: 42,
                    position: "relative",
                    opacity: 0,
                    pointerEvents: "none",
                    transition: "opacity 0.25s ease 0s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 12,
                      color: "white",
                      paddingLeft: 8,
                      paddingTop: 1,
                    }}
                  >
                    {" "}
                    All
                  </div>
                </div>
                <div
                  style={{
                    height: 28,
                    width: 42,
                    position: "absolute",
                    opacity: 1,
                    right: 0,
                    top: 0,
                    pointerEvents: "none",
                    transition: "opacity 0.25s ease 0s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 12,
                      color: "white",
                      paddingRight: 50,
                      paddingTop: 1,
                      marginLeft: "-40px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Parents Only
                  </div>
                </div>
              </div>
              <div
                className="react-switch-handle"
                style={{
                  height: 26,
                  width: 26,
                  background: "rgb(255, 255, 255)",
                  display: "inline-block",
                  cursor: "pointer",
                  borderRadius: "50%",
                  position: "absolute",
                  transform: "translateX(1px)",
                  top: 1,
                  outline: 0,
                  border: 0,
                  transition:
                    "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                }}
              />
              <input
                type="checkbox"
                role="switch"
                aria-checked="false"
                style={{
                  border: 0,
                  clip: "rect(0px, 0px, 0px, 0px)",
                  height: 1,
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: 1,
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg mb-8">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                <tr>
                  <td className="px-4 py-2">
                    <input id="selectAll" name="selectAll" type="checkbox" />
                  </td>
                  <td className="px-4 py-2">ID</td>
                  <td className="px-4 py-2">Icon</td>
                  <td className="px-4 py-2">Name</td>
                  <td className="px-4 py-2">Description</td>
                  <td className="px-4 py-2 text-center">PUBLISHED</td>
                  <td className="px-4 py-2 text-right">ACTIONS</td>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-400">
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="632aca6d4d87ff2494210c24"
                      name="category"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold uppercase text-xs">
                    0c24
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/carp-fish_paxzrt.png"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm ">
                    <a
                      className="text-blue-700"
                      href="/categories/632aca6d4d87ff2494210c24"
                    >
                      Fish &amp; Meat
                    </a>
                  </td>
                  <td className="px-4 py-2 text-sm">Fish &amp; Meat</td>
                  <td className="px-4 py-2 text-center">
                    <div
                      className="react-switch md:ml-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textAlign: "left",
                        opacity: 1,
                        direction: "ltr",
                        borderRadius: "7.5px",
                        transition: "opacity 0.25s ease 0s",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        userSelect: "none",
                      }}
                    >
                      <div
                        className="react-switch-bg"
                        style={{
                          height: 15,
                          width: 30,
                          margin: 0,
                          position: "relative",
                          background: "rgb(47, 133, 90)",
                          borderRadius: "7.5px",
                          cursor: "pointer",
                          transition: "background 0.25s ease 0s",
                        }}
                      >
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "relative",
                            opacity: 1,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "absolute",
                            opacity: 0,
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: 13,
                          width: 13,
                          background: "rgb(255, 255, 255)",
                          display: "inline-block",
                          cursor: "pointer",
                          borderRadius: "50%",
                          position: "absolute",
                          transform: "translateX(16px)",
                          top: 1,
                          outline: 0,
                          border: 0,
                          transition:
                            "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                        }}
                      />
                      <input
                        type="checkbox"
                        role="switch"
                        aria-checked="true"
                        defaultChecked
                        style={{
                          border: 0,
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: 1,
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                      <a
                        className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none"
                        href="/categories/632aca6d4d87ff2494210c24"
                      >
                        <p data-tip="true" data-for="view" className="text-xl">
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
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p data-tip="true" data-for="edit" className="text-xl">
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
                  </td>
                </tr>
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="632aca2b4d87ff2494210be8"
                      name="category"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold uppercase text-xs">
                    0be8
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/cabbage_n59uv3.png"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm ">
                    <a
                      className="text-blue-700"
                      href="/categories/632aca2b4d87ff2494210be8"
                    >
                      Fruits &amp; Vegetable
                    </a>
                  </td>
                  <td className="px-4 py-2 text-sm">Fruits &amp; Vegetable</td>
                  <td className="px-4 py-2 text-center">
                    <div
                      className="react-switch md:ml-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textAlign: "left",
                        opacity: 1,
                        direction: "ltr",
                        borderRadius: "7.5px",
                        transition: "opacity 0.25s ease 0s",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        userSelect: "none",
                      }}
                    >
                      <div
                        className="react-switch-bg"
                        style={{
                          height: 15,
                          width: 30,
                          margin: 0,
                          position: "relative",
                          background: "rgb(229, 62, 62)",
                          borderRadius: "7.5px",
                          cursor: "pointer",
                          transition: "background 0.25s ease 0s",
                        }}
                      >
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "relative",
                            opacity: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "absolute",
                            opacity: 1,
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: 13,
                          width: 13,
                          background: "rgb(255, 255, 255)",
                          display: "inline-block",
                          cursor: "pointer",
                          borderRadius: "50%",
                          position: "absolute",
                          transform: "translateX(1px)",
                          top: 1,
                          outline: 0,
                          border: 0,
                          transition:
                            "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                        }}
                      />
                      <input
                        type="checkbox"
                        role="switch"
                        aria-checked="false"
                        style={{
                          border: 0,
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: 1,
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                      <a
                        className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none"
                        href="/categories/632aca2b4d87ff2494210be8"
                      >
                        <p data-tip="true" data-for="view" className="text-xl">
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
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p data-tip="true" data-for="edit" className="text-xl">
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
                  </td>
                </tr>
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="632aca0b4d87ff2494210bc4"
                      name="category"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold uppercase text-xs">
                    0bc4
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/frying-pan_vglm5c.png"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm ">
                    <a
                      className="text-blue-700"
                      href="/categories/632aca0b4d87ff2494210bc4"
                    >
                      Cooking Essentials
                    </a>
                  </td>
                  <td className="px-4 py-2 text-sm">Cooking Essentials</td>
                  <td className="px-4 py-2 text-center">
                    <div
                      className="react-switch md:ml-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textAlign: "left",
                        opacity: 1,
                        direction: "ltr",
                        borderRadius: "7.5px",
                        transition: "opacity 0.25s ease 0s",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        userSelect: "none",
                      }}
                    >
                      <div
                        className="react-switch-bg"
                        style={{
                          height: 15,
                          width: 30,
                          margin: 0,
                          position: "relative",
                          background: "rgb(229, 62, 62)",
                          borderRadius: "7.5px",
                          cursor: "pointer",
                          transition: "background 0.25s ease 0s",
                        }}
                      >
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "relative",
                            opacity: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "absolute",
                            opacity: 1,
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: 13,
                          width: 13,
                          background: "rgb(255, 255, 255)",
                          display: "inline-block",
                          cursor: "pointer",
                          borderRadius: "50%",
                          position: "absolute",
                          transform: "translateX(1px)",
                          top: 1,
                          outline: 0,
                          border: 0,
                          transition:
                            "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                        }}
                      />
                      <input
                        type="checkbox"
                        role="switch"
                        aria-checked="false"
                        style={{
                          border: 0,
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: 1,
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                      <a
                        className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none"
                        href="/categories/632aca0b4d87ff2494210bc4"
                      >
                        <p data-tip="true" data-for="view" className="text-xl">
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
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p data-tip="true" data-for="edit" className="text-xl">
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
                  </td>
                </tr>
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="632ac9864d87ff2494210b49"
                      name="category"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold uppercase text-xs">
                    0b49
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/spray_pebsjt.png"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm ">
                    <a
                      className="text-blue-700"
                      href="/categories/632ac9864d87ff2494210b49"
                    >
                      Household Tools
                    </a>
                  </td>
                  <td className="px-4 py-2 text-sm">Household Tools</td>
                  <td className="px-4 py-2 text-center">
                    <div
                      className="react-switch md:ml-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textAlign: "left",
                        opacity: 1,
                        direction: "ltr",
                        borderRadius: "7.5px",
                        transition: "opacity 0.25s ease 0s",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        userSelect: "none",
                      }}
                    >
                      <div
                        className="react-switch-bg"
                        style={{
                          height: 15,
                          width: 30,
                          margin: 0,
                          position: "relative",
                          background: "rgb(47, 133, 90)",
                          borderRadius: "7.5px",
                          cursor: "pointer",
                          transition: "background 0.25s ease 0s",
                        }}
                      >
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "relative",
                            opacity: 1,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "absolute",
                            opacity: 0,
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: 13,
                          width: 13,
                          background: "rgb(255, 255, 255)",
                          display: "inline-block",
                          cursor: "pointer",
                          borderRadius: "50%",
                          position: "absolute",
                          transform: "translateX(16px)",
                          top: 1,
                          outline: 0,
                          border: 0,
                          transition:
                            "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                        }}
                      />
                      <input
                        type="checkbox"
                        role="switch"
                        aria-checked="true"
                        defaultChecked
                        style={{
                          border: 0,
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: 1,
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                      <a
                        className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none"
                        href="/categories/632ac9864d87ff2494210b49"
                      >
                        <p data-tip="true" data-for="view" className="text-xl">
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
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p data-tip="true" data-for="edit" className="text-xl">
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
                  </td>
                </tr>
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="632ab4434d87ff2494210b0e"
                      name="category"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold uppercase text-xs">
                    0b0e
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1658340707/category%20icon/cat_tznwmq.png"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm ">
                    <a
                      className="text-blue-700"
                      href="/categories/632ab4434d87ff2494210b0e"
                    >
                      Pet Care
                    </a>
                  </td>
                  <td className="px-4 py-2 text-sm">Pet Care</td>
                  <td className="px-4 py-2 text-center">
                    <div
                      className="react-switch md:ml-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textAlign: "left",
                        opacity: 1,
                        direction: "ltr",
                        borderRadius: "7.5px",
                        transition: "opacity 0.25s ease 0s",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        userSelect: "none",
                      }}
                    >
                      <div
                        className="react-switch-bg"
                        style={{
                          height: 15,
                          width: 30,
                          margin: 0,
                          position: "relative",
                          background: "rgb(47, 133, 90)",
                          borderRadius: "7.5px",
                          cursor: "pointer",
                          transition: "background 0.25s ease 0s",
                        }}
                      >
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "relative",
                            opacity: 1,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "absolute",
                            opacity: 0,
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: 13,
                          width: 13,
                          background: "rgb(255, 255, 255)",
                          display: "inline-block",
                          cursor: "pointer",
                          borderRadius: "50%",
                          position: "absolute",
                          transform: "translateX(16px)",
                          top: 1,
                          outline: 0,
                          border: 0,
                          transition:
                            "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                        }}
                      />
                      <input
                        type="checkbox"
                        role="switch"
                        aria-checked="true"
                        defaultChecked
                        style={{
                          border: 0,
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: 1,
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                      <a
                        className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none"
                        href="/categories/632ab4434d87ff2494210b0e"
                      >
                        <p data-tip="true" data-for="view" className="text-xl">
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
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p data-tip="true" data-for="edit" className="text-xl">
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
                  </td>
                </tr>
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="632ab2864d87ff2494210a8a"
                      name="category"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold uppercase text-xs">
                    0a8a
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/beauty_vfbmzc.png"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm ">
                    <a
                      className="text-blue-700"
                      href="/categories/632ab2864d87ff2494210a8a"
                    >
                      Beauty &amp; Healths
                    </a>
                  </td>
                  <td className="px-4 py-2 text-sm">Beauty &amp; Healths</td>
                  <td className="px-4 py-2 text-center">
                    <div
                      className="react-switch md:ml-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textAlign: "left",
                        opacity: 1,
                        direction: "ltr",
                        borderRadius: "7.5px",
                        transition: "opacity 0.25s ease 0s",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        userSelect: "none",
                      }}
                    >
                      <div
                        className="react-switch-bg"
                        style={{
                          height: 15,
                          width: 30,
                          margin: 0,
                          position: "relative",
                          background: "rgb(47, 133, 90)",
                          borderRadius: "7.5px",
                          cursor: "pointer",
                          transition: "background 0.25s ease 0s",
                        }}
                      >
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "relative",
                            opacity: 1,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "absolute",
                            opacity: 0,
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: 13,
                          width: 13,
                          background: "rgb(255, 255, 255)",
                          display: "inline-block",
                          cursor: "pointer",
                          borderRadius: "50%",
                          position: "absolute",
                          transform: "translateX(16px)",
                          top: 1,
                          outline: 0,
                          border: 0,
                          transition:
                            "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                        }}
                      />
                      <input
                        type="checkbox"
                        role="switch"
                        aria-checked="true"
                        defaultChecked
                        style={{
                          border: 0,
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: 1,
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                      <a
                        className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none"
                        href="/categories/632ab2864d87ff2494210a8a"
                      >
                        <p data-tip="true" data-for="view" className="text-xl">
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
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p data-tip="true" data-for="edit" className="text-xl">
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
                  </td>
                </tr>
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="632ab1e04d87ff2494210a6a"
                      name="category"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold uppercase text-xs">
                    0a6a
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://i.postimg.cc/rmLvfsMC/strawberry-jam-1.png"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm ">
                    <span>Jam &amp; Jelly</span>
                  </td>
                  <td className="px-4 py-2 text-sm">Jam &amp; Jelly</td>
                  <td className="px-4 py-2 text-center">
                    <div
                      className="react-switch md:ml-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textAlign: "left",
                        opacity: 1,
                        direction: "ltr",
                        borderRadius: "7.5px",
                        transition: "opacity 0.25s ease 0s",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        userSelect: "none",
                      }}
                    >
                      <div
                        className="react-switch-bg"
                        style={{
                          height: 15,
                          width: 30,
                          margin: 0,
                          position: "relative",
                          background: "rgb(229, 62, 62)",
                          borderRadius: "7.5px",
                          cursor: "pointer",
                          transition: "background 0.25s ease 0s",
                        }}
                      >
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "relative",
                            opacity: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "absolute",
                            opacity: 1,
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: 13,
                          width: 13,
                          background: "rgb(255, 255, 255)",
                          display: "inline-block",
                          cursor: "pointer",
                          borderRadius: "50%",
                          position: "absolute",
                          transform: "translateX(1px)",
                          top: 1,
                          outline: 0,
                          border: 0,
                          transition:
                            "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                        }}
                      />
                      <input
                        type="checkbox"
                        role="switch"
                        aria-checked="false"
                        style={{
                          border: 0,
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: 1,
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p data-tip="true" data-for="edit" className="text-xl">
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
                  </td>
                </tr>
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="632ab14a4d87ff2494210a29"
                      name="category"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold uppercase text-xs">
                    0a29
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/milk_dcl0dr.png"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm ">
                    <a
                      className="text-blue-700"
                      href="/categories/632ab14a4d87ff2494210a29"
                    >
                      Milk &amp; Dairy
                    </a>
                  </td>
                  <td className="px-4 py-2 text-sm">Milk &amp; Dairy</td>
                  <td className="px-4 py-2 text-center">
                    <div
                      className="react-switch md:ml-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textAlign: "left",
                        opacity: 1,
                        direction: "ltr",
                        borderRadius: "7.5px",
                        transition: "opacity 0.25s ease 0s",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        userSelect: "none",
                      }}
                    >
                      <div
                        className="react-switch-bg"
                        style={{
                          height: 15,
                          width: 30,
                          margin: 0,
                          position: "relative",
                          background: "rgb(47, 133, 90)",
                          borderRadius: "7.5px",
                          cursor: "pointer",
                          transition: "background 0.25s ease 0s",
                        }}
                      >
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "relative",
                            opacity: 1,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "absolute",
                            opacity: 0,
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: 13,
                          width: 13,
                          background: "rgb(255, 255, 255)",
                          display: "inline-block",
                          cursor: "pointer",
                          borderRadius: "50%",
                          position: "absolute",
                          transform: "translateX(16px)",
                          top: 1,
                          outline: 0,
                          border: 0,
                          transition:
                            "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                        }}
                      />
                      <input
                        type="checkbox"
                        role="switch"
                        aria-checked="true"
                        defaultChecked
                        style={{
                          border: 0,
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: 1,
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                      <a
                        className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none"
                        href="/categories/632ab14a4d87ff2494210a29"
                      >
                        <p data-tip="true" data-for="view" className="text-xl">
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
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p data-tip="true" data-for="edit" className="text-xl">
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
                  </td>
                </tr>
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="632ab0334d87ff24942109c1"
                      name="category"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold uppercase text-xs">
                    09c1
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/juice_p5gv5k.png"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm ">
                    <a
                      className="text-blue-700"
                      href="/categories/632ab0334d87ff24942109c1"
                    >
                      Drinks
                    </a>
                  </td>
                  <td className="px-4 py-2 text-sm">Drinks</td>
                  <td className="px-4 py-2 text-center">
                    <div
                      className="react-switch md:ml-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textAlign: "left",
                        opacity: 1,
                        direction: "ltr",
                        borderRadius: "7.5px",
                        transition: "opacity 0.25s ease 0s",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        userSelect: "none",
                      }}
                    >
                      <div
                        className="react-switch-bg"
                        style={{
                          height: 15,
                          width: 30,
                          margin: 0,
                          position: "relative",
                          background: "rgb(47, 133, 90)",
                          borderRadius: "7.5px",
                          cursor: "pointer",
                          transition: "background 0.25s ease 0s",
                        }}
                      >
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "relative",
                            opacity: 1,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "absolute",
                            opacity: 0,
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: 13,
                          width: 13,
                          background: "rgb(255, 255, 255)",
                          display: "inline-block",
                          cursor: "pointer",
                          borderRadius: "50%",
                          position: "absolute",
                          transform: "translateX(16px)",
                          top: 1,
                          outline: 0,
                          border: 0,
                          transition:
                            "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                        }}
                      />
                      <input
                        type="checkbox"
                        role="switch"
                        aria-checked="true"
                        defaultChecked
                        style={{
                          border: 0,
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: 1,
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                      <a
                        className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none"
                        href="/categories/632ab0334d87ff24942109c1"
                      >
                        <p data-tip="true" data-for="view" className="text-xl">
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
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p data-tip="true" data-for="edit" className="text-xl">
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
                  </td>
                </tr>
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="632aae414d87ff2494210945"
                      name="category"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold uppercase text-xs">
                    0945
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/bagel_mt3fod.png"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm ">
                    <a
                      className="text-blue-700"
                      href="/categories/632aae414d87ff2494210945"
                    >
                      Breakfast
                    </a>
                  </td>
                  <td className="px-4 py-2 text-sm">Breakfast</td>
                  <td className="px-4 py-2 text-center">
                    <div
                      className="react-switch md:ml-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textAlign: "left",
                        opacity: 1,
                        direction: "ltr",
                        borderRadius: "7.5px",
                        transition: "opacity 0.25s ease 0s",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        userSelect: "none",
                      }}
                    >
                      <div
                        className="react-switch-bg"
                        style={{
                          height: 15,
                          width: 30,
                          margin: 0,
                          position: "relative",
                          background: "rgb(47, 133, 90)",
                          borderRadius: "7.5px",
                          cursor: "pointer",
                          transition: "background 0.25s ease 0s",
                        }}
                      >
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "relative",
                            opacity: 1,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: 15,
                            width: 17,
                            position: "absolute",
                            opacity: 0,
                            right: 0,
                            top: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.25s ease 0s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: 13,
                          width: 13,
                          background: "rgb(255, 255, 255)",
                          display: "inline-block",
                          cursor: "pointer",
                          borderRadius: "50%",
                          position: "absolute",
                          transform: "translateX(16px)",
                          top: 1,
                          outline: 0,
                          border: 0,
                          transition:
                            "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s",
                        }}
                      />
                      <input
                        type="checkbox"
                        role="switch"
                        aria-checked="true"
                        defaultChecked
                        style={{
                          border: 0,
                          clip: "rect(0px, 0px, 0px, 0px)",
                          height: 1,
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                      <a
                        className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none"
                        href="/categories/632aae414d87ff2494210945"
                      >
                        <p data-tip="true" data-for="view" className="text-xl">
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
                      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                        <p data-tip="true" data-for="edit" className="text-xl">
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
            <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
              <span className="flex items-center font-semibold tracking-wide uppercase">
                Showing 1-10 of 10
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
                        className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent opacity-50 cursor-not-allowed"
                        disabled
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

export default Categories;
