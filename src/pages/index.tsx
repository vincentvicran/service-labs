/* eslint-disable react/jsx-key */
import React from 'react';
import Container from 'components/Container';
import Sidebar from 'components/Sidebar';
import { Props } from 'utils/typings';
import useSWR from 'swr';
import { fetcher, swrOptions } from 'utils/swrFetcher';

const Home = () => {
    const { data, error } = useSWR('coins', fetcher, swrOptions);

    if (data) console.log(data);

    if (error) return 'An error has occured!';

    if (!data) return 'Loading...';

    return (
        <div>
            <div className="flex flex-1 w-screen h-screen">
                <div className="flex shrink  w-px-300">
                    <Sidebar />
                </div>
                <div className="flex flex-1">
                    <Container data={data} />
                </div>
            </div>
        </div>
    );
};

export default Home;
