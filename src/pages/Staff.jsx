import React from "react";

const Staff = () => {
  return (
    <div>
      <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
        <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
          All Staff{" "}
        </h1>
        <div className="tab tab-enter">
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
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
                    <option value="All" hidden>
                      Staff Role
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Cashier">Cashier</option>
                    <option value="Super Admin">Super Admin</option>
                  </select>
                </div>
                <div className="w-full md:w-56 lg:w-56 xl:w-56">
                  <button
                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full rounded-md h-12"
                    type="button"
                  >
                    <span className="mr-3">
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
                    Add Staff
                  </button>
                </div>
                <div className="mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <div className="w-full mx-1">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full bg-emerald-700"
                      type="submit"
                    >
                      Filter
                    </button>
                  </div>
                  <div className="w-full">
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
              </form>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg mb-8 rounded-b-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                <tr>
                  <td className="px-4 py-2">Name</td>
                  <td className="px-4 py-2">Email</td>
                  <td className="px-4 py-2">Contact</td>
                  <td className="px-4 py-2">Joining Date</td>
                  <td className="px-4 py-2">Role</td>
                  <td className="px-4 py-2 text-center">STATUS</td>
                  <td className="px-4 py-2 text-center">PUBLISHED</td>
                  <td className="px-4 py-2 text-right">ACTIONS</td>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-400">
                <tr className>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          alt="staff"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium" />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">abdullacelil00@gmail.com</span>{" "}
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm " />
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Jul 31, 2024</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">Admin</span>
                  </td>
                  <td className="px-4 py-2 text-center text-xs">
                    <span className="font-serif">
                      <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-600">
                        Inactive
                      </span>
                    </span>
                  </td>
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
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src
                          alt="staff"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium">Admins</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">admin@gmail.com</span>{" "}
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm ">360-943-7332</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Jul 24, 2024</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">Admin</span>
                  </td>
                  <td className="px-4 py-2 text-center text-xs">
                    <span className="font-serif">
                      <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-600">
                        Inactive
                      </span>
                    </span>
                  </td>
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
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.ibb.co/3zs3H7z/team-5.jpg"
                          alt="staff"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium">
                          Marion V. Parker
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">marion@gmail.com</span>{" "}
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm ">713-675-8813</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Jul 29, 2024</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">Admin</span>
                  </td>
                  <td className="px-4 py-2 text-center text-xs">
                    <span className="font-serif">
                      <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-600">
                        Inactive
                      </span>
                    </span>
                  </td>
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
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.ibb.co/XjwBLcK/team-2.jpg"
                          alt="staff"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium">
                          Stacey J. Meikle
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">stacey@gmail.com</span>{" "}
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm ">616-738-0407</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Jul 29, 2024</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">CEO</span>
                  </td>
                  <td className="px-4 py-2 text-center text-xs">
                    <span className="font-serif">
                      <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                        Active
                      </span>
                    </span>
                  </td>
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
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.ibb.co/GWVWYNn/team-7.jpg"
                          alt="staff"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium">Shawn E. Palmer</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">shawn@gmail.com</span>{" "}
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm ">949-202-2913</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Jul 29, 2024</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">Manager</span>
                  </td>
                  <td className="px-4 py-2 text-center text-xs">
                    <span className="font-serif">
                      <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                        Active
                      </span>
                    </span>
                  </td>
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
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.ibb.co/SNN7JCX/team-6.jpg"
                          alt="staff"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium">Corrie H. Cates</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">corrie@gmail.com</span>{" "}
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm ">914-623-6873</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Jul 29, 2024</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">Accountant</span>
                  </td>
                  <td className="px-4 py-2 text-center text-xs">
                    <span className="font-serif">
                      <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                        Active
                      </span>
                    </span>
                  </td>
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
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.ibb.co/m5B0hK4/team-8.jpg"
                          alt="staff"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium">Alice B. Porter</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">alice@gmail.com</span>{" "}
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm ">708-488-9728</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Jul 29, 2024</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">Driver</span>
                  </td>
                  <td className="px-4 py-2 text-center text-xs">
                    <span className="font-serif">
                      <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                        Active
                      </span>
                    </span>
                  </td>
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
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.ibb.co/d294W8Y/team-4.jpg"
                          alt="staff"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium">
                          Dorothy R. Brown
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">dorothy@gmail.com</span>{" "}
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm ">708-628-3122</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Jul 29, 2024</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">
                      Security Guard
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center text-xs">
                    <span className="font-serif">
                      <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                        Active
                      </span>
                    </span>
                  </td>
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
                Showing 1-8 of 8
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

export default Staff;
