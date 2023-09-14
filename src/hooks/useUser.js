import React, { useContext } from 'react';
import { AuthContext } from '../pages/Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import axios from 'axios';

const useUser = () => {
   const {user} = useContext(AuthContext)
//    const [axiosSecure ] = useAxiosSecure()
    const {data: isUser, isLoading:isAdminLoading} = useQuery({
        queryKey:['isUser', user?.email],
        queryFn: async()=>{
            const res = await axios.get(`https://likho-backend.onrender.com/general/user/${user.email}`)

            return res.data.user
        }
    })

    console.log('user response' ,isUser)

    return [isUser, isAdminLoading]

};

export default useUser;