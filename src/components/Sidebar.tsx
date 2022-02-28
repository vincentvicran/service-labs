/* eslint-disable react/jsx-key */
import React from 'react';
import {
    ClearAllRounded,
    BarChartRounded,
    SearchRounded,
} from '@mui/icons-material';

const Sidebar = () => {
    return (
        <div className="flex flex-1 flex-nowrap flex-col px-7 h-screen shadow-2xl pb-40 md:w-1/6 ">
            <div className=" border-b py-3 mt-1 flex justify-around shadow-lg rounded-md">
                <p className="text-xl  font-semibold antialiased">
                    Service Labs
                </p>
            </div>
            <div className="p-4 space-y-14">
                <div className="space-y-4">
                    <h1 className="text-gray-500 font-medium subpixel-antialiased">
                        Dashboard
                    </h1>
                    <div className="">
                        <div className="flex p-3 text-secondary-700  space-x-4 0 hover:bg-secondary-50 hover:border-b rounded-lg cursor-pointer  ">
                            <SearchRounded className="text-secondary-700" />
                            <p className="text-secondary-700  ">Search</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-secondary-700  space-x-4 0 hover:bg-secondary-50 hover:border-b rounded-lg  cursor-pointer  ">
                            <BarChartRounded className="text-secondary-700" />
                            <p className="text-secondary-700  ">Bar Graph</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-secondary-700  space-x-4 0 hover:bg-secondary-50 hover:border-b rounded-lg  cursor-pointer  ">
                            <ClearAllRounded className="text-secondary-700" />
                            <p className="text-secondary-700  ">Rates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
