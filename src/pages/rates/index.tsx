import Rates from 'components/Rates';
import React from 'react';
import { Props } from 'utils/typings';
import Sidebar from 'components/Sidebar';
import { swrOptions, fetcher } from 'utils/swrFetcher';
import useSWR from 'swr';

//! const index =() => {
const Rate = () => {
    const { data, error } = useSWR('bar', fetcher, swrOptions);
    return (
        <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-1 w-screen h-screen">
                <div className="flex shrink  w-px-300">
                    <Sidebar />
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <Rates data={data} />
                </div>
            </div>
        </div>
    );
};

export default Rate;
