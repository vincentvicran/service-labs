import '../styles/globals.css';
import { ModalProvider } from 'styled-react-modal';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ModalProvider>
            <Component {...pageProps} />;
        </ModalProvider>
    );
}

export default MyApp;
