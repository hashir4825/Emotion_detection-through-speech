import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const backgroundImageUrl = 'https://media.istockphoto.com/id/1458045238/photo/ai-speaks-letters-text-to-speech-or-tts-text-to-voice-speech-synthesis-applications.webp?b=1&s=170667a&w=0&k=20&c=_VlQINLEbaoufozqaL82Udq2JTKpBhvIYiWm1_cY3Mw=';

  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center h-screen text-white"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundBlendMode: 'hard-light', // Blend with black background color
        backgroundColor: 'black', // Black background color
        backgroundSize: 'initial',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        fontFamily: 'Poppins, sans-serif', // Use Poppins font
        opacity: 0.9,
      }}
    >
      <div className="flex flex-row justify-center items-center p-8" style={{ maxWidth: '80%' }}>
        {/* Left Portion */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold">Speech to Speech Translator</h1>
          <p className="mt-4 text-lg font-bold">Breaking the communication barriers</p>
          <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=> navigate("/Module")}>
            Get Started
          </button>
        </div>
        
        {/* Right Portion */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-xl font-bold">AI Features:</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Translate speech into Speech</li>
            <li>Speech to Text</li>
            <li>Text to Text</li>
            <li>Emotion detection from input</li>
          </ul>
          <p className="mt-4">
            Our project leverages AI to break communication barriers by providing innovative features.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
