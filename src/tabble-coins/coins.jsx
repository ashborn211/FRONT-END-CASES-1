import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Coins = () => {
    const [coinData, setCoinData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCoinData = async () => {
            if (id) {
                try {
                    const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
                    setCoinData(response.data.data);
                } catch (error) {
                    console.error("Error fetching coin data:", error);
                }
            }
        };

        fetchCoinData();
    }, [id]);

    return (
        <div>
            <h2>Coin Detail</h2>
            {coinData ? (
                <div>
                    <p>id: {coinData.id}</p>
                    <p>changePercent24Hr: {coinData.changePercent24Hr}</p>
                    <p>explorer: {coinData.explorer}</p>
                    <p>marketCapUsd: {coinData.marketCapUsd}</p>
                    <p>maxSupply: {coinData.maxSupply}</p>
                    <p>name: {coinData.name}</p>
                    <p>priceUsd: {coinData.priceUsd}</p>
                    <p>rank: {coinData.rank}</p>
                    <p>supply: {coinData.supply}</p>
                    <p>symbol: {coinData.symbol}</p>
                    <p>volumeUsd24Hr: {coinData.volumeUsd24Hr}</p>
                    <p>vwap24Hr: {coinData.vwap24Hr}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Coins;
