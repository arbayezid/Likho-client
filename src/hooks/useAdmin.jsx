import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";

import { AuthContext } from "../pages/Providers/AuthProvider";
import axios from "axios";
import { useQuery } from "react-query";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure()

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:5000/admin/${user?.email}`)
            // console.log('admin response',res)
            return res.data.admin;
            
        }
    })
    console.log('useAdmin response', isAdmin)
    return [isAdmin, isAdminLoading]
};

export default useAdmin;