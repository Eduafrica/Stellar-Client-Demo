import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.withCredentials = true;

/** STUDENT **/
//student register
export async function studentRegister(formData) {
  try {
    const res = await axios.post('/student/register', formData, {
      withCredentials: true,
    });
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    const res = error.response.data || { message: 'Unable to register user' };
    return res;
  }
}

//student login
export async function studentLogin(formData) {
  try {
    const res = await axios.post('/student/login', formData, {
      withCredentials: true,
    });
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    const res = error.response.data || { message: 'Unable to login user' };
    return res;
  }
}

/** INSTRUCTOR **/
//instructor register
export async function instructorRegister(formData) {
  try {
    const res = await axios.post('/instructor/register', formData, {
      withCredentials: true,
    });
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    const res = error.response.data || { message: 'Unable to register user' };
    return res;
  }
}

//instructor login
export async function instructorLogin(formData) {
  try {
    const res = await axios.post('/instructor/login', formData, {
      withCredentials: true,
    });
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    const res = error.response.data || { message: 'Unable to login user' };
    return res;
  }
}
