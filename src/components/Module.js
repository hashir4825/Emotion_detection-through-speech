import React, { useState } from "react";
import ParticlesComponent from './particles';


const Module = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const toggleRecording = async () => {
    if (!isRecording) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setRecordedChunks((prev) => [...prev, e.data]);
        }
      };

      recorder.start();
      setIsRecording(true);
    } else {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const saveRecording = () => {
    // Check if there are recorded chunks
    if (recordedChunks.length === 0) {
      console.error("No recorded audio chunks available");
      return;
    }
  
    // Create a Blob from the recorded chunks
    const audioBlob = new Blob(recordedChunks, { type: "audio/wav" });
  
    // Create a URL for the Blob
    const audioUrl = URL.createObjectURL(audioBlob);
  
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = "recording.wav"; // Set the filename with correct extension
    document.body.appendChild(link);
    link.click();
  
    // Clean up the URL object
    URL.revokeObjectURL(audioUrl);
  };
  
  const [isSourceDropdownOpen, setIsSourceDropdownOpen] = useState(false);
  const [isTargetDropdownOpen, setIsTargetDropdownOpen] = useState(false);

  const toggleSourceDropdown = () => {
    setIsSourceDropdownOpen((prev) => !prev);
  };

  const toggleTargetDropdown = () => {
    setIsTargetDropdownOpen((prev) => !prev);
  };

  return (
<div>
<ParticlesComponent id="particles" />


<div
    
    className="flex items-center justify-center text-white"
    style={{
      fontFamily: "Poppins, sans-serif", // Use Poppins font
      backgroundColor: "black", // Black background color
    }}
  >
    <div className="w-full flex flex-row p-4" style={{ maxWidth: "80%" }}>
      {/* Left Portion */}
      <div className="flex flex-col p-4 w-full">
        <div className="w-full p-8" style={{ backgroundColor: "#43464a" }}>
          <div
            className="w-full p-8 flex items-center justify-center"
            style={{ backgroundColor: "#43464a" }}
          >
            <h1 className="text-3xl font-bold text-center">Input Speech</h1>
            
          </div>

          <div className="mb-10 flex items-center justify-center w-full">
          </div>
          <label>Upload Audio:</label>
          <div className="mt-2 mb-10 flex items-center justify-center w-full">
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
          <div>
    <button className="mt-4 mb-4 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"  onClick={toggleRecording}>
      {isRecording ? "Stop Recording" : "Start Recording"}
    </button>
    {recordedChunks.length > 0 && (
      <button className="mt-4 mb-4 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"  onClick={saveRecording}>Save Recording</button>
    )}
  </div>
          
          <div className="relative mb-10">
            <label className="block mb-2">Source Language</label>
            <div className="relative">
              <button
                id="sourceDropdownButton"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative border border-gray-300"
                onClick={toggleSourceDropdown}
              >
                Select Source Language
                <svg
                  className={`w-2.5 h-2.5 ml-2 transition-transform transform ${
                    isSourceDropdownOpen ? "rotate-180" : ""
                  }`}
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
              {isSourceDropdownOpen && (
                <div
                  id="sourceDropdown"
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute left-0 mt-2 w-full"
                  style={{ top: "100%", zIndex: "999" }}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
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
                        French
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
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <label className="block mb-2">Target Language</label>
            <div className="relative">
              <button
                id="targetDropdownButton"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative border border-gray-300"
                onClick={toggleTargetDropdown}
              >
                Select Target Language
                <svg
                  className={`w-2.5 h-2.5 ml-2 transition-transform transform ${
                    isTargetDropdownOpen ? "rotate-180" : ""
                  }`}
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
              {isTargetDropdownOpen && (
                <div
                  id="targetDropdown"
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute left-0 mt-2 w-full"
                  style={{ top: "100%", zIndex: "999" }}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
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
                        French
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
                    {/* Add more languages as needed */}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Translate Button */}
          <button className="mt-5 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
            Translate
          </button>
        </div>
      </div>

      {/* Right Portion */}
      <div className="w-full flex flex-col p-4">
        <div className="w-full  p-8" style={{ backgroundColor: "#43464a" }}>
          {/* Translated Speech Section */}
          <div
            className="mb-12 w-full p-8 flex items-center justify-center"
            style={{ backgroundColor: "#43464a" }}
          >
            <h1 className="text-3xl font-bold text-center">
              Translated Speech
            </h1>
          </div>
          <div>
          <label>Translated Audio:</label>
          </div>
          <button className="mt-2 mb-5 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
            Play
          </button>

          <div>
          <label>Translated Text:</label>
          </div>
          <textarea
            id="message"
            rows="4"
            className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div style={{ backgroundColor: "#43464a" }}>
          {/* Emotion Detection Section */}
          <div className="w-full  p-8">
            <div
              className="mb-12 w-full p-8 flex items-center justify-center"
              style={{ backgroundColor: "#43464a" }}
            >
              <h1 className="text-3xl font-bold text-center">
                Emotion Detection
              </h1>
            </div>

            <label htmlFor="emotion_detect" className="block mb-2">
              Emotion through:
            </label>
            <input
              type="text"
              id="emotion_detect"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Emotion"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Module;
