import React, { useState } from 'react';
import {
  FiCopy,
  FiSearch,
  FiDownload,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from 'react-icons/fi';
import Footer from './Footer';
import Navbar from './Navbar';
import PendingLogo from '../../src/assets/svg/pending.svg';
import PendingStroke from '../../src/assets/svg/pending-stroke.svg';
import SuccessfulLogo from '../../src/assets/svg/successful.svg';
import FailedLogo from '../../src/assets/svg/failed.svg';
import { useFetchXlmPaymentHistory } from '../Helpers/fetch'; // Update path accordingly

const Wallet = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Fetch payment history
  const { data, isFetching, serverError } = useFetchXlmPaymentHistory(
    20,
    cursor
  );
  const payments = data?.payments || [];
  const nextCursor = data?.paging?.next || null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText('wrhglgkhlihl50hfhbjfkj04@jhrljufg36730');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWithdrawClick = () => {
    const statuses = ['Successful', 'Pending', 'Failed'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    setModalData({
      status: randomStatus,
      message:
        randomStatus === 'Failed'
          ? 'Your withdrawal failed. Money sent failed due to technical issue, please try again later!'
          : randomStatus === 'Pending'
          ? 'Your withdrawal is being processed. It may take up to 24 hours to complete.'
          : 'Your withdrawal was successful! Funds have been transferred to your account.',
    });

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const loadMoreTransactions = () => {
    if (nextCursor) {
      setCursor(nextCursor);
    } else {
      setHasMore(false);
    }
  };

  const filteredPayments = payments.filter((payment) => {
    if (activeTab === 'All') return true;

    // Map API status to UI status
    let status = 'Pending';
    if (payment.status === 'completed') status = 'Successful';
    if (payment.status === 'failed') status = 'Failed';

    return status === activeTab;
  });

  // Modal component
  const Modal = ({ isOpen, onClose, data }) => {
    if (!isOpen || !data) return null;

    const getStatusIcon = () => {
      switch (data.status) {
        case 'Successful':
          return (
            <img
              className="text-4xl text-green-500 mb-4"
              src={SuccessfulLogo}
              alt=""
            />
          );

        case 'Pending':
          return (
            <>
              <img
                className="text-4xl text-green-500 mb-4"
                src={PendingLogo}
                alt=""
              />
              <img
                className="absolute mt-[2rem] ml-[2rem] text-4xl text-green-500 mb-4"
                src={PendingStroke}
                alt=""
              />
            </>
          );
        case 'Failed':
          return (
            <img
              className="text-4xl text-green-500 mb-4"
              src={FailedLogo}
              alt=""
            />
          );
        default:
          return null;
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative p-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <FiX className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-center text-center">
            {getStatusIcon()}

            <h2 className="text-lg font-semibold mb-2">
              Withdrawal {data.status}
            </h2>

            <p className="text-gray-600 mb-6">{data.message}</p>

            <button
              onClick={onClose}
              className="px-12 w-full py-2 bg-[#00BF63] text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Wallet Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800">500,000XLM</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex items-center bg-white px-3 py-2 border border-[#00733B] rounded-full">
                <p className="text-[#00BF63] text-sm md:text-base">
                  <span className="hidden md:inline">Wallet Address: </span>
                  <span className="font-mono">
                    wrhglgkhlihl50hfhbjfkj04@jhrljufg36730
                  </span>
                </p>
                <FiCopy
                  onClick={copyToClipboard}
                  className="ml-2 cursor-pointer text-gray-500 hover:text-[#00BF63] transition-colors"
                />
              </div>
              {copied && (
                <span className="text-xs text-[#00BF63]">Copied!</span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mb-6 md:mb-8">
            <button className="bg-[#00BF63] text-white px-4 py-2 md:px-6 md:py-2 rounded-md font-medium hover:bg-green-600 transition-colors text-sm md:text-base">
              Add money
            </button>
            <button
              onClick={handleWithdrawClick}
              className="border border-[#00BF63] text-[#00BF63] px-4 py-2 md:px-6 md:py-2 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              Withdraw
            </button>
          </div>

          {/* Transaction Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            {['All', 'Pending', 'Successful', 'Failed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium rounded-lg text-sm md:text-base ${
                  activeTab === tab
                    ? 'text-[#00BF63] bg-[#B0EBCF]'
                    : 'text-gray-500 bg-white hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Transaction Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <p className="text-gray-600 text-sm md:text-base">
              {filteredPayments.length} transactions
            </p>
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-48">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BF63] focus:border-transparent w-full"
                />
              </div>
              <div className="flex gap-2">
                <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 text-sm">
                  <FiDownload className="mr-1" />
                  Export
                </button>
                <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 text-sm">
                  <FiFilter className="mr-1" />
                  Filters
                </button>
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#00BF63]/10">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Description
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Amount (XLM)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Date and time
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isFetching && payments.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-4 py-8 text-center">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00BF63]"></div>
                      </div>
                    </td>
                  </tr>
                ) : filteredPayments.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-4 py-8 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="h-24 w-24 text-gray-300 mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                            opacity="0.3"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 14v6l9-5m-9 5l-9-5m9 5v-6m0 0l-9-5m9 5l9-5"
                          />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                          No Transactions
                        </h3>
                        <p className="text-gray-600">
                          You haven't made any transactions yet.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredPayments.map((payment, index) => {
                    // Map API status to UI status
                    let status = 'Pending';
                    if (payment.status === 'completed') status = 'Successful';
                    if (payment.status === 'failed') status = 'Failed';

                    return (
                      <tr key={index}>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {payment.id || `TX${index + 1}`}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {payment.description || 'XLM Transaction'}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {payment.amount} XLM
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>
                            {payment.date
                              ? new Date(payment.date).toLocaleDateString()
                              : 'N/A'}
                          </div>
                          <div className="text-xs text-gray-400">
                            {payment.date
                              ? new Date(payment.date).toLocaleTimeString()
                              : ''}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            status === 'Successful'
                              ? 'bg-green-100 text-green-800'
                              : status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                          >
                            {status}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Load More Button */}
          {nextCursor && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMoreTransactions}
                disabled={isFetching}
                className="px-6 py-2 bg-[#00BF63] text-white rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                {isFetching ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
    </>
  );
};

export default Wallet;
