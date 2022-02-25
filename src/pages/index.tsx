/* eslint-disable react/jsx-key */
import Container from 'components/Container';
import Sidebar from 'components/Sidebar';
import { Data } from 'utils/typings';

export interface Props {
    data: [Data];
}

export async function getStaticProps() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    console.log(data);

    return {
        props: {
            data,
        },
        revalidate: 10,
    };
}

const Home = ({ data }: Props) => {
    return (
        <div>
            <div className="flex w-screen h-screen">
                <Sidebar />
                <div className="w-screen ">
                    <Container data={data} />
                </div>
            </div>
        </div>
    );
};

export default Home;
