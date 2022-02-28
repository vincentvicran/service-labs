import BarGraph from 'components/BarGraph';
import React, { useEffect, useState } from 'react';
import { Data, Props } from 'utils/typings';
import Sidebar from 'components/Sidebar';

const Bar = ({ data }: Props) => {
    return (
        <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-1 w-screen h-screen">
                <div className="flex shrink  w-px-300">
                    <Sidebar />
                </div>
                {data && (
                    <div className="flex flex-1 justify-center items-center">
                        <BarGraph data={data} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bar;
