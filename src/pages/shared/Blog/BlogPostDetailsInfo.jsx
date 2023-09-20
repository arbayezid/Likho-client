import { useParams } from "react-router-dom";
import useBlogs from "../../../hooks/useBlogs";
import BlogInfoDetails from "./BlogInfoDetails";
import Loader from "../Loader/Loader";


const BlogPostDetailsInfo = () => {

    const { id } = useParams();
    const [blogs] = useBlogs();

    // Find the specific college details based on the id
    const blogsDetails = blogs.find((blog) => blog._id === id);

    return (
        <div className="m-10">
            {
                blogsDetails ? (
                    <BlogInfoDetails
                        blogsInfo={blogsDetails}
                    />
                ) : (
                    <p><Loader /></p>
                )
            }

        </div>
    );
};

export default BlogPostDetailsInfo;