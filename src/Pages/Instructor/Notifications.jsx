import Footer from '../Footer';
import Navbar from './Navbar';
import { useFetchNotifications } from '../../Helpers/fetch';
import { useState } from 'react';

const Notifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching, serverError } = useFetchNotifications(currentPage);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  if (isFetching && currentPage === 1) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse">Loading notifications...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (serverError) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-red-500">Error loading notifications</div>
        </div>
        <Footer />
      </div>
    );
  }

  const notifications = data?.notifications || [];
  const pagination = data?.pagination || {};

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Notifications
        </h1>

        <div className="space-y-6">
          {notifications.length === 0 ? (
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="text-gray-700">No notifications yet</p>
            </div>
          ) : (
            notifications.map((notification, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {notification.title}
                </h2>
                <p className="text-gray-700">{notification.message}</p>
                {notification.date && (
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(notification.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            ))
          )}
        </div>

        {pagination.totalPages > currentPage && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
              disabled={isFetching}
            >
              {isFetching ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Notifications;
