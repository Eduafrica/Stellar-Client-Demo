import React from 'react';

function Hero() {
  return (
    <section className="bg-[#00BF63] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Skill up and take your career to
            <br className="hidden md:block" />
            <span className="text-white"> the next level.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed">
            Unlock a vast library of expert-led courses, personalised coaching,
            and worked researchers with a single subscription
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button className="bg-white hover:bg-white hover:text-[#00BF63] text-[#00BF63] font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
              Choose a Career Path
            </button>
            <button className="bg-[#00BF63] hover:bg-[#00BF63] hover:text-white text-white border border-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-sm hover:shadow-md">
              Explore Course
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
