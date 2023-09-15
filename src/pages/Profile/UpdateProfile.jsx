import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Providers/AuthProvider';

const UpdateProfile = () => {

    const { user } = useContext(AuthContext)
    const [dbUser, setDbUser] = useState({});


    useEffect(() => {
        fetch(`https://likho-backend.onrender.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setDbUser(data)

            )
    }, [user])
    console.log(dbUser);

    const handleUpdateProfile = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const birthday = form.birthday.value;
        const gender = form.gender.value;
        const email = form.email.value;
        const updatedProfile = { name, phone, birthday, gender, email }
        console.log(updatedProfile);



        // send data to server
        fetch(`https://likho-backend.onrender.com/users/${dbUser?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    alert("Update Successfully");
                }
            })
        console.log(updatedProfile);

    }
    return (
        <div className=" h-screen  flex justify-center items-center ">

            <div className=' text-center pt-4 border bg-gray-200'>
                <h2 className='text-3xl pb-4 '>Profile</h2>
                <div className='flex gap-16 p-8 '>
                    <div className='flex flex-col p-4 '>
                        <img className='h-[130px] w-[130px] rounded-[50%]' src={user.photoURL} alt="" />
                        {/* <input type="file" className="file-input file-input-bordered file-input-sm w-56 mt-3" /> */}
                    </div>
                    <form onSubmit={handleUpdateProfile}>


                        <div className=''>
                            <div className=' flex gap-4 mb-4'>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Name</span>
                                    </label>
                                    <label className="">

                                        <input type="text" name="name" defaultValue={dbUser?.name} placeholder="name" className="p-3 rounded-sm w-full" />
                                    </label>

                                </div>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Email</span>
                                    </label>
                                    <label className="">

                                        <input type="text" name="email" defaultValue={dbUser?.email} placeholder="email" className="p-3 rounded-sm w-full" />
                                    </label>

                                </div>


                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Phone Number</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="phone" defaultValue={dbUser?.phone} placeholder="phone" className="p-3 rounded-sm w-full" />
                                    </label>

                                </div>

                            </div>


                            <div className='flex gap-4 mb-4'>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Birthday</span>
                                    </label>
                                    <label className="">

                                        <input type="text" name="birthday" defaultValue={dbUser?.birthday} placeholder="birthday" className="p-3 rounded-sm w-full" />
                                    </label>

                                </div>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Gender</span>
                                    </label>
                                    <label className="">

                                        <input type="text" name="gender" defaultValue={dbUser?.gender} placeholder="gender" className="p-3 rounded-sm w-full" />
                                    </label>

                                </div>
                            </div>
                        </div>



                        <div className='form-control' style={{ width: '10%' }}>
                            <input type="submit" value="Update" className="btn-sm  bg-success" />

                        </div>


                    </form>
                </div>
            </div>


        </div>

    );
};

export default UpdateProfile;