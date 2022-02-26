/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { Props } from 'utils/typings';
import useSWR from 'swr';
import { fetcher, swrOptions } from 'utils/swrFetcher';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const BarGraph = () => {
    const { data, error } = useSWR('coins', fetcher, swrOptions);

    if (error) alert('An error has occured!');

    if (!data) alert('Loading...');

    const coins = [data.bpi.USD, data.bpi.EUR, data.bpi.GBP];

    return (
        <div className=" bg-white m-2  antialiased shadow-sm w-400 border-2 rounded-xl p-3 border-primary-600">
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
                    <Bar dataKey="rate_float" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default BarGraph;
