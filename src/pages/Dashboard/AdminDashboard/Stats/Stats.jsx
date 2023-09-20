import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const Stats = () => {

    const {data : documents = []} = useQuery({
            queryKey: ['documents'],
            queryFn: async ()=>{
                const res = await axios.get('http://localhost:5000/documents')
                console.log(res, 'documents')
                return res.data
            }
    })

    console.log( 'documents',documents)
   

    return (
        <div>
            <h1>Hello, here will be all doc user</h1>
        </div>
    );
};

export default Stats;