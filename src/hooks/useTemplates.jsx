import { useEffect, useState } from "react";


const useTemplates = () => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/templates')
            .then(res => res.json())
            .then(data => {
                setTemplates(data);
                setLoading(false);
            })
    }, [])



    return [templates, loading]
};

export default useTemplates;