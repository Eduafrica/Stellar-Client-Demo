import { useEffect, useState } from 'react';
import axios from 'axios';
import { notify } from '../Utils/toast';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.withCredentials = true;

//get courses categories
export function useFetchCategories() {
  const [data, setData] = useState({
    isFetching: true,
    data: null,
    status: null,
    serverError: null,
  });
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const { data, status } = await axios.get(`/category`, {
          withCredentials: true,
        });
        //console.log('Data from Hooks>>>', data, 'STATUS', status)

        if (status === 200) {
          setData({
            isFetching: false,
            data: data,
            status: status,
            serverError: null,
          });
        } else {
          setData({
            isFetching: false,
            data: null,
            status: status,
            serverError: null,
          });
        }
      } catch (error) {
        const errorMsg = error.response.data.data;
        notify('error', errorMsg || 'Request Failed');
        setData({
          isFetching: false,
          data: null,
          status: null,
          serverError: error,
        });
      }
    };
    fetchCategoryData();
  }, []);

  return data;
}

//get courses
export function useFetchCourse(selectedCategory) {
  const [data, setData] = useState({
    isFetching: true,
    data: null,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setData((prev) => ({ ...prev, isFetching: true })); // show loader on category change
      try {
        const endpoint =
          selectedCategory === 'all' || !selectedCategory
            ? '/course'
            : `/course?search=${encodeURIComponent(selectedCategory)}`;

        const { data: responseData, status } = await axios.get(endpoint, {
          withCredentials: true,
        });

        if (status === 200) {
          setData({
            isFetching: false,
            data: responseData,
            status: status,
            serverError: null,
          });
        } else {
          setData({
            isFetching: false,
            data: null,
            status: status,
            serverError: null,
          });
        }
      } catch (error) {
        const errorMsg = error?.response?.data?.data;
        notify('error', errorMsg || 'Request Failed');
        setData({
          isFetching: false,
          data: null,
          status: null,
          serverError: error,
        });
      }
    };

    fetchData();
  }, [selectedCategory]); // ✅ refetch when selectedCategory changes

  return data;
}

// get notifications
export function useFetchNotifications(page = 1, limit = 20) {
  const [data, setData] = useState({
    isFetching: true,
    data: null,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data: responseData, status } = await axios.get(
          `/user/notification?limit=${limit}&page=${page}`,
          { withCredentials: true }
        );

        if (status === 200) {
          setData({
            isFetching: false,
            data: responseData.data,
            status: status,
            serverError: null,
          });
        } else {
          setData({
            isFetching: false,
            data: null,
            status: status,
            serverError: null,
          });
        }
      } catch (error) {
        const errorMsg = error.response?.data?.data;
        notify('error', errorMsg || 'Failed to fetch notifications');
        setData({
          isFetching: false,
          data: null,
          status: null,
          serverError: error,
        });
      }
    };

    fetchNotifications();
  }, [page, limit]);

  return data;
}

// get stellar payment history
export function useFetchXlmPaymentHistory(limit = 20, cursor = null) {
  const [data, setData] = useState({
    isFetching: true,
    data: null,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        let endpoint = `/stellar/paymentHistroy?limit=${limit}`;
        if (cursor) {
          endpoint += `&cursor=${cursor}`;
        }

        const { data: responseData, status } = await axios.get(endpoint, {
          withCredentials: true,
        });

        if (status === 200) {
          setData({
            isFetching: false,
            data: responseData.data,
            status: status,
            serverError: null,
          });
        } else {
          setData({
            isFetching: false,
            data: null,
            status: status,
            serverError: null,
          });
        }
      } catch (error) {
        const errorMsg = error.response?.data?.data;
        notify('error', errorMsg || 'Failed to fetch payment history');
        setData({
          isFetching: false,
          data: null,
          status: null,
          serverError: error,
        });
      }
    };

    fetchPaymentHistory();
  }, [limit, cursor]);

  return data;
}
