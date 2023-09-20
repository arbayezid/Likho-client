import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogPostDetails = ({ blogInfo }) => {

    const { _id, author_name, date, image, title, blog_content, userPhotoURL } = blogInfo;

    const sliceBlogContent = blog_content.slice(0, 300)


    return (
        <div>


            <div className="mt-8 border-1 bg-gray-50 border rounded-2xl hover:shadow-lg hover:border-blue-200 border-gray-200 p-5 space-y-2">

                <h2 className='text-xl text-gray-700 font-bold'>{title}</h2>
                <p className='text-gray-600 font-mono'>{sliceBlogContent}...</p>



                <div className="flex justify-between items-center pt-5">
                    <div className="space-y-1">
                        <img className='w-8 h-8 rounded-full' src={userPhotoURL} alt="" />
                        <h5 className='font-semibold text-gray-700'>{author_name}</h5>
                        <p className='text-xs font-mono'>{date}</p>
                    </div>

                    <Link to={`/BlogPostDetailsInfo/${_id}`}>
                        <p className="flex items-center gap-2 text-blue-800 font-bold text-xs">
                            Read More <FaChevronRight className="text-xs" />
                        </p>
                    </Link>


                </div>



            </div>






        </div>
    );
};

export default BlogPostDetails;