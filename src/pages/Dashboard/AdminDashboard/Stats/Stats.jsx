import axios from 'axios';
import { useQuery } from 'react-query';

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {

    const { data: documents = [] } = useQuery({
        queryKey: ['documents'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/documents')
            return res.data
        }
    })

    console.log('documents', documents)


    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={documents}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="CreateDocument" fill="#8884d8" />
                    <Bar dataKey="download" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Stats;