export interface Data {
    time: {
        updated: string;
    };
    disclaimer: string;
    chartName: string;
    bpi: { USD: Coin; GBP: Coin; EUR: Coin };
}

export interface Props {
    data: Data;
}

export interface Coin {
    code: sting;
    symbol: string;
    rate: string;
    description: string;
    rate_float?: number;
}

export interface SortHeader {
    code: Header;
    symbol: Header;
    rate: Header;
    description: Header;
}

export interface Header {
    key: string;
    label: string;
}
