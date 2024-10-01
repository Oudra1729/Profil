import React from 'react';
import Navbar from './components/Navbar';  // Corrected "components" spelling
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed top-0 z-0 h-full w-full"></div> {/* Fixed typo 'flixed' to 'fixed' */}
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-black bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> {/* Ensure z-index compatibility */}

      {/* Main Container */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
