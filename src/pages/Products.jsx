import React, { useState } from "react";
import Add from "./Add";

const Products = () => {

  const [isDrawerOpen,setDrawerOpen] =useState(false)

  const toggleDrawer =() => {
    setDrawerOpen(!isDrawerOpen)
  }
  return (
    <div>
      <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
        <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
          Products
        </h1>
        <div className="tab tab-enter">
          <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
            <div className="p-4">
              <form className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex">
                <div className="flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow">
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent opacity-50 cursor-not-allowed w-full rounded-md h-12 btn-gray text-gray-600"
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
                  <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent opacity-50 cursor-not-allowed w-full rounded-md h-12 bg-red-300 disabled btn-red"
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










                  <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full rounded-md h-12"
                      type="button"
                      onClick={toggleDrawer}
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
                      Add Product
                    </button>
                  </div>



                  <div className={`add_container transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out w-80`}>
                        <div className="">
                          <h2 className="text-xl font-semibold">Side Drawer</h2>
                          <button onClick={toggleDrawer} className="mt-4 text-red-500">
                            Close Drawer
                          </button>
                          {/* Drawer content goes here */
                          <Add/>
                          }
                        </div>
                </div>

      {/* Overlay */
      }
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleDrawer}
        >
        </div>
      )}







                  
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
                    name="search"
                    placeholder="Search Product"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-1"
                  />
                </div>
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
                    <option value="All" hidden>
                      Category
                    </option>
                    <option value="66a7f84047455c000d048540">sadasd</option>
                    <option value="63f12afdcc480f0454f475dd">Baby Food</option>
                    <option value="632aca9b4d87ff2494210c4f">Rui</option>
                    <option value="632aca944d87ff2494210c47">Tuna</option>
                    <option value="632aca864d87ff2494210c3c">Beef</option>
                    <option value="632aca7e4d87ff2494210c34">Fish</option>
                    <option value="632aca754d87ff2494210c2c">Meat</option>
                    <option value="632aca6d4d87ff2494210c24">
                      Fish &amp; Meat
                    </option>
                    <option value="632aca594d87ff2494210c10">Orange</option>
                    <option value="632aca524d87ff2494210c08">Apple</option>
                    <option value="632aca454d87ff2494210c00">
                      Fresh Fruits
                    </option>
                    <option value="632aca3d4d87ff2494210bf8">Dry Fruits</option>
                    <option value="632aca374d87ff2494210bf0">
                      Fresh Vegetable
                    </option>
                    <option value="632aca2b4d87ff2494210be8">
                      Fruits &amp; Vegetable
                    </option>
                    <option value="632aca184d87ff2494210bd4">Flour</option>
                    <option value="632aca144d87ff2494210bcc">Oil</option>
                    <option value="632aca0b4d87ff2494210bc4">
                      Cooking Essentials
                    </option>
                    <option value="632ac9f64d87ff2494210bb0">Biscuits</option>
                    <option value="632ac9ef4d87ff2494210ba8">Cakes</option>
                    <option value="632ac9e94d87ff2494210ba0">
                      Biscuits &amp; Cakes
                    </option>
                    <option value="632ac9c24d87ff2494210b84">
                      Water Filter
                    </option>
                    <option value="632ac9ba4d87ff2494210b7c">
                      Cleaning Tools
                    </option>
                    <option value="632ac9b24d87ff2494210b74">
                      Pest Control
                    </option>
                    <option value="632ac99d4d87ff2494210b64">
                      Air Freshener
                    </option>
                    <option value="632ac9984d87ff2494210b5c">Luandry</option>
                    <option value="632ac9934d87ff2494210b54">Cleaner</option>
                    <option value="632ac9864d87ff2494210b49">
                      Household Tools
                    </option>
                    <option value="632ab45b4d87ff2494210b21">Dog Care</option>
                    <option value="632ab4524d87ff2494210b19">Cat Care</option>
                    <option value="632ab4434d87ff2494210b0e">Pet Care</option>
                    <option value="632ab3044d87ff2494210ae8">Bath</option>
                    <option value="632ab2fd4d87ff2494210ae0">Cosmetics</option>
                    <option value="632ab2f84d87ff2494210ad8">Oral Care</option>
                    <option value="632ab2f04d87ff2494210ad0">Skin Care</option>
                    <option value="632ab2df4d87ff2494210ac8">Body Care</option>
                    <option value="632ab2d54d87ff2494210ac0">
                      Shaving Needs
                    </option>
                    <option value="632ab2c34d87ff2494210ab2">Women</option>
                    <option value="632ab2b64d87ff2494210aa7">Men</option>
                    <option value="632ab2864d87ff2494210a8a">
                      Beauty &amp; Healths
                    </option>
                    <option value="632ab1e04d87ff2494210a6a">
                      Jam &amp; Jelly
                    </option>
                    <option value="632ab16c4d87ff2494210a44">
                      Butter &amp; Ghee
                    </option>
                    <option value="632ab1644d87ff2494210a3c">Ice Cream</option>
                    <option value="632ab1584d87ff2494210a31">Dairy</option>
                    <option value="632ab14a4d87ff2494210a29">
                      Milk &amp; Dairy
                    </option>
                    <option value="632ab0664d87ff24942109ef">Tea</option>
                    <option value="632ab0604d87ff24942109e7">Water</option>
                    <option value="632ab0564d87ff24942109df">Juice</option>
                    <option value="632ab0504d87ff24942109d7">Coffee</option>
                    <option value="632ab0454d87ff24942109cc">
                      Energy Drinks
                    </option>
                    <option value="632ab0334d87ff24942109c1">Drinks</option>
                    <option value="632aae7b4d87ff2494210967">Bread</option>
                    <option value="632aae624d87ff2494210951">Cereal</option>
                    <option value="632aae414d87ff2494210945">Breakfast</option>
                    <option value="62e4ebb90ea79023fc11d847">Beef</option>
                    <option value="62d2bbe62e63b40520194f21">Orange</option>
                    <option value="62d2bbd22e63b40520194f1b">Apple</option>
                    <option value="62d03a542d28e904b20e2342">Rui</option>
                    <option value="62d03a312d28e904b20e233c">Tuna</option>
                    <option value="62d02efd2d28e904b20e22bf">Tuna</option>
                    <option value="62cfad52484d89068aa7a81f">
                      Pickles &amp; Condiments
                    </option>
                    <option value="62cfad3d484d89068aa7a819">Sauces</option>
                    <option value="62cfab4b484d89068aa7a7ff">
                      Canned Food
                    </option>
                    <option value="62cfab39484d89068aa7a7fb">
                      Chips &amp; Nuts
                    </option>
                    <option value="62cfab28484d89068aa7a7f5">Chocolate</option>
                    <option value="62cc07b8d511b304aecdfbfa">
                      Baby Accessories
                    </option>
                    <option value="62cc0791d511b304aecdfbf2">Baby Food</option>
                    <option value="62c827b5a427b63741da9175">Home</option>
                  </select>
                </div>
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
                    <option value="All" hidden>
                      Price
                    </option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                    <option value="published">Published</option>
                    <option value="unPublished">Unpublished</option>
                    <option value="status-selling">Status - Selling</option>
                    <option value="status-out-of-stock">
                      {" "}
                      Status - Out of Stock
                    </option>
                    <option value="date-added-asc">Date Added (Asc)</option>
                    <option value="date-added-desc">Date Added (Desc)</option>
                    <option value="date-updated-asc">Date Updated (Asc)</option>
                    <option value="date-updated-desc">
                      Date Updated (Desc)
                    </option>
                  </select>
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
        <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg mb-8 rounded-b-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                <tr>
                  <td className="px-4 py-2">
                    <input id="selectAll" name="selectAll" type="checkbox" />
                  </td>
                  <td className="px-4 py-2">PRODUCT NAME</td>
                  <td className="px-4 py-2">CATEGORY</td>
                  <td className="px-4 py-2">price</td>
                  <td className="px-4 py-2">Sale Price</td>
                  <td className="px-4 py-2">STOCK</td>
                  <td className="px-4 py-2">STATUS</td>
                  <td className="px-4 py-2 text-center">View</td>
                  <td className="px-4 py-2 text-center">PUBLISHED</td>
                  <td className="px-4 py-2 text-right">ACTIONS</td>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-400">
                <tr className>
                  <td className="px-4 py-2">
                    <input
                      id="66a8f2674c5815000c03de83"
                      name="Yyy"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://res.cloudinary.com/ahossain/image/upload/v1722348089/product/1000002223.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">Yyy</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Cooking Essentials</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$100.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$10.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">100</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/66a8f2674c5815000c03de83"
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
                    <input
                      id="66a8c2829c5cd5000cf094f9"
                      name="Variants product"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://res.cloudinary.com/ahossain/image/upload/v1722491807/product/Screenshot2024-08-01at12.56.44.png"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">
                          Variants product
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Cleaning Tools</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$90.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$89.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">12240</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/66a8c2829c5cd5000cf094f9"
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
                    <input
                      id="66a889ce2aeb4a000ca105b0"
                      name="Polo T-Shirtdddddr"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://res.cloudinary.com/ahossain/image/upload/v1722248409/product/download%281%29.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">
                          Polo T-Shirtdddddr
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Oil</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$299.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$250.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">21</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/66a889ce2aeb4a000ca105b0"
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
                    <input
                      id="66a7f81a5dd1cd000c16a911"
                      name="adasdasd"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">adasdasd</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Home</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$2000.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$0.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">0</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-red-500 bg-red-100 dark:text-red-100 dark:bg-red-800">
                      Sold Out
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/66a7f81a5dd1cd000c16a911"
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
                    <input
                      id="66a7f19e0cbf19000cbfd4d8"
                      name="sdzc"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://res.cloudinary.com/ahossain/image/upload/v1722282316/product/Capturadepantalla2024-07-22213619.png"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">sdzc</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Home</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$2000.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$1500.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">15</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/66a7f19e0cbf19000cbfd4d8"
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
                    <input
                      id="66a7599da172ac000ceb4535"
                      name="ewr"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">ewr</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Milk &amp; Dairy</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$85.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$7.93</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">6</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/66a7599da172ac000ceb4535"
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
                    <input
                      id="66a7595365e0ff000cab6196"
                      name="eq"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">eq</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fruits &amp; Vegetable</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$44.98</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$0.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">0</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-red-500 bg-red-100 dark:text-red-100 dark:bg-red-800">
                      Sold Out
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/66a7595365e0ff000cab6196"
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
                    <input
                      id="644501ab7094a0000851284b"
                      name="Premium T-Shirt"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://res.cloudinary.com/ahossain/image/upload/v1682058933/product/CMTHP-COR12-deep-ash-920x920.webp"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">
                          Premium T-Shirt
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Men</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$450.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$430.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">23105</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644501ab7094a0000851284b"
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
                    <input
                      id="644500c2839a5e0c2f5c17d3"
                      name="Himalaya Powder"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.ibb.co/9g7vDQJ/Himalaya-Baby-Powder-100g.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">
                          Himalaya Powder
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Skin Care</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$174.97</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$160.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">5472</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17d3"
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
                    <input
                      id="644500c2839a5e0c2f5c17d2"
                      name="Green Leaf Lettuce"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/ZRynchJY/Green-Leaf-Lettuce-each.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">
                          Green Leaf Lettuce
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Vegetable</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$112.72</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$112.72</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">463</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17d2"
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
                    <input
                      id="644500c2839a5e0c2f5c17d1"
                      name="Rainbow Chard"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/Z5yQ47YB/Rainbow-Chard-Package-per-lb.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">Rainbow Chard</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Vegetable</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$7.07</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$7.07</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">471</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17d1"
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
                    <input
                      id="644500c2839a5e0c2f5c17d0"
                      name="Clementine"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/MTPyNwQC/Clementine-5ct.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">Clementine</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Fruits</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$48.12</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$48.12</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">451</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17d0"
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
                    <input
                      id="644500c2839a5e0c2f5c17cf"
                      name="Kale Sprouts"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/ryxzRchQ/Kale-Sprouts-3oz.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">Kale Sprouts</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Vegetable</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$106.06</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$90.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">299</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17cf"
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
                    <input
                      id="644500c2839a5e0c2f5c17ce"
                      name="Rainbow Peppers"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/qRpDcpsy/Rainbow-Peppers-4ct.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">
                          Rainbow Peppers
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Vegetable</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$90.85</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$90.85</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">411</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17ce"
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
                    <input
                      id="644500c2839a5e0c2f5c17cd"
                      name="Blueberry"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/L8L3XGcP/Blackberries-1-25-qt.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">Blueberry</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Fruits</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$211.96</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$211.96</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">201</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17cd"
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
                    <input
                      id="644500c2839a5e0c2f5c17cc"
                      name="Calabaza Squash"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">
                          Calabaza Squash
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Vegetable</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$98.03</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$98.03</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">581</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17cc"
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
                    <input
                      id="644500c2839a5e0c2f5c17cb"
                      name="Lettuce"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/GhRtkNVr/Lettuce-1lb.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">Lettuce</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Vegetable</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$193.26</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$193.26</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">368</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17cb"
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
                    <input
                      id="644500c2839a5e0c2f5c17ca"
                      name="Radicchio"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/5y7rNDFv/Radicchio-12ct.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">Radicchio</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Vegetable</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$58.66</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$45.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">73</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17ca"
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
                    <input
                      id="644500c2839a5e0c2f5c17c9"
                      name="Parsley"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/wvzZWXpt/Parsley-each.jpgg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">Parsley</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Vegetable</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$134.63</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$134.63</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">172</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17c9"
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
                    <input
                      id="644500c2839a5e0c2f5c17c8"
                      name="Strawberrie"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="relative rounded-full inline-block w-8 h-8 hidden p-1 mr-2 md:block bg-gray-50 shadow-none">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://i.postimg.cc/NFXkHVKZ/Strawberries-9-25oz.jpg"
                          alt="product"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm font-medium ">Strawberrie</h2>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">Fresh Fruits</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$156.95</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm font-semibold">$140.00</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-sm">423</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                      Selling
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <a
                      className="flex justify-center text-gray-400 hover:text-emerald-600"
                      href="/product/644500c2839a5e0c2f5c17c8"
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
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
            <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
              <span className="flex items-center font-semibold tracking-wide uppercase">
                Showing 1-20 of 315
              </span>
              <div className="flex mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Product Page Navigation">
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
                        16
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

export default Products;
