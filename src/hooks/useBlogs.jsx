import { useEffect, useState } from "react";


const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://likho-backend.onrender.com/blogPosts')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
    }, [])



    return [blogs, loading]
};

export default useBlogs;