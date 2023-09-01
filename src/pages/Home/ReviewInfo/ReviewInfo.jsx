
import { FaQuoteRight } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ReviewInfo = ({ reviewDetails }) => {
    const { author_name, country, author_comment, img, rating } = reviewDetails;

    return (
        <div className="mt-10  p-5 rounded-lg relative bg-white shadow-xl">
            <div className="flex items-center mb-5 gap-6 text-black">
                <img className="w-11 h-11 rounded-full" src={img} alt={author_name} />
                <div>
                    <p className="font-semibold text-xl">{author_name}</p>
                    <p className="font-mono">{country}</p>
                </div>
            </div>

            <p className="text-black px-2 mb-5">
                "{author_comment && author_comment.length > 190
                    ? `${author_comment.slice(0, 190)}...`
                    : author_comment}  "
            </p>


            <div className="flex items-center mb-8 px-2 gap-2 ">
                <p className=""> <span className="text-black font-medium">Rating:  </span>  </p>
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                <span className='ms-2 text-white font-medium font-mono'>({rating})</span>
            </div>




            <FaQuoteRight className="absolute text-4xl text-gray-400 bottom-0 mx-5 right-0 transform translate-x-2 -translate-y-2" />
        </div>
    );
};

export default ReviewInfo;
