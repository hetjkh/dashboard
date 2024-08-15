import React from "react";

const StoreSet = () => {
  return (
    <div>
      <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
        <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
          Store Settings
        </h1>
        <div className="tab tab-enter">
          <div className="sm:container md:p-6 p-4 w-full mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
            <form>
              <div className="grid grid-cols-12 font-sans">
                <div className="col-span-12 md:col-span-12 lg:col-span-12 mr-3">
                  <div className="lg:px-6 pt-4 lg:pl-40 lg:pr-40 md:pl-5 md:pr-5 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable Cash On Delivery <br />
                        <span className="text-xs font-normal text-gray-600 dark:text-gray-400">
                          (This is enabled by default)
                        </span>
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" />
                            <div
                              className="react-switch md:ml-0 ml-3"
                              style={{
                                position: "relative",
                                display: "inline-block",
                                textAlign: "left",
                                opacity: 1,
                                direction: "ltr",
                                borderRadius: 15,
                                transition: "opacity 0.25s ease 0s",
                                touchAction: "none",
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                userSelect: "none",
                              }}
                            >
                              <div
                                className="react-switch-bg"
                                style={{
                                  height: 30,
                                  width: 80,
                                  margin: 0,
                                  position: "relative",
                                  background: "rgb(47, 133, 90)",
                                  borderRadius: 15,
                                  cursor: "pointer",
                                  transition: "background 0.25s ease 0s",
                                }}
                              >
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingLeft: 8,
                                      paddingTop: 1,
                                    }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingRight: 5,
                                      paddingTop: 1,
                                    }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                              <div
                                className="react-switch-handle"
                                style={{
                                  height: 28,
                                  width: 28,
                                  background: "rgb(255, 255, 255)",
                                  display: "inline-block",
                                  cursor: "pointer",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  transform: "translateX(51px)",
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
                                id="cod"
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable Stripe Payment
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" />
                            <div
                              className="react-switch md:ml-0 ml-3"
                              style={{
                                position: "relative",
                                display: "inline-block",
                                textAlign: "left",
                                opacity: 1,
                                direction: "ltr",
                                borderRadius: 15,
                                transition: "opacity 0.25s ease 0s",
                                touchAction: "none",
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                userSelect: "none",
                              }}
                            >
                              <div
                                className="react-switch-bg"
                                style={{
                                  height: 30,
                                  width: 80,
                                  margin: 0,
                                  position: "relative",
                                  background: "rgb(47, 133, 90)",
                                  borderRadius: 15,
                                  cursor: "pointer",
                                  transition: "background 0.25s ease 0s",
                                }}
                              >
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingLeft: 8,
                                      paddingTop: 1,
                                    }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingRight: 5,
                                      paddingTop: 1,
                                    }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                              <div
                                className="react-switch-handle"
                                style={{
                                  height: 28,
                                  width: 28,
                                  background: "rgb(255, 255, 255)",
                                  display: "inline-block",
                                  cursor: "pointer",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  transform: "translateX(51px)",
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
                                id="stripe"
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mb-8"
                      style={{
                        height: "auto",
                        transition: "all 0.6s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Stripe Key
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="stripe_key"
                            placeholder="Stripe Key"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Stripe Secret
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="stripe_secret"
                            placeholder="Stripe Secret"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable RazorPay
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" />
                            <div
                              className="react-switch md:ml-0 ml-3"
                              style={{
                                position: "relative",
                                display: "inline-block",
                                textAlign: "left",
                                opacity: 1,
                                direction: "ltr",
                                borderRadius: 15,
                                transition: "opacity 0.25s ease 0s",
                                touchAction: "none",
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                userSelect: "none",
                              }}
                            >
                              <div
                                className="react-switch-bg"
                                style={{
                                  height: 30,
                                  width: 80,
                                  margin: 0,
                                  position: "relative",
                                  background: "rgb(47, 133, 90)",
                                  borderRadius: 15,
                                  cursor: "pointer",
                                  transition: "background 0.25s ease 0s",
                                }}
                              >
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingLeft: 8,
                                      paddingTop: 1,
                                    }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingRight: 5,
                                      paddingTop: 1,
                                    }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                              <div
                                className="react-switch-handle"
                                style={{
                                  height: 28,
                                  width: 28,
                                  background: "rgb(255, 255, 255)",
                                  display: "inline-block",
                                  cursor: "pointer",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  transform: "translateX(51px)",
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
                                id="razorpay"
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mb-8"
                      style={{
                        height: "auto",
                        transition: "all 0.6s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          RazorPay ID
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="razorpay_id"
                            placeholder="RazorPay ID"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          RazorPay Secret
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="razorpay_secret"
                            placeholder="RazorPay Secret"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable Google Login
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" />
                            <div
                              className="react-switch md:ml-0 ml-3"
                              style={{
                                position: "relative",
                                display: "inline-block",
                                textAlign: "left",
                                opacity: 1,
                                direction: "ltr",
                                borderRadius: 15,
                                transition: "opacity 0.25s ease 0s",
                                touchAction: "none",
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                userSelect: "none",
                              }}
                            >
                              <div
                                className="react-switch-bg"
                                style={{
                                  height: 30,
                                  width: 80,
                                  margin: 0,
                                  position: "relative",
                                  background: "rgb(47, 133, 90)",
                                  borderRadius: 15,
                                  cursor: "pointer",
                                  transition: "background 0.25s ease 0s",
                                }}
                              >
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingLeft: 8,
                                      paddingTop: 1,
                                    }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingRight: 5,
                                      paddingTop: 1,
                                    }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                              <div
                                className="react-switch-handle"
                                style={{
                                  height: 28,
                                  width: 28,
                                  background: "rgb(255, 255, 255)",
                                  display: "inline-block",
                                  cursor: "pointer",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  transform: "translateX(51px)",
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
                                id="google_login"
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mb-8"
                      style={{
                        height: "auto",
                        transition: "all 0.6s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Google Client ID
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="google_id"
                            placeholder="Google Client ID"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Google Secret Key
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="google_secret"
                            placeholder="Google Secret Key"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable Github Login
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" />
                            <div
                              className="react-switch md:ml-0 ml-3"
                              style={{
                                position: "relative",
                                display: "inline-block",
                                textAlign: "left",
                                opacity: 1,
                                direction: "ltr",
                                borderRadius: 15,
                                transition: "opacity 0.25s ease 0s",
                                touchAction: "none",
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                userSelect: "none",
                              }}
                            >
                              <div
                                className="react-switch-bg"
                                style={{
                                  height: 30,
                                  width: 80,
                                  margin: 0,
                                  position: "relative",
                                  background: "rgb(47, 133, 90)",
                                  borderRadius: 15,
                                  cursor: "pointer",
                                  transition: "background 0.25s ease 0s",
                                }}
                              >
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingLeft: 8,
                                      paddingTop: 1,
                                    }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingRight: 5,
                                      paddingTop: 1,
                                    }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                              <div
                                className="react-switch-handle"
                                style={{
                                  height: 28,
                                  width: 28,
                                  background: "rgb(255, 255, 255)",
                                  display: "inline-block",
                                  cursor: "pointer",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  transform: "translateX(51px)",
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
                                id="github_login"
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
                      </div>
                    </div>
                    <div
                      className="mb-8"
                      style={{
                        height: "auto",
                        transition: "all 0.6s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Github ID
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="github_id"
                            placeholder="Github ID"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Github Secret
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="github_secret"
                            placeholder="Github Secret"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable Facebook Login
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" />
                            <div
                              className="react-switch md:ml-0 ml-3"
                              style={{
                                position: "relative",
                                display: "inline-block",
                                textAlign: "left",
                                opacity: 1,
                                direction: "ltr",
                                borderRadius: 15,
                                transition: "opacity 0.25s ease 0s",
                                touchAction: "none",
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                userSelect: "none",
                              }}
                            >
                              <div
                                className="react-switch-bg"
                                style={{
                                  height: 30,
                                  width: 80,
                                  margin: 0,
                                  position: "relative",
                                  background: "rgb(47, 133, 90)",
                                  borderRadius: 15,
                                  cursor: "pointer",
                                  transition: "background 0.25s ease 0s",
                                }}
                              >
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingLeft: 8,
                                      paddingTop: 1,
                                    }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingRight: 5,
                                      paddingTop: 1,
                                    }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                              <div
                                className="react-switch-handle"
                                style={{
                                  height: 28,
                                  width: 28,
                                  background: "rgb(255, 255, 255)",
                                  display: "inline-block",
                                  cursor: "pointer",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  transform: "translateX(51px)",
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
                                id="facebook_login"
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
                      </div>
                    </div>
                    <div
                      className="mb-8"
                      style={{
                        height: "auto",
                        transition: "all 0.6s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Facebook ID
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="facebook_id"
                            placeholder="Facebook ID"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Facebook Secret
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="facebook_secret"
                            placeholder="Facebook Secret"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable Goggle Analytics
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" />
                            <div
                              className="react-switch md:ml-0 ml-3"
                              style={{
                                position: "relative",
                                display: "inline-block",
                                textAlign: "left",
                                opacity: 1,
                                direction: "ltr",
                                borderRadius: 15,
                                transition: "opacity 0.25s ease 0s",
                                touchAction: "none",
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                userSelect: "none",
                              }}
                            >
                              <div
                                className="react-switch-bg"
                                style={{
                                  height: 30,
                                  width: 80,
                                  margin: 0,
                                  position: "relative",
                                  background: "rgb(47, 133, 90)",
                                  borderRadius: 15,
                                  cursor: "pointer",
                                  transition: "background 0.25s ease 0s",
                                }}
                              >
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingLeft: 8,
                                      paddingTop: 1,
                                    }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingRight: 5,
                                      paddingTop: 1,
                                    }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                              <div
                                className="react-switch-handle"
                                style={{
                                  height: 28,
                                  width: 28,
                                  background: "rgb(255, 255, 255)",
                                  display: "inline-block",
                                  cursor: "pointer",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  transform: "translateX(51px)",
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
                                id="google_analytics"
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
                      </div>
                    </div>
                    <div
                      className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6"
                      style={{
                        height: "auto",
                        transition: "all 0.6s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Google Analytic Key
                      </label>
                      <div className="sm:col-span-4">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="password"
                          name="google_analytic_key"
                          placeholder="Google Analytic Key"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable Tawk Chat
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" />
                            <div
                              className="react-switch md:ml-0 ml-3"
                              style={{
                                position: "relative",
                                display: "inline-block",
                                textAlign: "left",
                                opacity: 1,
                                direction: "ltr",
                                borderRadius: 15,
                                transition: "opacity 0.25s ease 0s",
                                touchAction: "none",
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                userSelect: "none",
                              }}
                            >
                              <div
                                className="react-switch-bg"
                                style={{
                                  height: 30,
                                  width: 80,
                                  margin: 0,
                                  position: "relative",
                                  background: "rgb(47, 133, 90)",
                                  borderRadius: 15,
                                  cursor: "pointer",
                                  transition: "background 0.25s ease 0s",
                                }}
                              >
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingLeft: 8,
                                      paddingTop: 1,
                                    }}
                                  >
                                    Yes
                                  </div>
                                </div>
                                <div
                                  style={{
                                    height: 30,
                                    width: 45,
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
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                      fontSize: 14,
                                      color: "white",
                                      paddingRight: 5,
                                      paddingTop: 1,
                                    }}
                                  >
                                    No
                                  </div>
                                </div>
                              </div>
                              <div
                                className="react-switch-handle"
                                style={{
                                  height: 28,
                                  width: 28,
                                  background: "rgb(255, 255, 255)",
                                  display: "inline-block",
                                  cursor: "pointer",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  transform: "translateX(51px)",
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
                                id="tawk_chat"
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
                      </div>
                    </div>
                    <div
                      className="mb-8"
                      style={{
                        height: "auto",
                        transition: "all 0.6s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Tawk Chat Property ID
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="tawk_chat_property_id"
                            placeholder="Tawk Chat Property ID"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Tawk Chat Widget ID
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="password"
                            name="tawk_chat_widget_id"
                            placeholder="Tawk Chat Widget ID"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row-reverse pb-6">
                      <button
                        className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 px-8"
                        type="submit"
                      >
                        {" "}
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSet;
