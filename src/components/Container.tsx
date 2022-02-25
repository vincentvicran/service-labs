/* eslint-disable react/jsx-key */
import React from 'react';
import BarGraph from './BarGraph';
import Rates from './Rates';
import { Props } from 'pages/index';

export const Container = ({ data }: Props) => {
    return (
        <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full ">
            <BarGraph data={data} />
            <Rates data={data} />
        </div>
    );
};

export default Container;
