/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { Props, Coin } from 'utils/typings';
import Coins from './Coins';

const Rates = ({ data }: Props) => {
    const [coins, setCoins] = useState([
        data.bpi.USD,
        data.bpi.GBP,
        data.bpi.EUR,
    ]);

    useEffect(() => {
        setCoins([data.bpi.USD, data.bpi.GBP, data.bpi.EUR]);
    }, [data.bpi.USD, data.bpi.GBP, data.bpi.EUR]);

    console.log(coins);

    return (
        <div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">
            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold  ">Rates</p>
            </div>
            <div>
                {coins.map((coin: Coin) => {
                    return (
                        <Coins
                            code={coin.code}
                            symbol={coin.symbol}
                            rate={coin.rate}
                            description={coin.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Rates;
