import { useEffect, useState } from "react";


const useTemplates = () => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://likho-backend.vercel.app/templates')
            .then(res => res.json())
            .then(data => {
                setTemplates(data);
                setLoading(false);
            })
    }, [])



    return [templates, loading]
};

export default useTemplates;