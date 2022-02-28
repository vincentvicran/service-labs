/* eslint-disable react/jsx-key */
import React from 'react';
import {
    ClearAllRounded,
    BarChartRounded,
    SearchRounded,
} from '@mui/icons-material';
import Link from 'next/link';

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
                    <div className="">
                        <Link href="/" passHref>
                            <div className="flex p-3 text-secondary-700  space-x-4 0 hover:bg-secondary-50 hover:border-b rounded-lg cursor-pointer  ">
                                <SearchRounded className="text-secondary-700" />
                                <p className="text-secondary-700  ">
                                    Dashboard
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/bargraph" passHref>
                            <div className="flex p-3 text-secondary-700  space-x-4 0 hover:bg-secondary-50 hover:border-b rounded-lg  cursor-pointer  ">
                                <BarChartRounded className="text-secondary-700" />
                                <p className="text-secondary-700  ">
                                    Bar Graph
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/rates" passHref>
                            <div className="flex p-3 text-secondary-700  space-x-4 0 hover:bg-secondary-50 hover:border-b rounded-lg  cursor-pointer  ">
                                <ClearAllRounded className="text-secondary-700" />
                                <p className="text-secondary-700  ">Rates</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
