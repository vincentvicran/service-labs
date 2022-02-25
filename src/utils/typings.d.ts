export interface Data {
    time: {
        updated: Date;
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
