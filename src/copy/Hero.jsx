import React from 'react';

function Hero() {
  return (
    <section class="hero-gradient text-white py-16 md:py-24 lg:py-32">
      <div class="container mx-auto px-4 md:px-8 lg:px-16">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Skill up and take your career to
              <br />
              <span class="text-yellow-300">the next level.</span>
            </h1>
            <p class="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Unlock a vast library of expert-led courses, personalised
              coaching, and career resources with a single subscription.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="cta-button bg-white text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100">
                Choose a Career Path
              </button>
              <button class="cta-button border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900">
                Explore Course
              </button>
            </div>
          </div>

          <div class="lg:w-1/2 flex justify-center">
            <div class="relative w-full max-w-md lg:max-w-lg">
              <div class="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-pulse delay-300"></div>

              <div class="relative bg-white rounded-2xl shadow-2xl p-6 text-gray-800 transform rotate-2">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i class="fas fa-graduation-cap text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold">Web Development</h3>
                    <p class="text-sm text-gray-600">12 Courses</p>
                  </div>
                </div>

                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i class="fas fa-chart-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold">Data Science</h3>
                    <p class="text-sm text-gray-600">8 Courses</p>
                  </div>
                </div>

                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <i class="fas fa-paint-brush text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold">UI/UX Design</h3>
                    <p class="text-sm text-gray-600">10 Courses</p>
                  </div>
                </div>

                <div class="flex items-center">
                  <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <i class="fas fa-bullhorn text-red-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold">Digital Marketing</h3>
                    <p class="text-sm text-gray-600">7 Courses</p>
                  </div>
                </div>

                <div class="absolute -bottom-4 -right-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg">
                  <span class="text-sm font-semibold">1,200+ Lessons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
