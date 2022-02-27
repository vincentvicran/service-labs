/* eslint-disable react/jsx-key */
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { Props, Coin, Header, SortHeader } from 'utils/typings';
import genericSearch from 'utils/genericSearch';

export const StyledModal = Modal.styled`
    width: 20rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100000;
    background-color: white;
    border-radius: 10%;
`;

const Rates = ({ data }: Props) => {
    //* states for coins data handling
    const [coins, setCoins] = useState([
        data.bpi.USD,
        data.bpi.GBP,
        data.bpi.EUR,
    ]);
    useEffect(() => {
        setCoins([data.bpi.USD, data.bpi.GBP, data.bpi.EUR]);
    }, [data.bpi.USD, data.bpi.GBP, data.bpi.EUR]);

    //* states and functions for Modal
    const [isOpen, setIsOpen] = useState(false);
    const [modalCoin, setModalCoin] = useState({
        code: '',
        symbol: '',
        rate: '',
        description: '',
    });

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    //* states for searching query
    const [query, setQuery] = useState('');

    //* state used as query properties in generic search
    const [keyArr, setKeyArr] = useState<KeyArr>([
        'code',
        'symbol',
        'rate',
        'description',
    ]);

    //* states, types and functions for sorting
    type Data = typeof coins;

    type SortKeys = keyof Data[0];

    type KeyArr = SortKeys[];

    type SortOrder = 'ascn' | 'desc';

    const [sortKey, setSortKey] = useState<SortKeys>('code');
    const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

    const dataHeaders: SortHeader = {
        code: { key: 'code', label: 'Code' },
        symbol: { key: 'symbol', label: 'Symbol' },
        rate: { key: 'rate', label: 'Rate' },
        description: { key: 'description', label: 'Description' },
    };

    const sortHeaders: Header[] = [
        dataHeaders.code,
        dataHeaders.symbol,
        dataHeaders.rate,
        dataHeaders.description,
    ];

    function sortData({
        tableData,
        sortKey,
        reverse,
    }: {
        tableData: Data;
        sortKey: SortKeys;
        reverse: boolean;
    }) {
        if (!sortKey) return tableData;

        const sortedData = coins.sort((a, b) => {
            return a[sortKey] > b[sortKey] ? 1 : -1;
        });

        if (reverse) {
            return sortedData.reverse();
        }

        return sortedData;
    }

    const sortedData = useCallback(
        () =>
            sortData({
                tableData: coins,
                sortKey,
                reverse: sortOrder === 'desc',
            }),
        [coins, sortKey, sortOrder]
    );

    function changeSort(key: SortKeys) {
        setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');

        setSortKey(key);
    }

    return (
        <div className="flex flex-auto flex-wrap flex-col antialiased leading-4 justify-center items-center">
            <div className="m-6">
                <input
                    placeholder="Search..."
                    className="border-b-2 p-3 mt-1 shadow-2xl rounded-md border-info-600"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="  ml-2 w-400p-3 border-b-2 py-3 mt-1 shadow-2xl rounded-md border-primary-600">
                <div className="border-b p-3 border-secondary-100">
                    <p className="font-semibold">Rates</p>
                </div>
                <table className="table-auto rounded-lg shadow">
                    <thead>
                        <tr className="bg-secondary-300 border border-secondary-200 rounded-lg">
                            {sortHeaders.map((row) => {
                                const keyHead = row.key as SortKeys;
                                return (
                                    <th
                                        key={keyHead}
                                        onClick={() => changeSort(keyHead)}
                                        className="p-3 cursor-pointer text-sm font-semibold tracking-wide text-left"
                                    >
                                        {row.label}
                                    </th>
                                );
                            })}
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <StyledModal
                            isOpen={isOpen}
                            onBackgroundClick={toggleModal}
                            onEscapeKeydown={toggleModal}
                        >
                            <div onClick={toggleModal}>
                                <div
                                    key={modalCoin.code}
                                    className="flex flex-nowrap flex-col justify-center items-center z-50 rounded-xl"
                                >
                                    <div className="p-2 m-1 text-md flex justify-between bg-secondary-400 border border-secondary-200 rounded-lg shadow ">
                                        <div>Coin Details</div>
                                    </div>
                                    <p className="text-secondary-900 p-2 m-1 text-sm hover:bg-secondary-300 border border-secondary-200 rounded-lg shadow ">
                                        {modalCoin.code}
                                    </p>
                                    <p className="text-secondary-900  p-2 m-1 text-sm  hover:bg-secondary-300 border border-secondary-200 rounded-lg shadow">
                                        {modalCoin.symbol}
                                    </p>
                                    <p className="text-secondary-900  p-2 m-1 text-sm  hover:bg-secondary-300 border border-secondary-200 rounded-lg shadow">
                                        {modalCoin.rate}
                                    </p>
                                    <p className="text-secondary-900  p-2 m-1 text-sm  hover:bg-secondary-300 border border-secondary-200 rounded-lg shadow">
                                        {modalCoin.description}
                                    </p>
                                </div>
                            </div>
                        </StyledModal>
                        {sortedData()
                            .filter((searchCoin) =>
                                genericSearch(searchCoin, keyArr, query, false)
                            )
                            .map((coin) => {
                                return (
                                    <tr key={coin.code}>
                                        <td className="p-3 text-sm text-secondary-700">
                                            {coin.code}
                                        </td>
                                        <td className="p-3 text-sm text-secondary-700">
                                            {coin.symbol}
                                        </td>
                                        <td className="p-3 text-sm text-secondary-700">
                                            {coin.rate}
                                        </td>
                                        <td className="p-3 text-sm text-secondary-700">
                                            {coin.description}
                                        </td>
                                        <td className="p-3 text-sm text-secondary-700">
                                            <button
                                                id={coin.code}
                                                className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-secondary-700 rounded-md shadow bg-opacity-50 hover:bg-primary-400"
                                                onClick={function () {
                                                    setIsOpen(!isOpen);
                                                    setModalCoin(coin);
                                                }}
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Rates;
