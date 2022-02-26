/* eslint-disable react/jsx-key */
import React from 'react';
import BarGraph from './BarGraph';
import Rates from './Rates';
import { Props } from 'utils/typings';

export const Container = ({ data }: Props) => {
    return (
        <div className="flex flex-auto flex-wrap bg-gradient-to-r from-secondary-100 to-secondary-50 h-full justify-center items-center bg-fixed">
            <div className="flex flex-1 flex-col basis-full px-8 pt-5 m-1 justify-center items-center">
                <div className="flex font-bold text-2xl transform -translate-y-2 border-b py-4 px-6 mt-1 cursor-pointer justify-around shadow-lg rounded-md antialiased hover:bg-secondary-200">
                    Welcome!
                </div>
                <div className="flex text-secondary-500 text-md antialiased">
                    Check the rates of bitcoin here!
                </div>
            </div>
            <div className="flex flex-1 flex-wrap  basis-full justify-around">
                <div className="flex   p-4 space-x-6">
                    <Rates data={data} />
                </div>
                <div className="flex  ml-3 mt-6 space-x-6  mr-4">
                    <BarGraph />
                </div>
            </div>
            <div>
                <p className="text-xs italic font-light text-justify px-16">
                    {data.disclaimer}
                </p>
            </div>
        </div>
    );
};

export default Container;
