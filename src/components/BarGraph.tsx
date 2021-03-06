/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { Props } from 'utils/typings';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const BarGraph = ({ data }: Props) => {
    const coins = [data.bpi.USD, data.bpi.EUR, data.bpi.GBP];

    return (
        <div className=" border-b-2 py-3 mt-1 flex justify-around shadow-2xl rounded-md border-primary-600">
            <div className="border-b p-6 m-4 border-secondary-300">
                <p className="text-sm font-semibold pb-9 antialiased leading-4">
                    Bar Graph
                </p>
                <BarChart width={220} height={220} data={coins}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="code" />
                    <YAxis dataKey="rate_float" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="rate_float" fill="#191990" />
                </BarChart>
            </div>
        </div>
    );
};

export default BarGraph;
