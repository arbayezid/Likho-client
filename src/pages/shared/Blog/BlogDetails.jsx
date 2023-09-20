import React from 'react';
import useBlogs from '../../../hooks/useBlogs';
import BlogPostDetails from './BlogPostDetails';

const BlogDetails = () => {

    const [blogs] = useBlogs();


    return (
        <div className='pb-10'>

            <h5 className='text-2xl px-3 font-semibold font-roboto text-gray-800'>Posts</h5>

            <div className="grid grid-cols-2 gap-5 ">
            {
                blogs.map((blogInfo) => (
                    <BlogPostDetails key={blogInfo._id} blogInfo={blogInfo} />
                ))
            }
            </div>

        </div>
    );
};

export default BlogDetails;