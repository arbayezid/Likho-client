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
            const res = axios.get(`http://localhost:5000/general/user/${user.email}`)

            return res.data.user
        }
    })

    return [isUser, isAdminLoading]

};

export default useUser;