import { useEffect, useState } from "react";
import ReviewInfo from "../ReviewInfo/ReviewInfo";
import Container from "../../shared/Container";


const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => {
                // Slice the first 3 entries from the data array
                const slicedReviews = data.slice(0, 3);
                setReview(slicedReviews);
                slicedReviews(data)
                // setReview(data);
            })
    }, [])



    return (
        <div className="mb-20 pt-10 font-poppins">
            <h3 className="text-blue-950 font-bold text-xl lg:text-4xl md:text-2xl text-center m-10 ">
                What do our customers say about us? Reviews.
            </h3>
            <p className="text-center text-xl text-gray-700">
                Customer Review Sites are now an integral part of every customer journey. It is, therefore, essential for companies to <br />deal extensively with rating portals. Here are some suggestions.
            </p>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4  ">
                    {review.map((reviewDetails) => (
                        <ReviewInfo key={reviewDetails._id} reviewDetails={reviewDetails} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Review;