import { useState } from 'react';
import { Link } from 'react-router';
import LogoImg from '../../assets/images/logo.png';

function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState('stellar');

  return (
    <div className="w-[80%] bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-white p-6 flex flex-col items-center">
          <img alt="Edu africa logo" src={LogoImg} className="w-40 mb-6" />

          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Pick a payment method
          </h1>
        </div>

        {/* Payment Options */}
        <div className="px-6 pb-6">
          <div className="space-y-4 mb-8">
            {/* Stellar XLM Option */}
            <div
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                selectedMethod === 'stellar'
                  ? 'border-[#00BF63] bg-[#00BF63]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedMethod('stellar')}
            >
              <div className="flex items-center justify-center h-5 w-5 mr-3">
                <div
                  className={`h-4 w-4 rounded-full border-2 ${
                    selectedMethod === 'stellar'
                      ? 'bg-[#00BF63] border-[#00BF63]'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedMethod === 'stellar' && (
                    <div className="h-2 w-2 bg-white rounded-full m-auto"></div>
                  )}
                </div>
              </div>
              <span className="text-gray-800 font-medium">Stellar XLM</span>
            </div>

            {/* Bank Transfer Option */}
            <div
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                selectedMethod === 'bank'
                  ? 'border-[#00BF63] bg-[#00BF63]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedMethod('bank')}
            >
              <div className="flex items-center justify-center h-5 w-5 mr-3">
                <div
                  className={`h-4 w-4 rounded-full border-2 ${
                    selectedMethod === 'bank'
                      ? 'bg-[#00BF63] border-[#00BF63]'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedMethod === 'bank' && (
                    <div className="h-2 w-2 bg-white rounded-full m-auto"></div>
                  )}
                </div>
              </div>
              <span className="text-gray-800 font-medium">Bank Transfer</span>
            </div>

            {/* Paystack Option */}
            <div
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                selectedMethod === 'paystack'
                  ? 'border-[#00BF63] bg-[#00BF63]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedMethod('paystack')}
            >
              <div className="flex items-center justify-center h-5 w-5 mr-3">
                <div
                  className={`h-4 w-4 rounded-full border-2 ${
                    selectedMethod === 'paystack'
                      ? 'bg-[#00BF63] border-[#00BF63]'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedMethod === 'paystack' && (
                    <div className="h-2 w-2 bg-white rounded-full m-auto"></div>
                  )}
                </div>
              </div>
              <span className="text-gray-800 font-medium">Paystack</span>
            </div>
          </div>

          {/* Make Payment Button */}
          <Link
            to="/wallet/order-summary"
            className="w-full bg-[#00BF63] hover:bg-[#00A055] text-white font-medium py-3 px-4 rounded-lg transition duration-300"
          >
            Make Payment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
