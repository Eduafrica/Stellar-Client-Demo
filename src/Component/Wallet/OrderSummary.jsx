import { useState } from 'react';
import { Link } from 'react-router';
import LogoImg from '../../assets/images/logo.png';

function OrderSummary() {
  return (
    <div className="w-[80%] bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        {/* Header with centered logo */}
        <div className="flex flex-col items-center p-6">
          <img alt="Edu africa logo" src={LogoImg} className="w-32 mb-6" />

          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Order summary
          </h2>

          {/* Centered image after order summary */}
          <div className="w-48 h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
            <span className="text-gray-500">Course Image</span>
          </div>
        </div>

        {/* Course details */}
        <div className="px-6">
          <div className="mb-4 text-left">
            <h3 className="text-lg font-semibold text-gray-800">
              Figma UI/UX Design Essentials
            </h3>
            <p className="text-gray-600">Beginner</p>
          </div>

          <div className="text-2xl font-bold text-gray-800 mb-6 text-left">
            N5,000.00
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Payment buttons */}
          <div className="space-y-4 mb-6">
            <button className="w-full bg-[#00BF63] hover:bg-[#00A055] text-white font-medium py-3 px-4 rounded-lg transition duration-300">
              Pay N5,000 in XLM
            </button>

            <button className="w-full border border-[#00BF63] text-[#00BF63] hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition duration-300">
              Pay N5,000 in XLM for monthly sub
            </button>
          </div>

          {/* Warning text */}
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  By paying with stellar XLM, you allow EduAfrica to charge your
                  future payments in accordance with their terms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
