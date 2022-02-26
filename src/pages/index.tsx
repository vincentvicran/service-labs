/* eslint-disable react/jsx-key */
import React from 'react';
import Container from 'components/Container';
import Sidebar from 'components/Sidebar';
import { Props } from 'utils/typings';
import useSWR from 'swr';
import { fetcher, swrOptions } from 'utils/swrFetcher';

const Home = () => {
    const { data, error } = useSWR('coins', fetcher, swrOptions);

    if (error) return 'An error has occured!';

    if (!data) return 'Loading...';

    return (
        <div>
            <div className="flex w-screen h-screen relative">
                <Sidebar />
                <div className="w-screen ">
                    <Container data={data} />
                </div>
            </div>
        </div>
    );
};

export default Home;
