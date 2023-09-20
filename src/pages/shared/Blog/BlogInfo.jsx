import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container';

const img_hosting_token = import.meta.env.VITE_Image;

const BlogInfo = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedDate, setSubmittedDate] = useState(null); // State to hold the submitted date
    const hosting_img_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {
        setIsSubmitting(true);
    
        const formData = new FormData();
        formData.append('image', data.image[0]);
    
        const currentDate = new Date().toLocaleString();
    
        formData.append('date', currentDate);
        setSubmittedDate(currentDate);
    
        fetch(hosting_img_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
    
                    const { author_name, title, blog_content, sub_title, blog_description, email } = data;
    
                    const blogForm = {
                        author_name,
                        title,
                        blog_content,
                        sub_title,
                        blog_description,
                        email,
                        date: currentDate,
                        image: imgURL,
                        userPhotoURL: user.photoURL, // Include the user's photo URL
                    };
    
                    axiosSecure.post('/blogPosts', blogForm)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                toast.success("Blog submitted successfully!");
                                setIsSubmitting(false);
                            }
                        })
                        .catch(error => {
                            console.error("Error submitting blog:", error);
                            toast.error("An error occurred while submitting the blog.");
                            setIsSubmitting(false);
                        });
                }
            })
            .catch(error => {
                console.error("Error uploading image:", error);
                toast.error("An error occurred while uploading the image.");
                setIsSubmitting(false);
            });
    };
    


    return (
        <Container>
            <div className="blog-form font-poppins mt-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">Post Page</h1>

                <div className="flex gap-5 justify-center   border-s-8 w-1/2 mx-auto bg-blue-100 border-purple-800 shadow-2xl p-8 font-poppins m-10 items-center">
                    <div className="w-28 h-28 rounded-full overflow-hidden  border-purple-800">
                        <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    </div>

                    <p className='border-t-8 h-4 border border-purple-800'></p>

                    <div className="space-y-2">
                        <p className='text-2xl text-gray-600 '>Please Write Your Content</p>
                        <h2 className='text-blue-950 font-semibold text-xl'>{user?.displayName}</h2>
                        <p className='text-gray-700 font-semibold'>{user?.email}</p>
                    </div>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                    {/* Blog Title */}
                    <div className="form-control w-full my-4 ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-blue-950">Blog Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Blog Title"
                            {...register("title", { required: true, maxLength: 120 })}
                            className="w-full p-2 my-4 border rounded-xl"
                        />
                    </div>

                    {/* Blog Image */}
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text text-xl mt-4 font-semibold text-blue-950">Blog Image*</span>
                        </label>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full my-4 rounded-md"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-blue-950">Blog Content*</span>
                        </label>
                        <textarea
                            {...register("blog_content", { required: true, maxLength: 5000 })}
                            placeholder="Blog Content"
                            className="w-full p-2 my-4 border rounded-xl"
                        />
                    </div>

                    {/* Sub Title */}
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-blue-950">Sub Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Sub Title"
                            {...register("sub_title", { required: true, maxLength: 120 })}
                            className="w-full p-2 my-4 border rounded-xl"
                        />
                    </div>

                    {/* Blog Description */}
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text text-xl mt-4 font-semibold text-blue-950">Blog Description*</span>
                        </label>
                        <textarea
                            {...register("blog_description", { required: true, maxLength: 5000 })}
                            placeholder="Written your Blog Description"
                            className="w-full p-2 my-4 border rounded-xl"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-5">

                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl  font-semibold text-blue-950">Author Name</span>

                            </label>
                            <input type="text" placeholder="Author Name"
                                {...register("author_name", { required: true, maxLength: 120 })}
                                defaultValue={user?.displayName}
                                className="input input-bordered w-full   border rounded-xl " />

                        </div>

                        {/* Display the submitted date */}
                        {submittedDate && (
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-xl  font-semibold text-blue-950">Date Submitted</span>
                                </label>
                                <p className='border p-3 rounded-xl'>{submittedDate}</p>
                            </div>
                        )}

                    </div>

                    <input
                        className="px-4 py-2 mt-4 bg-purple-800 text-white rounded-md cursor-pointer  hover:bg-purple-900 w-full md:w-auto"
                        type="submit"
                        value="Blog Submit"
                        disabled={isSubmitting} // Disable the button if isSubmitting is true
                    />
                </form>
                <ToastContainer />
            </div>
        </Container>

    );
};

export default BlogInfo;
