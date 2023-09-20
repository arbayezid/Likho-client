import { Description } from "@mui/icons-material";
import Container from "../Container";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import BlogComment from "./BlogComment";


const BlogInfoDetails = ({ blogsInfo }) => {
    const { author_name, date, image, title, blog_content, sub_title, blog_description, userPhotoURL } = blogsInfo;


    return (
        <Container>
            <div className="space-y-5 font-poppins lg:px-40">

                <Link to='/blog'>
                    <p className="flex items-center gap-2 text-blue-700 font-semibold text-xs mt-20 mb-10">
                        <FaChevronLeft className="text-xs" /> <span className="text-base">Back to Blog</span>
                    </p></Link>

                <p className="text-gray-800 font-medium">{date}</p>
                <h1 className="text-black font-semibold text-xl md:text-3xl lg:text-4xl">{title}</h1>
                <div className="flex gap-4 items-center">
                    <img className='w-8 h-8 rounded-full' src={userPhotoURL} alt="" />
                    <p className="border-t-8 border border-purple-900"></p>
                    <h5 className='font-semibold text-gray-700'>{author_name}</h5>



                </div>
                <div className="lg:p-10 space-y-10">
                    <p className="text-black  lg:w- text-xl">{blog_content}</p>
                    <img className=" p-10" src={image} alt="" />
                    <h2 className="text-black font-semibold text-xl md:text-3xl lg:text-4xl">{sub_title}</h2>
                    <p className="text-black  lg:w-3/4 text-xl">{blog_description}</p>
                </div>


            </div>

            <BlogComment></BlogComment>
        </Container>



    );
};

export default BlogInfoDetails;