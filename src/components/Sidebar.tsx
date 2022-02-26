/* eslint-disable react/jsx-key */
import React from 'react';
import {
    ClearAllRounded,
    BarChartRounded,
    SearchRounded,
} from '@mui/icons-material';

const Sidebar = () => {
    return (
        <div className="md:w-1/6 w-px-100 h-full shadow-2xl ">
            <div className=" border-b py-3 mt-1 flex justify-around shadow-lg">
                <p className="text-xl  font-semibold antialiased">
                    Service Labs
                </p>
            </div>
            <div className="p-4 space-y-14">
                <div className="space-y-4">
                    <h1 className="text-gray-400">Dashboard</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <SearchRounded className="text-gray-300" />
                            <p className="text-gray-600  ">Search</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <BarChartRounded className="text-gray-300" />
                            <p className="text-gray-600  ">Bar Graph</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ClearAllRounded className="text-gray-300" />
                            <p className="text-gray-600  ">Rates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
