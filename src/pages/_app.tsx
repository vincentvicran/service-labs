import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ModalProvider } from 'styled-react-modal';
import useSWR from 'swr';
import { fetcher, swrOptions } from 'utils/swrFetcher';

function MyApp({ Component, pageProps }: AppProps) {
    const { data, error } = useSWR('coins', fetcher, swrOptions);

    if (data) console.log(data);

    if (error) return 'An error has occured!';

    if (!data) return 'Loading...';

    return (
        <ModalProvider>
            <Component {...pageProps} data={data} />
        </ModalProvider>
    );
}

export default MyApp;
