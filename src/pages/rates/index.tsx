import Rates from 'components/Rates';
import React from 'react';
import { Props } from 'utils/typings';
import Sidebar from 'components/Sidebar';
import { data } from 'utils/data';

const index = () => {
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

export default index;
