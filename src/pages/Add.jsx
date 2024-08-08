import React from "react";

const Add = () => {
  return (
    <div>
      <div tabIndex={-1} className="drawer drawer-right drawer-open">
        <div className="drawer-mask" />
        <div className="drawer-content-wrapper" style={{ width: "85%" }}>
          <div className="drawer-content">
            <button className="absolute focus:outline-none z-10 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </button>
            <div className="flex flex-col w-full h-full justify-between">
              <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <div className="flex md:flex-row flex-col justify-between mr-20">
                  <div>
                    <h4 className="text-xl font-medium dark:text-gray-300">
                      Add Product
                    </h4>
                    <p className="mb-0 text-sm dark:text-gray-300">
                      Add your product and necessary information from here
                    </p>
                  </div>
                  <select
                    name="language"
                    className="block w-20 h-10 border border-emerald-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700"
                  >
                    <option value="en" hidden>
                      en
                    </option>
                  </select>
                </div>
              </div>
              <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-700">
                <div
                  className="mb-3 flex flex-wrap justify-end items-center mr-8"
                  style={{
                    height: 20,
                    transition: "all 0.3s ease 0s",
                    visibility: "visible",
                    opacity: 1,
                  }}
                >
                  <div className="flex flex-wrap items-center">
                    <label className="block text-base font-normal text-orange-500 dark:text-orange-400 mx-4">
                      Does this product have variants?
                    </label>
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
                <ul className="flex flex-wrap -mb-px">
                  <li className="mr-2">
                    <button
                      className="inline-block px-4 py-2 text-base text-emerald-600 border-emerald-600 dark:text-emerald-500 dark:border-emerald-500 rounded-t-lg border-b-2 focus:outline-none"
                      aria-current="page"
                    >
                      Basic Info
                    </button>
                  </li>
                </ul>
              </div>
              <div
                className="track-horizontal thumb-horizontal w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "scroll",
                    marginRight: "-14px",
                    marginBottom: "-14px",
                  }}
                >
                  <form className="block" id="block">
                    <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Title/Name
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                            type="text"
                            name="title"
                            placeholder="Product Title/Name"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Description
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <textarea
                            className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 border text-sm  block w-full bg-gray-100 border-gray-200"
                            name="description"
                            placeholder="Product Description"
                            rows={4}
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Images
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}
                            >
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                multiple
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
                            <aside className="flex flex-row flex-wrap mt-4" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product SKU
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                            type="text"
                            name="sku"
                            placeholder="Product SKU"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Barcode
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                            type="text"
                            name="barcode"
                            placeholder="Product Barcode"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Category
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="mb-2">
                            <div>
                              <div
                                className="multiselect-container multiSelectContainer  "
                                id="multiselectContainerReact"
                              >
                                <div className="search-wrapper searchWrapper ">
                                  <input
                                    type="text"
                                    className="searchBox "
                                    id="search_input"
                                    name="search_name_input"
                                    placeholder="Select Category"
                                    autoComplete="off"
                                    defaultValue
                                  />
                                </div>
                                <div className="optionListContainer displayNone">
                                  <ul className="optionContainer">
                                    <span className="notFound">
                                      No Options Available
                                    </span>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="draggable-demo capitalize">
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n  .rc-tree-child-tree {\n    display: block;\n  }\n  .node-motion {\n    transition: all .3s;\n    overflow-y: hidden;\n  }\n",
                              }}
                            />
                            <div role="tree" className="rc-tree">
                              <div>
                                <input
                                  tabIndex={0}
                                  aria-label="for screen reader"
                                  defaultValue
                                  style={{
                                    width: 0,
                                    height: 0,
                                    display: "flex",
                                    overflow: "hidden",
                                    opacity: 0,
                                    border: 0,
                                    padding: 0,
                                    margin: 0,
                                  }}
                                />
                              </div>
                              <div
                                className="rc-tree-treenode"
                                aria-hidden="true"
                                style={{
                                  position: "absolute",
                                  pointerEvents: "none",
                                  visibility: "hidden",
                                  height: 0,
                                  overflow: "hidden",
                                  border: 0,
                                  padding: 0,
                                }}
                              >
                                <div className="rc-tree-indent">
                                  <div className="rc-tree-indent-unit" />
                                </div>
                              </div>
                              <div
                                className="rc-tree-list"
                                style={{ position: "relative" }}
                              >
                                <div className="rc-tree-list-holder">
                                  <div>
                                    <div
                                      className="rc-tree-list-holder-inner"
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Default Category
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div>
                            <div
                              className="multiselect-container multiSelectContainer  "
                              id="multiselectContainerReact"
                            >
                              <div className="search-wrapper searchWrapper singleSelect">
                                <input
                                  type="text"
                                  className="searchBox "
                                  id="search_input"
                                  name="search_name_input"
                                  placeholder="Default Category"
                                  autoComplete="off"
                                  disabled
                                  defaultValue
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cg%20id%3D%22background%22%3E%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22none%22%20height%3D%2232%22%20width%3D%2232%22%2F%3E%20%20%20%20%3C%2Fg%3E%20%20%20%20%3Cg%20id%3D%22arrow_x5F_down%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%222.002%2C10%2016.001%2C24%2030.002%2C10%20%20%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E"
                                  className="icon_cancel icon_down_dir"
                                />
                              </div>
                              <div className="optionListContainer displayNone">
                                <ul className="optionContainer">
                                  <span className="notFound">
                                    No Options Available
                                  </span>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Price
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="flex flex-row">
                            <span className="inline-flex items-center px-3 rounded rounded-r-none border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm  focus:border-emerald-300 dark:bg-gray-700 dark:text-gray-300 dark:border dark:border-gray-600">
                              $
                            </span>
                            <input
                              className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2 rounded-l-none"
                              type="number"
                              name="originalPrice"
                              step="0.01"
                              placeholder="OriginalPrice"
                              defaultValue={0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Sale Price
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="flex flex-row">
                            <span className="inline-flex items-center px-3 rounded rounded-r-none border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm  focus:border-emerald-300 dark:bg-gray-700 dark:text-gray-300 dark:border dark:border-gray-600">
                              $
                            </span>
                            <input
                              className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2 rounded-l-none"
                              type="number"
                              name="price"
                              step="0.01"
                              placeholder="Sale price"
                              defaultValue={0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Quantity
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="flex flex-row">
                            <input
                              className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                              type="number"
                              name="stock"
                              placeholder="Product Quantity"
                              defaultValue={0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Slug
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700  mr-2 p-2"
                            type="text"
                            name="slug"
                            placeholder="Product Slug"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Tags
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="react-tag-input">
                            <input
                              className="react-tag-input__input"
                              placeholder="Product Tag (Write then press enter to add new tag )"
                              defaultValue
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="fixed z-10 bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      style={{}}
                    >
                      <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <button
                          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none rounded-lg border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
                          type="button"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <button
                          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                          type="submit"
                        >
                          <span>Add Product</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  style={{
                    position: "absolute",
                    height: 6,
                    right: 2,
                    bottom: 2,
                    left: 2,
                    borderRadius: 3,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "block",
                      height: "100%",
                      cursor: "pointer",
                      borderRadius: "inherit",
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      width: 0,
                      transform: "translateX(0px)",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: 6,
                    right: 2,
                    bottom: 2,
                    top: 2,
                    borderRadius: 3,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "block",
                      width: "100%",
                      cursor: "pointer",
                      borderRadius: "inherit",
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      height: 30,
                      transform: "translateY(0px)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="drawer-handle">
            <i className="drawer-handle-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
