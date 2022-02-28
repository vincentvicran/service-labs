/* eslint-disable react/jsx-key */
import React from 'react';
import Container from 'components/Container';
import Sidebar from 'components/Sidebar';
import { Props } from 'utils/typings';

const Home = ({ data }: Props) => {
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
