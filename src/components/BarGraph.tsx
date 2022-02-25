/* eslint-disable react/jsx-key */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Props } from 'utils/typings';

const BarGraph = ({ data }: Props) => {
    console.log(data);
    return (
        <div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">
            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold  ">Bar Graph</p>
            </div>
        </div>
    );
};

export default BarGraph;
