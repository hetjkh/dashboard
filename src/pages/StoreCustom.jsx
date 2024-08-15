import React from "react";

const StoreCustom = () => {
  return (
    <div>
      <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
        <div className="flex justify-between text-center items-center">
          <div>
            <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
              Store Customizations
            </h1>
          </div>
          <div className="pb-4">
            <select
              name="language"
              className="block w-20 h-10 border border-emerald-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700"
            >
              <option value="en" hidden>
                en
              </option>
              <option value="fr">fr </option>
              <option value="de">de </option>
              <option value="en">en </option>
            </select>
          </div>
        </div>
        <ul className="sm:flex grid grid-cols-3 text-sm font-medium text-center text-gray-500 sm:divide-x divide-gray-200 rounded-lg dark:divide-gray-700 dark:text-gray-400 mb-5">
          <li>
            <a
              className="inline-block w-full px-4 py-3 shadow-md bg-emerald-500 text-white dark:bg-emerald-500 dark:text-white hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500 sm:rounded-l-md rounded-tl-md"
              href="/store/customization?storeTab=home-settings"
            >
              <span className="text-sm font-medium font-serif xl:inline-block hidden">
                Home Page
              </span>
              <span className="text-sm font-medium font-serif xl:hidden">
                Home
              </span>
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500"
              href="/store/customization?storeTab=single-setting"
            >
              <span className="text-sm font-medium font-serif xl:inline-block hidden">
                Product Slug Page
              </span>
              <span className="text-sm font-medium font-serif xl:hidden">
                Setting
              </span>
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500 focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500 sm:rounded-tr-none rounded-tr-md"
              href="/store/customization?storeTab=about-us-setting"
            >
              <span className="text-sm font-medium font-serif xl:inline-block hidden">
                About Us
              </span>
              <span className="text-sm font-medium font-serif xl:hidden">
                About
              </span>
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500"
              href="/store/customization?storeTab=privacy-setting"
            >
              <span className="text-sm font-medium font-serif xl:inline-block hidden">
                Privacy Policy and T&amp;C
              </span>
              <span className="text-sm font-medium font-serif xl:hidden">
                Privacy
              </span>
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500"
              href="/store/customization?storeTab=FAQ-setting"
            >
              <span className="text-sm font-medium font-serif xl:inline-block hidden">
                FAQs
              </span>
              <span className="text-sm font-medium font-serif xl:hidden">
                FAQs
              </span>
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500"
              href="/store/customization?storeTab=offers-setting"
            >
              <span className="text-sm font-medium font-serif xl:inline-block hidden">
                Offers
              </span>
              <span className="text-sm font-medium font-serif xl:hidden">
                Offers
              </span>
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500 sm:rounded-bl-none rounded-bl-md"
              href="/store/customization?storeTab=contact-us-setting"
            >
              <span className="text-sm font-medium font-serif xl:inline-block hidden">
                Contact Us
              </span>
              <span className="text-sm font-medium font-serif xl:hidden">
                Contact
              </span>
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500 sm:rounded-bl-none rounded-bl-md"
              href="/store/customization?storeTab=checkout-setting"
            >
              <span className="text-sm font-medium font-serif xl:inline-block hidden">
                Checkout
              </span>
              <span className="text-sm font-medium font-serif xl:hidden">
                Checkout
              </span>
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500 sm:rounded-bl-none rounded-bl-md"
              href="/store/customization?storeTab=dashboard-setting"
            >
              <span className="text-sm font-medium font-serif xl:inline-block hidden">
                Dashboard Setting
              </span>
              <span className="text-sm font-medium font-serif xl:hidden">
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500"
              href="/store/customization?storeTab=seo-settings"
            >
              <span className="text-sm font-medium font-serif xl:inline-block hidden">
                Seo Settings
              </span>
              <span className="text-sm font-medium font-serif xl:hidden">
                Seo
              </span>
            </a>
          </li>
        </ul>
        <div className="tab tab-enter">
          <div className="sm:container md:p-6 p-4 mx-auto bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg">
            <form>
              <div className="sticky top-0 z-20 flex justify-end">
                <button
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-10 px-6 "
                  type="submit"
                >
                  {" "}
                  Update
                </button>
              </div>
              <div className="grid grid-cols-12 font-sans pr-4">
                <div className="col-span-12 md:col-span-12 lg:col-span-12">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    Header
                  </div>
                  <hr className="md:mb-6 mb-3" />
                  <div className="flex-grow scrollbar-hide w-full max-h-full xl:px-10">
                    <div className="inline-flex md:text-base text-sm my-3 text-gray-500 dark:text-gray-400">
                      <strong>Header Contacts</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Header Text
                      </label>
                      <div className="sm:col-span-4">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="help_text"
                          placeholder="We are available 24/7, Need help?"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Phone Number
                      </label>
                      <div className="sm:col-span-4">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="phone_number"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                      <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Header Logo
                      </label>
                      <div className="sm:col-span-4">
                        <div className="w-full text-center">
                          <div
                            className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                            role="presentation"
                            tabIndex={0}
                          >
                            <input
                              accept="image/*,.jpeg,.jpg,.png,.webp"
                              type="file"
                              tabIndex={-1}
                              style={{ display: "none" }}
                            />
                            <span className="mx-auto flex justify-center">
                              <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-3xl text-emerald-500"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <polyline points="16 16 12 12 8 16" />
                                <line x1={12} y1={12} x2={12} y2={21} />
                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                <polyline points="16 16 12 12 8 16" />
                              </svg>
                            </span>
                            <p className="text-sm mt-2">
                              Drag your images here
                            </p>
                            <em className="text-xs text-gray-400">
                              (Only *.jpeg, *.webp and *.png images will be
                              accepted)
                            </em>
                          </div>
                          <div className="text-emerald-500" />
                          <aside className="flex flex-row flex-wrap mt-4">
                            <div className="relative">
                              {" "}
                              <img
                                className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                src="https://res.cloudinary.com/ahossain/image/upload/v1697687802/settings/logo-light_hls14v.svg"
                                alt="product"
                              />
                              <button
                                type="button"
                                className="absolute top-0 right-0 text-red-500 focus:outline-none"
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
                                  <circle cx={12} cy={12} r={10} />
                                  <line x1={15} y1={9} x2={9} y2={15} />
                                  <line x1={9} y1={9} x2={15} y2={15} />
                                </svg>
                              </button>
                            </div>
                          </aside>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-5 sm:grid-cols-6 scrollbar-hide w-full max-h-full pb-0">
                    <div className="md:col-span-1 sm:col-span-2" />
                    <div className="sm:col-span-4 md:pl-3 sm:pl-2">
                      <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative">
                        <strong>Menu Editor</strong>
                      </div>
                      <hr className="md:mb-12 mb-3" />
                      <div className="grid grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Categories
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="categories"
                            placeholder="Categories"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            About Us
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="about_us"
                            placeholder="About Us"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Contact Us
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="contact_us"
                            placeholder="Contact Us"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Offers
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="offers"
                            placeholder="Offers"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            FAQ
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="faq"
                            placeholder="FAQ"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Privacy Policy
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="privacy_policy"
                            placeholder="Privacy Policy"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Terms &amp; Conditions
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="term_and_condition"
                            placeholder="Terms & Conditions"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Pages
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="pages"
                            placeholder="Pages"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            My Account
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="my_account"
                            placeholder="My Account"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Login
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="login"
                            placeholder="Login"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Logout
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="logout"
                            placeholder="Logout"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Checkout
                          </label>
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="checkout"
                            placeholder="Checkout"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <div>
                          <h4 className="font-medium font-serif md:text-base text-sm mb-2 dark:text-gray-300">
                            Categories
                          </h4>
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
                                  id
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
                        <div>
                          <h4 className="font-medium font-serif md:text-base text-sm mb-2 dark:text-gray-300">
                            About Us
                          </h4>
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
                                  id
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
                        <div>
                          <h4 className="font-medium font-serif md:text-base text-sm mb-2 dark:text-gray-300">
                            Contact Us
                          </h4>
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
                                  id
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
                        <div>
                          <h4 className="font-medium font-serif md:text-base text-sm mb-2 dark:text-gray-300">
                            Offers
                          </h4>
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
                                  id
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
                        <div>
                          <h4 className="font-medium font-serif md:text-base text-sm mb-2 dark:text-gray-300">
                            FAQ
                          </h4>
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
                                  id
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
                        <div>
                          <h4 className="font-medium font-serif md:text-base text-sm mb-2 dark:text-gray-300">
                            Privacy Policy
                          </h4>
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
                                  id
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
                        <div>
                          <h4 className="font-medium font-serif md:text-base text-sm mb-2 dark:text-gray-300">
                            Terms &amp; Conditions
                          </h4>
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
                                  id
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
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 mt-5">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>{" "}
                    Main Slider
                  </div>
                  <hr className="mb-3" />
                  <div className="flex-grow scrollbar-hide w-full max-h-full xl:px-10">
                    <div className="react-tabs" data-rttabs="true">
                      <div className="react-tabs" data-rttabs="true">
                        <ul className="react-tabs__tab-list" role="tablist">
                          <li
                            className="react-tabs__tab react-tabs__tab--selected"
                            role="tab"
                            id="tab:r3:0"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-controls="panel:r3:0"
                            tabIndex={0}
                            data-rttab="true"
                          >
                            Slider 1
                          </li>
                          <li
                            className="react-tabs__tab"
                            role="tab"
                            id="tab:r3:1"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-controls="panel:r3:1"
                            data-rttab="true"
                          >
                            Slider 2
                          </li>
                          <li
                            className="react-tabs__tab"
                            role="tab"
                            id="tab:r3:2"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-controls="panel:r3:2"
                            data-rttab="true"
                          >
                            Slider 3
                          </li>
                          <li
                            className="react-tabs__tab"
                            role="tab"
                            id="tab:r3:3"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-controls="panel:r3:3"
                            data-rttab="true"
                          >
                            Slider 4
                          </li>
                          <li
                            className="react-tabs__tab"
                            role="tab"
                            id="tab:r3:4"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-controls="panel:r3:4"
                            data-rttab="true"
                          >
                            Slider 5
                          </li>
                          <li
                            className="react-tabs__tab"
                            role="tab"
                            id="tab:r3:5"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-controls="panel:r3:5"
                            data-rttab="true"
                          >
                            Options
                          </li>
                        </ul>
                        <div
                          className="md:mt-10 mt-3 react-tabs__tab-panel--selected"
                          role="tabpanel"
                          id="panel:r3:0"
                          aria-labelledby="tab:r3:0"
                        >
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Images
                            </label>
                            <div className="sm:col-span-4">
                              <div className="w-full text-center">
                                <div
                                  className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                                  role="presentation"
                                  tabIndex={0}
                                >
                                  <input
                                    accept="image/*,.jpeg,.jpg,.png,.webp"
                                    type="file"
                                    tabIndex={-1}
                                    style={{ display: "none" }}
                                  />
                                  <span className="mx-auto flex justify-center">
                                    <svg
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth={2}
                                      viewBox="0 0 24 24"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-3xl text-emerald-500"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <polyline points="16 16 12 12 8 16" />
                                      <line x1={12} y1={12} x2={12} y2={21} />
                                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                      <polyline points="16 16 12 12 8 16" />
                                    </svg>
                                  </span>
                                  <p className="text-sm mt-2">
                                    Drag your images here
                                  </p>
                                  <em className="text-xs text-gray-400">
                                    (Only *.jpeg, *.webp and *.png images will
                                    be accepted)
                                  </em>
                                </div>
                                <div className="text-emerald-500" />
                                <aside className="flex flex-row flex-wrap mt-4">
                                  <div className="relative">
                                    {" "}
                                    <img
                                      className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                      src="https://res.cloudinary.com/ahossain/image/upload/v1697688491/settings/slider-1_rl8qdc.jpg"
                                      alt="product"
                                    />
                                    <button
                                      type="button"
                                      className="absolute top-0 right-0 text-red-500 focus:outline-none"
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
                                        <circle cx={12} cy={12} r={10} />
                                        <line x1={15} y1={9} x2={9} y2={15} />
                                        <line x1={9} y1={9} x2={15} y2={15} />
                                      </svg>
                                    </button>
                                  </div>
                                </aside>
                              </div>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 ">
                              Slider Title
                            </label>
                            <div className="sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                                type="text"
                                name="slider_title"
                                placeholder="Slider Title"
                                autoComplete="new-password"
                                defaultValue
                              />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Description
                            </label>
                            <div className="sm:col-span-4">
                              <textarea
                                className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                                name="slider_description"
                                type="text"
                                placeholder="Slider Description"
                                rows={4}
                                spellCheck="false"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Button Name
                            </label>
                            <div className="sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                                type="text"
                                name="slider_button_name"
                                placeholder="Slider Button Name"
                                autoComplete="new-password"
                                defaultValue
                              />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Button Link
                            </label>
                            <div className="sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                                type="text"
                                name="slider_button_link"
                                placeholder="Slider Button Link"
                                autoComplete="new-password"
                                defaultValue
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-tabs__tab-panel"
                          role="tabpanel"
                          id="panel:r3:1"
                          aria-labelledby="tab:r3:1"
                        />
                        <div
                          className="react-tabs__tab-panel"
                          role="tabpanel"
                          id="panel:r3:2"
                          aria-labelledby="tab:r3:2"
                        />
                        <div
                          className="react-tabs__tab-panel"
                          role="tabpanel"
                          id="panel:r3:3"
                          aria-labelledby="tab:r3:3"
                        />
                        <div
                          className="react-tabs__tab-panel"
                          role="tabpanel"
                          id="panel:r3:4"
                          aria-labelledby="tab:r3:4"
                        />
                        <div
                          className="react-tabs__tab-panel"
                          role="tabpanel"
                          id="panel:r3:5"
                          aria-labelledby="tab:r3:5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 mt-5">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    Discount Coupon Code Box
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Show / Hide
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
                                id
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
                      className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 relative transition-2"
                      style={{
                        height: "auto",
                        transition: "all 0.4s ease-out 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Home Page Discount Title
                      </label>
                      <div className="sm:col-span-4">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="discount_title"
                          placeholder="Home Page Discount Title"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Super Discount Active Coupon Code
                      </label>
                      <div className="sm:col-span-4">
                        <div className="react-tag-input">
                          <div className="react-tag-input__tag">
                            <div className="react-tag-input__tag__content">
                              WINTER21
                            </div>
                            <div className="react-tag-input__tag__remove" />
                          </div>
                          <div className="react-tag-input__tag">
                            <div className="react-tag-input__tag__content">
                              OCTOBER21
                            </div>
                            <div className="react-tag-input__tag__remove" />
                          </div>
                          <input
                            className="react-tag-input__input"
                            placeholder="Enter the coupon code from coupon table and click inter"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "hidden",
                        opacity: 0,
                      }}
                    >
                      <div>
                        <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400">
                          <div className="relative">
                            <strong>Slider Full Width</strong>
                          </div>
                        </div>
                        <hr className="mb-4 mt-2" />
                        <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 ">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Slider Full Width
                          </label>
                          <div className="sm:col-span-4 ">
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
                                      background: "rgb(229, 62, 62)",
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
                                    id
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3 md:mt-0 mt-10">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>{" "}
                    Promotion Banner
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.4s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promotion_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Description
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="promotion_description"
                            type="text"
                            placeholder="Promotion Description"
                            rows={4}
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button Name
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promotion_button_name"
                            placeholder="Button Name"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button Link
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promotion_button_link"
                            placeholder="https://kachabazar-store.vercel.app/search?category=fruits-vegetable&_id=632aca2b4d87ff2494210be8"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:mt-0 mt-15">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3 relative">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>{" "}
                    Featured Categories
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="feature_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Featured Categories
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="feature_description"
                            type="text"
                            placeholder="Featured Categories"
                            rows={4}
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Products Limit
                        </label>
                        <div className="sm:col-span-4">
                          <select
                            className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5"
                            name="feature_product_limit"
                          >
                            <option value hidden>
                              Select Products Limit
                            </option>
                            <option value={6}>6</option>
                            <option value={12}>12</option>
                            <option value={18}>18</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:mt-0 mt-15">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3 relative">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    Popular Products
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="popular_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Description
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="popular_description"
                            type="text"
                            placeholder="Popular Description"
                            rows={4}
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Products Limit
                        </label>
                        <div className="sm:col-span-4">
                          <select
                            className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5"
                            name="popular_product_limit"
                          >
                            <option value hidden>
                              Select Products Limit
                            </option>
                            <option value={6}>6</option>
                            <option value={12}>12</option>
                            <option value={18}>18</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 mt-15">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>{" "}
                    Quick Delivery Section
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Sub Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="quick_delivery_subtitle"
                            placeholder="Sub Title"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="quick_delivery_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Description
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="quick_delivery_description"
                            type="text"
                            placeholder="Quick Delivery Section"
                            rows={4}
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button Name
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="quick_delivery_button"
                            placeholder="Button Name"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button Link
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="quick_delivery_link"
                            placeholder="https://kachabazar-store.vercel.app/search?category=fruits-vegetable&_id=632aca2b4d87ff2494210be8"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Image
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}
                            >
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                style={{ display: "none" }}
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <polyline points="16 16 12 12 8 16" />
                                  <line x1={12} y1={12} x2={12} y2={21} />
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                  <polyline points="16 16 12 12 8 16" />
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500" />
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688032/settings/delivery-boy_rluuoq.webp"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none"
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
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={15} y1={9} x2={9} y2={15} />
                                    <line x1={9} y1={9} x2={15} y2={15} />
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:mt-0 mt-10">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>{" "}
                    Latest Discounted Products
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="latest_discount_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Description
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="latest_discount_description"
                            type="text"
                            placeholder="Latest Discount Description"
                            rows={4}
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Products Limit
                        </label>
                        <div className="sm:col-span-4">
                          <select
                            className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5"
                            name="latest_discount_product_limit"
                          >
                            <option value hidden>
                              Select Products Limit
                            </option>
                            <option value={6}>6</option>
                            <option value={12}>12</option>
                            <option value={18}>18</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:my-0 my-24">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>{" "}
                    Get Your Daily Needs
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="daily_need_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Description
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="daily_need_description"
                            type="text"
                            placeholder="Daily Need Description"
                            rows={4}
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Image Left
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}
                            >
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                style={{ display: "none" }}
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <polyline points="16 16 12 12 8 16" />
                                  <line x1={12} y1={12} x2={12} y2={21} />
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                  <polyline points="16 16 12 12 8 16" />
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500" />
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688091/settings/app-download-img-left_s5n2zf.webp"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none"
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
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={15} y1={9} x2={9} y2={15} />
                                    <line x1={9} y1={9} x2={15} y2={15} />
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Image Right
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}
                            >
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                style={{ display: "none" }}
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <polyline points="16 16 12 12 8 16" />
                                  <line x1={12} y1={12} x2={12} y2={21} />
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                  <polyline points="16 16 12 12 8 16" />
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500" />
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688091/settings/app-download-img_c7xqg4.webp"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none"
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
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={15} y1={9} x2={9} y2={15} />
                                    <line x1={9} y1={9} x2={15} y2={15} />
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button 1 Image
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}
                            >
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                style={{ display: "none" }}
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <polyline points="16 16 12 12 8 16" />
                                  <line x1={12} y1={12} x2={12} y2={21} />
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                  <polyline points="16 16 12 12 8 16" />
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500" />
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688165/settings/app-store_cyyc0f.svg"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none"
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
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={15} y1={9} x2={9} y2={15} />
                                    <line x1={9} y1={9} x2={15} y2={15} />
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button 1 Link
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="daily_need_app_link"
                            placeholder="https://kachabazar-store.vercel.app/search?category=fruits-vegetable&_id=632aca2b4d87ff2494210be8"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button 2 Image
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}
                            >
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                style={{ display: "none" }}
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <polyline points="16 16 12 12 8 16" />
                                  <line x1={12} y1={12} x2={12} y2={21} />
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                  <polyline points="16 16 12 12 8 16" />
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500" />
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688167/settings/play-store_cavwua.svg"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none"
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
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={15} y1={9} x2={9} y2={15} />
                                    <line x1={9} y1={9} x2={15} y2={15} />
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button 2 Link
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="daily_need_google_link"
                            placeholder="https://kachabazar-store.vercel.app/search?category=fruits-vegetable&_id=632aca2b4d87ff2494210be8"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:mt-0 mt-10">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>{" "}
                    Feature Promo Section
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Free Shipping
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promo_free_shipping"
                            placeholder="From $500.00"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Support
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promo_support"
                            placeholder="24/7 At Anytime"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Secure Payment
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promo_payment"
                            placeholder="Secure Payment"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Latest Offer
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promo_offer"
                            placeholder="Upto 20% Off"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:mt-0 mt-10">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>{" "}
                    Footer
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative">
                      <strong>Block 1</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-4">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_title"
                            placeholder="Company"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 1
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_one_title"
                            placeholder="About Us"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4 mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_one"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 2
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_two_title"
                            placeholder="Contact Us"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_two"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 3
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_three_title"
                            placeholder="Careers"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_three"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 4
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_four_title"
                            placeholder="Neuesten Nachrichten"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4 mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_four"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative md:mt-0 mt-24">
                      <strong>Block 2</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_title"
                            placeholder="Top Category"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 1
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_one_title"
                            placeholder="Fish & Meat"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_one"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 2
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_two_title"
                            placeholder="Soft Drinks"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_two"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 3
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_three_title"
                            placeholder="Baby Care"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_three"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 4
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_four_title"
                            placeholder="Beauty & Health"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_four"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative md:mt-0 mt-24">
                      <strong>Block 3</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_title"
                            placeholder="My Account"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 1
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_one_title"
                            placeholder="Dashboard"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_one"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 2
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_two_title"
                            placeholder="My Orders"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_two"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 3
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_three_title"
                            placeholder="Recent Orders"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_three"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 4
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_four_title"
                            placeholder="Updated Profile"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2" />
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_four"
                            placeholder="Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative md:mt-0 mt-24">
                      <strong>Block 4</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Footer Logo
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}
                            >
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                style={{ display: "none" }}
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <polyline points="16 16 12 12 8 16" />
                                  <line x1={12} y1={12} x2={12} y2={21} />
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                  <polyline points="16 16 12 12 8 16" />
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500" />
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688576/settings/logo-color_el4zmy.svg"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none"
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
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={15} y1={9} x2={9} y2={15} />
                                    <line x1={9} y1={9} x2={15} y2={15} />
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Address
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_four_address"
                            placeholder="Address"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Phone
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_four_phone"
                            placeholder="Phone"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Email
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_four_email"
                            placeholder="Email"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative mt-24 md:mt-0">
                      <strong>Social Links</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Facebook
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="social_facebook"
                            placeholder="Facebook link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Twitter
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="social_twitter"
                            placeholder="Twitter Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Pinterest
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="social_pinterest"
                            placeholder="Pinterest Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Linkedin
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="social_linkedin"
                            placeholder="Linkedin Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          WhatsApp
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="social_whatsapp"
                            placeholder="whatsApp Link"
                            autoComplete="new-password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative mt-24 md:mt-0">
                      <strong>Payment Method</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Payment Method
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}
                            >
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                style={{ display: "none" }}
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <polyline points="16 16 12 12 8 16" />
                                  <line x1={12} y1={12} x2={12} y2={21} />
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                  <polyline points="16 16 12 12 8 16" />
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500" />
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688607/settings/payment-logo_qhslgz.webp"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none"
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
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={15} y1={9} x2={9} y2={15} />
                                    <line x1={9} y1={9} x2={15} y2={15} />
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative mt-16 md:mt-0">
                      <strong>Footer Bottom Contact Number</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
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
                                id
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
                      className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3"
                      style={{
                        height: "auto",
                        transition: "all 0.5s ease 0s",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Footer Bottom Contact Number
                      </label>
                      <div className="sm:col-span-4 mb-20 md:mb-0">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="footer_Bottom_Contact"
                          placeholder="Footer Bottom Contact Number"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
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

export default StoreCustom;
