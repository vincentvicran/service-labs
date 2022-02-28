/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import Container from 'components/Container';
import { ModalProvider } from 'styled-react-modal';
import Sidebar from 'components/Sidebar';
import { Props } from 'utils/typings';
import useSWR from 'swr';
import { fetcher, swrOptions } from 'utils/swrFetcher';
import { ThemeProvider } from 'next-themes';
import { WbSunnyRounded, ShieldMoonRounded } from '@mui/icons-material';
import { useTheme } from 'next-themes';

const Home = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    const { systemTheme, theme, setTheme } = useTheme('dark');

    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;

        return currentTheme === 'dark' ? (
            <WbSunnyRounded
                className="w-7 h-7"
                role="button"
                onClick={() => setTheme('light')}
            />
        ) : (
            <ShieldMoonRounded
                className="w-7 h-7"
                role="button"
                onClick={() => setTheme('dark')}
            />
        );
    };
    const { data, error } = useSWR('coins', fetcher, swrOptions);

    if (data) console.log(data);

    if (error) return 'An error has occured!';

    if (!data) return 'Loading...';

    return (
        <div>
            <ThemeProvider enableSystem={true} attribute="class">
                <ModalProvider>
                    <div className="flex flex-1 w-screen h-screen dark:bg-secondary-800">
                        <div className="flex shrink  w-px-300">
                            <Sidebar />
                            {renderThemeChanger()}
                        </div>
                        <div className="flex flex-1">
                            <Container data={data} />
                        </div>
                    </div>
                </ModalProvider>
            </ThemeProvider>
        </div>
    );
};

export default Home;
