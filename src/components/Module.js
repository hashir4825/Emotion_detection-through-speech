import React, { useState } from "react";

const Module = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div
      className="flex items-center justify-center text-white"
      style={{
        fontFamily: "Poppins, sans-serif", // Use Poppins font
        backgroundColor: "black", // Black background color
      }}
    >
      <div className="flex flex-row p-4" style={{ maxWidth: "80%" }}>
        {/* Left Portion */}
        <div className="flex flex-col p-4 w-full">
          <div className="w-full p-8" style={{ backgroundColor: "#43464a" }}>
          <div className="w-full p-8 flex items-center justify-center" style={{ backgroundColor: "black" }}>
  <h1 className="text-3xl font-bold text-center">Input Speech</h1>
</div>

            <div className="mb-10 flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <div className="relative">
              <label>Source Language</label>
              <button
                id="dropdownHoverButton"
                className="mt-2 mb-10 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative border border-gray-300"
                type="button"
                onClick={toggleDropdown}
              >
                Select Source Language
                <svg
                  className="w-2.5 h-2.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  id="dropdownHover"
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-0 mt-2"
                  style={{ marginLeft: "calc(8% - 2.75rem)" }}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Chinese
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        English
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Urdu
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Persian
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Arabic
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        French
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <label>Target Language</label>
            <button
              id="dropdownHoverButton"
              className="mt-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative border border-gray-300"
              type="button"
              onClick={toggleDropdown}
            >
              Select Target Language
              <svg
                className="w-2.5 h-2.5 ml-2 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <button class="mt-5 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
              Translate
            </button>
          </div>
        </div>

        {/* Right Portion */}
        <div className="w-full flex flex-col p-4">
          <div className="w-full  p-8" style={{ backgroundColor: "#43464a" }}>
            <div
              className="mb-12 w-full p-8 flex items-center justify-center"
              style={{ backgroundColor: "black" }}
            >
              <h1 className="text-3xl font-bold text-center">
                Translated Speech
              </h1>
            </div>
            <label>Translated Text:</label>
            <textarea
              id="message"
              rows="4"
              class="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div style={{ backgroundColor: "#43464a" }}>
            <div className="w-full  p-8">
              <div
                className="mb-12 w-full p-8 flex items-center justify-center"
                style={{ backgroundColor: "black" }}
              >
                <h1 className="text-3xl font-bold text-center">
                  Emotion Detection
                </h1>
              </div>

              <label for="emotion_detect" class="block mb-2">
                Emotion through Text:
              </label>
              <input
                type="text"
                id="emotion_detect"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Emotion"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;
