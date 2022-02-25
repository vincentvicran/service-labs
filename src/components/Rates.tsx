/* eslint-disable react/jsx-key */
import React from 'react';
import { Props } from 'pages/index';

const Rates = ({ data }: Props) => {
    return (
        <div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">
            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold  ">Rates</p>
            </div>
        </div>
    );
};

export default Rates;
