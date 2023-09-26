import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';


const MyProfile = () => {
     const allUser = useLoaderData();

    const { user } = useContext(AuthContext);
    // console.log(user);
    // const {users}=allUser;
    //  console.log("all User",allUser);
    const { register, handleSubmit } = useForm();
    const [dbUser,setDbUser]=useState({});


    // useEffect(() => {
    //     fetch(`https://likho-backend-himlaoy.vercel.app/users?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setDbUser(data)
            
    //         )
    // }, [user])
    // console.log(dbUser);


    useEffect(() => {
        fetch(`https://likho-backend-himlaoy.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setDbUser(data)
            
            )
    }, [user])
    console.log(dbUser);


    const onSubmit = data => {
        console.log('normal data',data);
        const updateUserInfo = { displayName: data.displayName, email: data.email,phoneNumber: data.phoneNumber };
        console.log(updateUserInfo);
          

    //     fetch(`https://likho-backend-himlaoy.vercel.app/users`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateUserInfo)
    //     })
    //         .then(res => res.json())
    //         .then(insideData => console.log("insidedata",insideData))
    
}


    return (
        <div className=' flex justify-center item-center border px-20  bg-blue-50 mt-10' >
        <div className='mt-16'>
            <h2 className='text-3xl font-semibold mb-5 '>My Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="md:flex gap-10">
                <div className='flex flex-col items-center'>
                     <img className='h-[100px] w-[10px] rounded-[50%]' src={user.photoURL} alt="" /> 
                    {/* <FaUserCircle className='h-[100px] w-[100px]' /> */}
                    {/* <input type="file" className="file-input file-input-bordered file-input-sm w-56 mt-3" /> */}
                </div>

                <div className="max-w-sm">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Full Name</span>
                            </label>
                            <input readOnly type="text" defaultValue={dbUser?.name} {...register("displayName", { required: true })} placeholder='Full Name' className="input input-bordered rounded-lg w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email Address</span>
                            </label>
                            <input readOnly type="email" defaultValue={dbUser?.email} {...register("email", { required: true })} placeholder="Email Address" className="input input-bordered rounded-lg" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Phone Number</span>
                            </label>
                            <input readOnly type="number" defaultValue={dbUser?.phone} {...register("phoneNumber", { required: true })} placeholder="phone number" className="input input-bordered rounded-lg" />
                        </div>

                        <div className="form-control mt-2 pt-2">
                           <Link 
                             to={`/updateProfile/${dbUser?._id}`}
                           
                           >
                           <button className="btn bg-blue-300 rounded-lg ">Edit</button></Link> 
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default MyProfile;