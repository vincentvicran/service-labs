/* eslint-disable react/jsx-key */
import React, {
    MouseEventHandler,
    useState,
    useEffect,
    useCallback,
} from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { Props } from 'utils/typings';
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

    const changeModal = (code: string) => {
        if (code === 'USD') {
            setModalCoin({
                code: 'USD',
                symbol: '&#36;',
                rate: '38,878.4800',
                description: 'United States Dollar',
            });
        } else if (code === 'EUR') {
            setModalCoin({
                code: 'EUR',
                symbol: '&euro;',
                rate: '34,758.1776',
                description: 'Euro',
            });
        } else if (code === 'GBP') {
            setModalCoin({
                code: 'GBP',
                symbol: '&pound;',
                rate: '29,044.2462',
                description: 'British Pound Sterling',
            });
        }

        return {
            code: '',
            symbol: '',
            rate: '',
            description: '',
        };
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    //* states for searching query
    const queryProperties = ['code', 'symbol', 'rate', 'description'];

    const [query, setQuery] = useState('');

    //* states, types and functions for sorting
    const headers = [
        { key: 'code', label: 'Code' },
        { key: 'symbol', label: 'Symbol' },
        { key: 'rate', label: 'Rate' },
        { key: 'description', label: 'Description' },
    ];

    type Data = typeof coins;

    type SortKeys = keyof Data[0];

    type SortOrder = 'ascn' | 'desc';

    const [sortKey, setSortKey] = useState<SortKeys>('code');
    const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

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

    function SortButton({
        sortOrder,
        columnKey,
        sortKey,
        onClick,
    }: {
        sortOrder: SortOrder;
        columnKey: SortKeys;
        sortKey: SortKeys;
        onClick: MouseEventHandler<HTMLButtonElement>;
    }) {
        return (
            <button
                onClick={onClick}
                className={`${
                    sortKey === columnKey && sortOrder === 'desc'
                        ? 'sort-button sort-reverse'
                        : 'sort-button'
                }`}
            >
                ▲
            </button>
        );
    }
    const sortedData = useCallback(
        () =>
            sortData({
                tableData: data,
                sortKey,
                reverse: sortOrder === 'desc',
            }),
        [data, sortKey, sortOrder]
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
                    className="border-2 rounded-xl p-3 border-info-600"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className=" bg-white ml-2  w-400 shadow-sm border-2 rounded-xl p-3 border-primary-600">
                <div className="border-b p-3 border-secondary-100">
                    <p className="font-semibold">Rates</p>
                </div>
                <table className="table-auto rounded-lg shadow">
                    <thead>
                        <tr className="bg-secondary-300 border border-secondary-200 rounded-lg">
                            {headers.map((row) => {
                                return (
                                    <th
                                        key={row.key}
                                        className="p-3 text-sm font-semibold tracking-wide text-left"
                                    >
                                        {row.label}{' '}
                                        <SortButton
                                            columnKey={row.key}
                                            onClick={() => changeSort(row.key)}
                                            {...{
                                                sortOrder,
                                                sortKey,
                                            }}
                                        />
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
                                genericSearch(
                                    searchCoin,
                                    queryProperties,
                                    query,
                                    false
                                )
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
                                                onClick={function (e: any) {
                                                    setIsOpen(!isOpen);
                                                    changeModal(e.target.id);
                                                    console.log(e.target.id);
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
