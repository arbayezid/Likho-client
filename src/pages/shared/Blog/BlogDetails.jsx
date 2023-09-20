import React from 'react';
import useBlogs from '../../../hooks/useBlogs';
import BlogPostDetails from './BlogPostDetails';

const BlogDetails = () => {

    const [blogs] = useBlogs();


    return (
        <div className='pb-10'>

            <h5 className='text-2xl lg:mx-16 font-semibold font-roboto text-blue-600'>Posts</h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:mx-16 mx-2">
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