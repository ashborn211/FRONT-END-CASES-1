import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Coins = (props) => {
    const { id } = props.match.params;

    const fetchCoinData = async () => {
        const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
        console.log(response.data);
    };

    useEffect(() => {
        fetchCoinData();
    }, [id]);

    return (
        <div>
            <h2>Coin Detail</h2>
            <p>id: {id}</p>
            <p>changePercent24Hr: {changePercent24Hr}</p>
            <p>explorer: {explorer}</p>
            <p>marketCapUsd: {marketCapUsd}</p>
            <p>maxSupply: {maxSupply}</p>
            <p>name: {name}</p>
            <p>priceUsd: {priceUsd}</p>
            <p>rank: {rank}</p>
            <p>supply: {supply}</p>
            <p>symbol: {symbol}</p>
            <p>volumeUsd24Hr: {volumeUsd24Hr}</p>
            <p>vwap24Hr: {vwap24Hr}</p>
        </div>
    );
};

export default Coins;
