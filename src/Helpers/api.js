import axios from "axios"


axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL
axios.defaults.withCredentials = true

/** STUDENT **/
//student login
export async function studentLogin(formData){
    try {
        const res = await axios.post('/student/register', formData, {withCredentials: true})
        if(res.data){
            return res.data
        }
    } catch (error) {
        const res = error.response.data || { message: 'Unable to register user'}
        return res
    }
}



/** INSTRUCTOR **/